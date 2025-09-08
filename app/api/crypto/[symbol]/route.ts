import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ symbol: string }> }
) {
  const { symbol } = await params;
  const upper = symbol.toUpperCase();

  const response = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${upper}`,
    {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY ?? '',
        Accept: 'application/json',
      },
      cache: 'no-store',
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch price' },
      { status: response.status }
    );
  }

  const data = await response.json();
  const price = data.data?.[upper]?.quote?.USD?.price ?? null;

  return NextResponse.json({ symbol: upper, price });
}
