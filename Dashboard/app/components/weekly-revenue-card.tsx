export function WeeklyRevenueCard() {
  return (
    <article className="rounded-[26px] bg-white px-5 py-4 shadow-[0_18px_42px_rgba(16,23,20,0.04)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-[#7c857e]">Weekly Revenue</p>
          <p className="mt-2 text-[23px] font-semibold tracking-[-0.04em] text-[#101714]">
            +3,945 USD
          </p>
        </div>

        <span className="inline-flex rounded-full bg-[#e4efe8] px-3.5 py-1.5 text-sm font-medium text-[#1a5a43]">
          +12.8%
        </span>
      </div>
    </article>
  );
}
