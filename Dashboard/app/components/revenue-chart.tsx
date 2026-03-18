import { area, curveMonotoneX, line, max, scaleLinear } from "d3";

const chartData = [
  { month: "Jan", revenue: 18, benchmark: 14 },
  { month: "Feb", revenue: 24, benchmark: 16 },
  { month: "Mar", revenue: 21, benchmark: 18 },
  { month: "Apr", revenue: 30, benchmark: 20 },
  { month: "May", revenue: 36, benchmark: 25 },
  { month: "Jun", revenue: 34, benchmark: 27 },
  { month: "Jul", revenue: 44, benchmark: 31 },
];

export function RevenueChart() {
  const width = 760;
  const height = 300;
  const paddingX = 18;
  const paddingTop = 18;
  const paddingBottom = 46;
  const chartHeight = height - paddingTop - paddingBottom;
  const maxValue = max(chartData, (item) => Math.max(item.revenue, item.benchmark)) ?? 0;

  const x = scaleLinear()
    .domain([0, chartData.length - 1])
    .range([paddingX, width - paddingX]);

  const y = scaleLinear()
    .domain([0, maxValue + 6])
    .range([height - paddingBottom, paddingTop]);

  const revenueLine = line<(typeof chartData)[number]>()
    .x((_, index) => x(index))
    .y((item) => y(item.revenue))
    .curve(curveMonotoneX)(chartData);

  const benchmarkLine = line<(typeof chartData)[number]>()
    .x((_, index) => x(index))
    .y((item) => y(item.benchmark))
    .curve(curveMonotoneX)(chartData);

  const revenueArea = area<(typeof chartData)[number]>()
    .x((_, index) => x(index))
    .y0(height - paddingBottom)
    .y1((item) => y(item.revenue))
    .curve(curveMonotoneX)(chartData);

  return (
    <div className="overflow-hidden rounded-[30px] bg-[#f7f8f5] px-4 py-5 sm:px-5">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-5 text-sm text-[#68726b]">
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#184c3a]" />
            Revenue
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#b8c3bb]" />
            Benchmark
          </span>
        </div>
        <p className="text-sm text-[#6d756e]">Net growth +22.6% this quarter</p>
      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-[300px] w-full"
        role="img"
        aria-label="Revenue analytics chart"
      >
        {[0, 1, 2, 3].map((row) => {
          const gridY = paddingTop + (chartHeight / 3) * row;
          return (
            <line
              key={row}
              x1={paddingX}
              x2={width - paddingX}
              y1={gridY}
              y2={gridY}
              stroke="#dbe1db"
              strokeDasharray="4 8"
            />
          );
        })}

        {revenueArea ? <path d={revenueArea} fill="#184c3a" fillOpacity="0.08" /> : null}
        {benchmarkLine ? (
          <path
            d={benchmarkLine}
            fill="none"
            stroke="#b8c3bb"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : null}
        {revenueLine ? (
          <path
            d={revenueLine}
            fill="none"
            stroke="#184c3a"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : null}

        {chartData.map((item, index) => (
          <g key={item.month}>
            <circle
              cx={x(index)}
              cy={y(item.revenue)}
              r="5.5"
              fill="#ffffff"
              stroke="#184c3a"
              strokeWidth="3"
            />
            <text
              x={x(index)}
              y={height - 14}
              textAnchor="middle"
              fill="#7a837b"
              fontSize="14"
              fontWeight="500"
            >
              {item.month}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
