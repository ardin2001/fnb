import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      status: true,
      statusCode: 200,
      message: "success",
      data: {
        text: "Route get order detail!",
      },
    },
    {
      status: 200,
    }
  );
}

export async function PUT(req: NextRequest) {
  return NextResponse.json(
    {
      status: true,
      statusCode: 200,
      message: "success",
      data: {
        text: "Route update order detail!",
      },
    },
    {
      status: 200,
    }
  );
}

export async function DELETE(req: NextRequest) {
  return NextResponse.json(
    {
      status: true,
      statusCode: 200,
      message: "success",
      data: {
        text: "Route delete order detail!",
      },
    },
    {
      status: 200,
    }
  );
}
