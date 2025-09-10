import { NextResponse } from "next/server";

// Basic placeholder endpoint for future admin APIs
export async function GET() {
  return NextResponse.json({ status: "ok", message: "Admin API placeholder" });
}

