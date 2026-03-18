import type { ReactNode } from "react";

const navItems = ["Dashboard", "Reports", "Documents", "History", "Contacts"];

export function Header() {
  return (
    <header className="flex w-full items-center justify-between gap-4 rounded-full bg-white px-4 py-3.5 shadow-[0_14px_34px_rgba(16,23,20,0.04)] sm:px-6 lg:px-7">
      <div className="flex min-w-[208px] items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a8f61]/12 text-[#1a8f61]">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
            <path d="M13 4C8.03 4 4 8.03 4 13C4 17.97 8.03 22 13 22H14.6V14.8H20.8C21.58 13.74 22 12.44 22 11.04C22 7.15 18.85 4 14.96 4H13Z" fill="currentColor" />
            <path d="M14.9 11.2V22C19.27 21.13 22.56 17.26 22.56 12.64C22.56 12.14 22.52 11.66 22.44 11.2H14.9Z" fill="currentColor" opacity="0.28" />
            <path d="M13.18 10.58H18.6V15.1H13.18V20.5H8.64V15.1H3.24V10.58H8.64V5.16H13.18V10.58Z" fill="#ffffff" />
          </svg>
        </div>
        <span className="text-[17px] font-semibold tracking-[-0.04em] text-[#121814]">
          Quixotic
        </span>
      </div>

      <nav className="hidden min-w-0 flex-1 items-center justify-center md:flex">
        <ul className="flex w-full items-center justify-between gap-2 rounded-full bg-[#f5f7f4] p-1.5">
          {navItems.map((item) => {
            const isActive = item === "Dashboard";

            return (
              <li key={item}>
                <button
                  className={`min-w-[108px] rounded-full px-4 py-2 text-sm font-medium tracking-[-0.01em] ${
                    isActive
                      ? "bg-white text-[#121814] shadow-[0_8px_18px_rgba(16,23,20,0.06)]"
                      : "text-[#778078]"
                  }`}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex min-w-[186px] items-center justify-end gap-2">
        <IconButton label="Search">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle
              cx="9"
              cy="9"
              r="5.5"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M13.2 13.2L17 17"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </IconButton>

        <IconButton label="Notifications">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M10 3.5C7.9 3.5 6.2 5.2 6.2 7.3V8.4C6.2 9.3 5.9 10.2 5.3 10.9L4.6 11.8C4.1 12.5 4.6 13.5 5.5 13.5H14.5C15.4 13.5 15.9 12.5 15.4 11.8L14.7 10.9C14.1 10.2 13.8 9.3 13.8 8.4V7.3C13.8 5.2 12.1 3.5 10 3.5Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 15.2C8.4 16 9.1 16.5 10 16.5C10.9 16.5 11.6 16 12 15.2"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </IconButton>

        <div className="flex h-11 items-center gap-1 rounded-full bg-[#f8faf7] pr-1 shadow-[0_10px_22px_rgba(16,23,20,0.04)]">
          <div className="ml-1 h-9 w-9 rounded-full bg-[radial-gradient(circle_at_45%_30%,#8c6a54_0%,#5c4033_38%,#2f2a28_100%)]" />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mr-2 text-[#7d857e]">
            <path d="M3.5 5.5L7 9L10.5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </header>
  );
}

function IconButton({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <button
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f7f4] text-[#58635b] shadow-[0_10px_22px_rgba(16,23,20,0.04)]"
    >
      {children}
    </button>
  );
}
