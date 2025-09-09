'use client';

interface SparklineChartProps {
  data: number[];
}

export default function SparklineChart({ data }: SparklineChartProps) {
  if (!data || data.length === 0) {
    return null;
  }

  const width = 100;
  const height = 40;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data
    .map((p, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((p - min) / (max - min)) * height;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg width={width} height={height}>
      <polyline
        fill="none"
        stroke="#3b82f6"
        strokeWidth="1"
        points={points}
      />
    </svg>
  );
}

