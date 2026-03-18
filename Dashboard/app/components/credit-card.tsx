const avatarItems = [
  "bg-[radial-gradient(circle_at_50%_28%,#f5d0a8_0%,#d9a26a_34%,#8a5b36_62%,#f0c63b_63%,#f0c63b_100%)]",
  "bg-[radial-gradient(circle_at_50%_28%,#e8c39b_0%,#c48a56_34%,#774828_62%,#ffffff_63%,#ffffff_100%)]",
  "bg-[radial-gradient(circle_at_50%_28%,#f0c5a0_0%,#c07e4e_34%,#7b4b30_62%,#f0c63b_63%,#f0c63b_100%)]",
  "bg-[radial-gradient(circle_at_50%_28%,#dcb089_0%,#98623d_34%,#5b3928_62%,#2d7fd1_63%,#2d7fd1_100%)]",
];

export function CreditCard() {
  return (
    <article className="h-full rounded-[32px] bg-white p-6 shadow-[0_18px_42px_rgba(16,23,20,0.045)] xl:p-7">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f7f4] text-[#6d756f]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <rect x="2.4" y="3.2" width="13.2" height="9.6" rx="2.6" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2.6 7H15.4" stroke="currentColor" strokeWidth="1.5" />
            <path d="M5.2 10.2H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <p className="text-[23px] font-semibold tracking-[-0.04em] text-[#101714]">
            Amount of credit
          </p>
          <p className="mt-1 text-sm text-[#89918b]">
            Total refund amount with fee
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-start justify-between gap-4">
        <p className="text-[40px] font-semibold tracking-[-0.05em] text-[#101714]">
          $8,945.89
        </p>
        <span className="inline-flex rounded-full bg-[#e4efe8] px-3 py-1 text-sm font-medium text-[#1a5a43]">
          +12.8%
        </span>
      </div>

      <div className="mt-9 rounded-[26px] border border-[#edf1ed] bg-[#fbfcfa] px-5 py-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[19px] font-semibold tracking-[-0.03em] text-[#101714]">
              Mandatory Payments
            </p>
            <p className="mt-1 text-sm text-[#878f88]">Recent payments</p>
          </div>
          <button aria-label="Open payments" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#6d756f] ring-1 ring-[#edf1ed]">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4.2 11.8L11.8 4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M6 4H12V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-6 flex items-center pt-1">
          {avatarItems.map((avatar, index) => (
            <div
              key={index}
              className={`relative h-11 w-11 rounded-full border-2 border-[#fbfcfa] shadow-[0_6px_12px_rgba(16,23,20,0.08)] ${avatar} ${
                index === 0 ? "" : "-ml-3"
              }`}
            />
          ))}

          <div className="relative -ml-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#fbfcfa] bg-[#1a5a43] text-xs font-semibold text-white">
            +2
          </div>
        </div>
      </div>
    </article>
  );
}
