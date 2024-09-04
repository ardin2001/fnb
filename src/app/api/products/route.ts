import { NextRequest, NextResponse } from "next/server";
import {
  GetAllProduct,
  PostProduct,
  GetProductBy,
} from "@/app/lib/firebase/products";
import {
  notFound,
  internalServerError,
  notImplemented,
  conflict,
} from "../statusCode";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limits:number = Number(searchParams.get("limit")) || 10;
  const order = searchParams.get("order");
  const category = searchParams.get("category");
  const name = searchParams.get("name");
  const sort:any = searchParams.get("sort") || "asc";
  const page:number = Number(searchParams.get("page")) || 1;
  try {
    let { status, statusCode, data } = await GetAllProduct(order,sort);
    if (category) {
      data = data.filter((product: any) => product.category === category)
    }if(limits || page){
      data = data.splice((page - 1) * limits, ((page - 1) * limits)+limits)
    }if(name){
      data = data.filter((product: any) => product.name.toLowerCase().includes(name.toLowerCase()))
    }
    if (status) {
      return NextResponse.json(
        {
          status,
          statusCode,
          message: "Success get all products data",
          page: page,
          data,
        },
        {
          status: statusCode,
        }
      );
    } else {
      if (statusCode == notFound) {
        return NextResponse.json(
          {
            status,
            statusCode,
            message: "failed get all products data",
            data,
          },
          {
            status: statusCode,
          }
        );
      } else if (statusCode == notImplemented) {
        return NextResponse.json(
          {
            status,
            statusCode,
            message: "Error Server API",
            data: null,
          },
          {
            status: statusCode,
          }
        );
      }
    }
  } catch {
    return NextResponse.json(
      {
        status: false,
        statusCode: internalServerError,
        message: "Internal Server Error",
        data: null,
      },
      {
        status: internalServerError,
      }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const dataInput = await req.json();
    const { status, statusCode }: any = await GetProductBy(dataInput);
    if (status) {
      return NextResponse.json(
        {
          status: false,
          statusCode: conflict,
          message: "Product name available",
          data: null,
        },
        {
          status: conflict,
        }
      );
    } else {
      if (statusCode == notFound) {
        const { status, statusCode } = await PostProduct(dataInput);
        if (status) {
          return NextResponse.json(
            {
              status,
              statusCode,
              message: "Successfully post product data",
              data: dataInput,
            },
            {
              status: statusCode,
            }
          );
        } else {
          return NextResponse.json(
            {
              status,
              statusCode,
              message: "Error Server API",
              data: null,
            },
            {
              status: statusCode,
            }
          );
        }
      } else if (statusCode == notImplemented) {
        return NextResponse.json(
          {
            status,
            statusCode,
            message: "Error Server API",
            data: null,
          },
          {
            status: statusCode,
          }
        );
      }
    }
  } catch {
    return NextResponse.json(
      {
        status: false,
        statusCode: internalServerError,
        message: "Internal Server Error",
        data: null,
      },
      {
        status: internalServerError,
      }
    );
  }
}
