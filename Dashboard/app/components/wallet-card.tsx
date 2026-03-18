export function WalletCard() {
  return (
    <article className="flex min-h-[318px] h-full flex-col rounded-[32px] bg-white p-6 shadow-[0_18px_42px_rgba(16,23,20,0.045)] xl:p-7">
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

      <div className="mt-6 rounded-[28px] bg-[linear-gradient(180deg,#1d8d58_0%,#197549_100%)] px-5 py-5 text-white shadow-[0_16px_34px_rgba(26,90,67,0.16)]">
        <div className="flex items-start justify-between gap-3">
          <span className="text-sm font-semibold tracking-[0.18em] text-white/92">
            VISA
          </span>

          <div className="text-white/78">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M8.5 8.5C10.4 10.3 10.4 13.4 8.5 15.2"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M12 6C15.3 9 15.3 14.7 12 17.7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <p className="mt-3 text-sm text-white/68">Credit Card</p>

        <div className="mt-2">
          <p className="text-[33px] font-semibold tracking-[-0.05em] text-white">
            $ 78,989.09
          </p>
        </div>

        <div className="mt-9 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium tracking-[0.28em] text-white/92">**** 909090</p>
          </div>

          <div className="text-right">
            <p className="text-sm font-medium text-white/92">EXP 09/26</p>
          </div>
        </div>
      </div>
    </article>
  );
}
