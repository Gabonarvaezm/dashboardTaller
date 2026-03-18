"use client";

import { curveMonotoneX, line, max, scaleLinear } from "d3";

const chartData = [18, 28, 24, 42, 38, 54, 48, 62];

export function BalanceCard() {
  const width = 320;
  const height = 176;
  const paddingX = 10;
  const paddingTop = 14;
  const paddingBottom = 18;
  const chartHeight = height - paddingTop - paddingBottom;
  const maxValue = max(chartData) ?? 0;

  const x = scaleLinear()
    .domain([0, chartData.length - 1])
    .range([paddingX, width - paddingX]);

  const y = scaleLinear()
    .domain([0, maxValue + 8])
    .range([height - paddingBottom, paddingTop]);

  const chartLine = line<number>()
    .x((_, index) => x(index))
    .y((value) => y(value))
    .curve(curveMonotoneX)(chartData);

  return (
    <article className="min-h-[404px] h-full rounded-[32px] bg-white p-6 shadow-[0_18px_42px_rgba(16,23,20,0.045)] xl:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[21px] font-semibold tracking-[-0.04em] text-[#101714]">
            Payment Goal
          </p>
          <p className="mt-1 text-sm text-[#89918b]">Total amount goal</p>
        </div>

        <button
          aria-label="More options"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f7f4] text-[#69736b] shadow-[0_8px_20px_rgba(16,23,20,0.04)]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4.2 11.8L11.8 4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M6 4H12V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="mt-7 text-center">
        <p className="text-sm font-medium text-[#808983]">Total Balance</p>
        <p className="mt-3 text-[38px] font-semibold tracking-[-0.05em] text-[#101714]">
          $32,678.<span className="text-[#8c948e]">90</span>
        </p>
      </div>

      <div className="mt-5 rounded-[26px] bg-[#fbfcfa] px-4 py-4">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-[176px] w-full"
          role="img"
          aria-label="Balance trend"
        >
          {[0, 1, 2, 3].map((row) => {
            const yPos = paddingTop + (chartHeight / 3) * row;
            return (
              <line
                key={row}
                x1={paddingX}
                x2={width - paddingX}
                y1={yPos}
                y2={yPos}
                stroke="#e7ece7"
                strokeWidth="1"
                strokeDasharray="4 6"
              />
            );
          })}

          <path
            d={`M ${paddingX} ${height - paddingBottom} L ${paddingX} ${y(chartData[0]) + 18} L ${x(1)} ${y(chartData[1]) + 8} L ${x(2)} ${y(chartData[2]) + 14} L ${x(3)} ${y(chartData[3]) - 2} L ${x(4)} ${y(chartData[4]) + 2} L ${x(5)} ${y(chartData[5]) + 12} L ${x(6)} ${y(chartData[6]) + 20} L ${x(7)} ${y(chartData[7]) + 2} L ${x(7)} ${height - paddingBottom} Z`}
            fill="#78a690"
            fillOpacity="0.14"
          />

          {chartLine ? (
            <path
              d={chartLine}
              fill="none"
              stroke="#78a690"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : null}

          <circle
            cx={x(chartData.length - 1)}
            cy={y(chartData[chartData.length - 1])}
            r="6.5"
            fill="#ffffff"
            stroke="#1a5a43"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="mt-6 flex gap-3">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#1a8f61] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_26px_rgba(26,143,97,0.18)]">
          Send
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M6 10V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M3.5 4.5L6 2L8.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#f4f7f3] px-5 py-3 text-sm font-medium text-[#5d6760]">
          Receive
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M6 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M3.5 7.5L6 10L8.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </article>
  );
}
