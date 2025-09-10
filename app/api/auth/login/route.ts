import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { message: "Login not implemented" },
    { status: 501 }
  );
}
