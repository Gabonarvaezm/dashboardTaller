const paymentRows = [
  {
    name: "Dribbble Design",
    date: "16 Jun 2025",
    time: "10:30 PM",
    amount: "89,345.23 USD",
    growth: "+18.67%",
  },
  {
    name: "Google Pay",
    date: "15 Jun 2025",
    time: "11:45 PM",
    amount: "12,345.89 USD",
    growth: "+9.34%",
  },
  {
    name: "Amazon Shopping",
    date: "14 Jun 2025",
    time: "10:15 PM",
    amount: "32,123.67 USD",
    growth: "+12.23%",
  },
];

export function PaymentHistoryCard() {
  return (
    <article className="h-full rounded-[32px] bg-white p-6 shadow-[0_18px_42px_rgba(16,23,20,0.045)] xl:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[23px] font-semibold tracking-[-0.04em] text-[#101714]">
            Payment History
          </p>
          <p className="mt-1 text-sm text-[#89918b]">Recent payments history</p>
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

      <div className="mt-7 overflow-hidden rounded-[26px] border border-[#edf1ed] bg-[#fbfcfa]">
        <div className="grid grid-cols-[2.25fr_1.15fr_1fr_1.1fr_0.9fr] gap-4 px-5 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[#9aa29b]">
          <div>Name</div>
          <div>Date</div>
          <div>Time</div>
          <div>Status</div>
          <div className="text-right">Amount</div>
        </div>

        <div className="px-5">
          {paymentRows.map((row, index) => (
            <div
              key={row.name}
              className={`grid grid-cols-[2.25fr_1.15fr_1fr_1.1fr_0.9fr] items-center gap-4 py-[18px] ${
                index !== paymentRows.length - 1 ? "border-t border-[#edf1ed]" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <CompanyLogo name={row.name} />
                <div>
                  <p className="text-sm font-medium text-[#101714]">{row.name}</p>
                  <p className="mt-0.5 text-xs font-medium text-[#69ad7f]">{row.growth}</p>
                </div>
              </div>

              <div className="text-sm text-[#707972]">{row.date}</div>
              <div className="text-sm text-[#707972]">{row.time}</div>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#f1f7f2] px-3 py-1 text-sm font-medium text-[#1a5a43]">
                  <span className="h-2 w-2 rounded-full bg-[#4cc96f]" />
                  Successful
                </span>
              </div>
              <div className="text-right text-sm font-semibold text-[#101714]">
                {row.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function CompanyLogo({ name }: { name: string }) {
  if (name === "Dribbble Design") {
    return (
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7d7e4]">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="text-[#de5b91]">
          <circle cx="10" cy="10" r="7.2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 7.2C8.4 7.2 12 8.5 15 10.4" stroke="currentColor" strokeWidth="1.3" />
          <path d="M7.4 4.8C9.3 7.2 10.8 10.1 12.1 15.3" stroke="currentColor" strokeWidth="1.3" />
          <path d="M4.6 11.4C8.2 10.2 11.8 10.1 15 11" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      </div>
    );
  }

  if (name === "Google Pay") {
    return (
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ffffff] ring-1 ring-[#edf1ed]">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M19.2 11.2C19.2 10.52 19.14 9.9 19.03 9.3H11V12.6H15.59C15.39 13.67 14.78 14.58 13.87 15.19V17.33H16.63C18.24 15.85 19.2 13.68 19.2 11.2Z" fill="#4285F4" />
          <path d="M11 19.53C13.3 19.53 15.23 18.77 16.63 17.33L13.87 15.19C13.11 15.7 12.13 16.01 11 16.01C8.78 16.01 6.9 14.51 6.23 12.49H3.37V14.7C4.76 17.46 7.61 19.53 11 19.53Z" fill="#34A853" />
          <path d="M6.23 12.49C6.06 11.98 5.96 11.44 5.96 10.88C5.96 10.32 6.06 9.78 6.23 9.27V7.06H3.37C2.79 8.21 2.46 9.51 2.46 10.88C2.46 12.25 2.79 13.55 3.37 14.7L6.23 12.49Z" fill="#FBBC05" />
          <path d="M11 5.75C12.23 5.75 13.34 6.17 14.22 7L16.69 4.53C15.23 3.16 13.3 2.22 11 2.22C7.61 2.22 4.76 4.29 3.37 7.06L6.23 9.27C6.9 7.25 8.78 5.75 11 5.75Z" fill="#EA4335" />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff5e2] ring-1 ring-[#f3ead7]">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M6 14.5C6 10.91 8.91 8 12.5 8H16" stroke="#2A2D34" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7.4 15.8H14.8" stroke="#F0A524" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10.8 6.2L14.1 15.8" stroke="#2A2D34" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </div>
  );
}
