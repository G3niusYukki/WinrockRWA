import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get('symbol');

  return NextResponse.json(
    { symbol, price: null, message: 'Price lookup not implemented' },
    { status: 501 }
  );
}
