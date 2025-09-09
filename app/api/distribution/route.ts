import { NextResponse } from "next/server";

// Placeholder backend interface for distribution data
export async function GET() {
  return NextResponse.json({
    platform: "Platform",
    secondLevel: [
      {
        id: 1,
        name: "User A",
        thirdLevel: [
          { id: 11, name: "User A1" },
          { id: 12, name: "User A2" },
        ],
      },
      {
        id: 2,
        name: "User B",
        thirdLevel: [
          { id: 21, name: "User B1" },
          { id: 22, name: "User B2" },
        ],
      },
    ],
  });
}
