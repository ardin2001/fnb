import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      status: true,
      statusCode: 200,
      message: "success",
      data: {
        text: "Route get orders!",
      },
    },
    {
      status: 200,
    }
  );
}

export async function POST(req: NextRequest) {
  return NextResponse.json(
    {
      status: true,
      statusCode: 200,
      message: "success",
      data: {
        text: "Route create order detail!",
      },
    },
    {
      status: 200,
    }
  );
}
