import { NextRequest, NextResponse } from "next/server";

interface Post {
  email: string;
  message: string;
}

const posts: Post[] = [];

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const { email, message } = await req.json();

  if (!email || !message) {
    return NextResponse.json(
      { error: "Email and message are required" },
      { status: 400 }
    );
  }

  posts.push({ email, message });
  return NextResponse.json({ success: true });
}
