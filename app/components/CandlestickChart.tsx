'use client';

interface CandlestickChartProps {
  data: number[][]; // [timestamp, open, high, low, close]
}

export default function CandlestickChart({ data }: CandlestickChartProps) {
  if (!data || data.length === 0) {
    return null;
  }

  const width = 200;
  const height = 100;
  const candleWidth = width / data.length;
  const highs = data.map((d) => d[2]);
  const lows = data.map((d) => d[3]);
  const max = Math.max(...highs);
  const min = Math.min(...lows);
  const scaleY = (price: number) => ((max - price) / (max - min)) * height;

  return (
    <svg width={width} height={height}>
      {data.map((d, i) => {
        const [time, open, high, low, close] = d;
        const x = i * candleWidth + candleWidth / 2;
        const color = close >= open ? '#16a34a' : '#dc2626';
        const yHigh = scaleY(high);
        const yLow = scaleY(low);
        const yOpen = scaleY(open);
        const yClose = scaleY(close);
        const rectY = Math.min(yOpen, yClose);
        const rectHeight = Math.max(1, Math.abs(yClose - yOpen));

        return (
          <g key={time}>
            <line x1={x} x2={x} y1={yHigh} y2={yLow} stroke={color} strokeWidth={1} />
            <rect
              x={x - candleWidth / 2 + 1}
              y={rectY}
              width={candleWidth - 2}
              height={rectHeight}
              fill={color}
            />
          </g>
        );
      })}
    </svg>
  );
}

