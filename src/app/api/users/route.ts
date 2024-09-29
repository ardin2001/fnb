import { NextRequest, NextResponse } from "next/server";
import { GetAllUser, GetUserBy, PostUser } from "@/app/lib/firebase/users";
import {
  notFound,
  internalServerError,
  notImplemented,
  conflict,
} from "../statusCode";
import validator from "./validator";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limits: number = Number(searchParams.get("limit")) || 10;
  const order = searchParams.get("order");
  const name = searchParams.get("name");
  const sort: any = searchParams.get("sort") || "asc";
  const page: number = Number(searchParams.get("page")) || 1;
  try {
    let { status, statusCode, data } = await GetAllUser(order, sort);
    if (name) {
      data = data.filter((user: any) =>
        user.fullname.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (limits || page) {
      data = data.slice((page - 1) * limits, (page - 1) * limits + limits);
    }

    if (status) {
      return NextResponse.json(
        {
          status,
          statusCode,
          message: "Success get all users data",
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
            message: "failed get all users data",
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
    const inputUser = await req.json();
    inputUser.role = "user";
    inputUser.verified = false;

    const result = validator(inputUser);
    if(!result.status){
      return NextResponse.json(
        {
          status: false,
          statusCode: notFound,
          message: result.message,
          data: null,
        },
        {
          status: notFound,
        }
      );
    }

    const { status, statusCode }: any = await GetUserBy(inputUser);
    if (status) {
      return NextResponse.json(
        {
          status: false,
          statusCode: conflict,
          message: "User available",
          data: null,
        },
        {
          status: conflict,
        }
      );
    } else {
      if (statusCode == notFound) {
        const { status, statusCode } = await PostUser(inputUser);
        if (status) {
          return NextResponse.json(
            {
              status,
              statusCode,
              message: "Successfully post user data",
              data: inputUser,
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
