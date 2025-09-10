import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { message: "Register not implemented" },
    { status: 501 }
  );
}
