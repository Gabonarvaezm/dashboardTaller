"use client";

import { max, scaleBand, scaleLinear } from "d3";

const chartData = [
  { month: "JAN", value: 42 },
  { month: "FEB", value: 58 },
  { month: "MAR", value: 48 },
  { month: "APR", value: 86, highlight: true },
  { month: "MAY", value: 54 },
  { month: "JUN", value: 66 },
];

export function EngagementChartCard() {
  const width = 520;
  const height = 290;
  const chartTop = 20;
  const chartBottom = 40;
  const chartLeft = 12;
  const chartRight = 12;
  const innerHeight = height - chartTop - chartBottom;
  const maxValue = max(chartData, (item) => item.value) ?? 0;

  const x = scaleBand()
    .domain(chartData.map((item) => item.month))
    .range([chartLeft, width - chartRight])
    .paddingInner(0.38)
    .paddingOuter(0.1);

  const y = scaleLinear()
    .domain([0, maxValue + 10])
    .range([height - chartBottom, chartTop]);

  return (
    <article className="min-h-[404px] h-full rounded-[32px] bg-white p-6 shadow-[0_18px_42px_rgba(16,23,20,0.045)] xl:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f7f4] text-[#6d756f]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <rect x="2.5" y="3.5" width="13" height="9.5" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2.5 7H15.5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="6" cy="10.25" r="0.9" fill="currentColor" />
            </svg>
          </div>
          <p className="text-[23px] font-semibold tracking-[-0.04em] text-[#101714]">
            Engagement Rate
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex rounded-full bg-[#f4f7f3] p-1 text-sm">
            <button className="rounded-full px-4 py-2 font-medium text-[#7b847d]">
              Monthly
            </button>
            <button className="rounded-full bg-[#1a8f61] px-4 py-2 font-medium text-white shadow-[0_10px_20px_rgba(26,143,97,0.22)]">
              Annually
            </button>
          </div>
          <button
            aria-label="Open details"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f7f4] text-[#69736b]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4.2 11.8L11.8 4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M6 4H12V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-6 rounded-[28px] bg-[#fbfcfa] px-4 py-4">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-[290px] w-full"
          role="img"
          aria-label="Engagement rate by month"
        >
          <defs>
            <pattern
              id="softBarPattern"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(24)"
            >
              <rect width="8" height="8" fill="#dfe9e0" />
              <rect width="2" height="8" fill="#e8efe8" />
            </pattern>
          </defs>

          {[0, 1, 2, 3].map((row) => {
            const yPos = chartTop + (innerHeight / 3) * row;
            return (
              <g key={row}>
                <line
                  x1={chartLeft + 22}
                  x2={width - chartRight}
                  y1={yPos}
                  y2={yPos}
                  stroke="#e6ebe6"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />
                {row < 3 ? (
                  <text
                    x="0"
                    y={yPos + 4}
                    fill="#96a099"
                    fontSize="11"
                    fontWeight="500"
                  >
                    {`${5 - row}k`}
                  </text>
                ) : (
                  <text
                    x="6"
                    y={yPos + 4}
                    fill="#96a099"
                    fontSize="11"
                    fontWeight="500"
                  >
                    0
                  </text>
                )}
              </g>
            );
          })}

          {chartData.map((item) => {
            const barWidth = x.bandwidth();
            const barX = x(item.month) ?? 0;
            const barY = y(item.value);
            const barHeight = height - chartBottom - barY;
            const badgeX = barX + barWidth / 2;

            return (
              <g key={item.month}>
                {item.highlight ? (
                  <>
                    <g transform={`translate(${badgeX - 30}, ${barY - 36})`}>
                      <rect width="60" height="26" rx="13" fill="#1a5a43" />
                      <text
                        x="30"
                        y="17"
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="11"
                        fontWeight="600"
                      >
                        +17.8%
                      </text>
                    </g>
                    <path
                      d={`M ${badgeX - 6} ${barY - 8} L ${badgeX} ${barY - 1} L ${badgeX + 6} ${barY - 8}`}
                      fill="#1a5a43"
                    />
                  </>
                ) : null}

                <rect
                  x={barX}
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  rx={barWidth / 2}
                  fill={item.highlight ? "#1a5a43" : "url(#softBarPattern)"}
                />
                {item.highlight ? (
                  <circle
                    cx={barX + barWidth / 2}
                    cy={barY}
                    r="6"
                    fill="#ffffff"
                    stroke="#1a5a43"
                    strokeWidth="3"
                  />
                ) : null}

                <text
                  x={barX + barWidth / 2}
                  y={height - 14}
                  textAnchor="middle"
                  fill={item.highlight ? "#1a5a43" : "#7f8781"}
                  fontSize="13"
                  fontWeight={item.highlight ? "700" : "500"}
                >
                  {item.month}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </article>
  );
}
