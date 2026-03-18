export function Hero() {
  return (
    <section className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
      <div>
        <h1 className="text-[42px] font-semibold tracking-[-0.07em] text-[#101714] sm:text-[48px] xl:text-[56px]">
          <span className="font-semibold text-[#101714]">Welcome Back, </span>
          <span className="font-medium text-[#8c948e]">Sujon</span>
        </h1>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row xl:items-center">
        <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-[#646d66] shadow-[0_12px_28px_rgba(16,23,20,0.045)]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-[#697169]">
            <rect x="2" y="3" width="12" height="11" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M5 1.8V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M11 1.8V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M2 6H14" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          October 27 - November 03
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="text-[#7d857e]">
            <path d="M3.5 5.5L7 9L10.5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-[#101714] shadow-[0_12px_28px_rgba(16,23,20,0.05)]">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a5a43] text-white">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M6 2V10"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M2 6H10"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </span>
          Add New Wallet
        </button>
      </div>
    </section>
  );
}
