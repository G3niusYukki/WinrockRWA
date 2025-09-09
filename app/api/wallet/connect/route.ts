import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    { message: 'Wallet connection not implemented' },
    { status: 501 }
  );
}
