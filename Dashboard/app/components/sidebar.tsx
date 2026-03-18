const topItems = [
  { label: "Dashboard", icon: "grid", active: true },
  { label: "Analytics", icon: "chart" },
  { label: "Wallet", icon: "wallet" },
  { label: "Documents", icon: "card" },
];

const middleItems = [
  { label: "Messages", icon: "inbox" },
  { label: "Calendar", icon: "calendar" },
  { label: "Close", icon: "close" },
];

const bottomItems = [
  { label: "Settings quick", icon: "settings" },
  { label: "Logout", icon: "logout" },
];

export function Sidebar() {
  return (
    <aside className="hidden w-[96px] shrink-0 pt-[222px] xl:block">
      <div className="sticky top-[222px] flex min-h-[650px] flex-col">
        <div className="space-y-6">
          <SidebarGroup items={topItems} />
          <SidebarGroup items={middleItems} />
        </div>

        <div className="mt-auto">
          <SidebarGroup items={bottomItems} />
        </div>
      </div>
    </aside>
  );
}

function SidebarGroup({
  items,
}: {
  items: Array<{ label: string; icon: string; active?: boolean }>;
}) {
  return (
    <div className="mx-auto w-fit rounded-[30px] bg-white/78 p-2.5 shadow-[0_18px_42px_rgba(16,23,20,0.05)] ring-1 ring-white/75 backdrop-blur-[8px]">
      <div className="flex flex-col items-center gap-2.5">
        {items.map((item) => (
          <button
            key={item.label}
            aria-label={item.label}
            className={`flex h-[50px] w-[50px] items-center justify-center rounded-full shadow-[0_8px_20px_rgba(16,23,20,0.06)] ${
              item.active
                ? "bg-[#1a5a43] text-white"
                : "bg-[#fbfcfa] text-[#69736b]"
            }`}
          >
            <SidebarIcon name={item.icon} />
          </button>
        ))}
      </div>
    </div>
  );
}

function SidebarIcon({ name }: { name: string }) {
  if (name === "grid") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="6" height="6" rx="2" fill="currentColor" />
        <rect x="12" y="2" width="6" height="6" rx="2" fill="currentColor" />
        <rect x="2" y="12" width="6" height="6" rx="2" fill="currentColor" />
        <rect x="12" y="12" width="6" height="6" rx="2" fill="currentColor" />
      </svg>
    );
  }

  if (name === "card") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 8.5H18" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 16.5H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M5.5 13.5L8.6 10.4L11.2 12.4L15 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "wallet") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 6.5C4 4.8 5.3 3.5 7 3.5H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="3" y="6" width="14" height="10" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="13.5" cy="11" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="4.5" width="14" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6.5 2.8V6.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M13.5 2.8V6.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M3 8H17" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (name === "settings") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M10 6.8A3.2 3.2 0 1 0 10 13.2A3.2 3.2 0 1 0 10 6.8Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M16 10C16 9.5 15.9 9.1 15.7 8.7L17 7.2L15.4 4.6L13.5 5.1C12.9 4.6 12.2 4.3 11.4 4.1L10.9 2H9.1L8.6 4.1C7.8 4.3 7.1 4.6 6.5 5.1L4.6 4.6L3 7.2L4.3 8.7C4.1 9.1 4 9.5 4 10C4 10.5 4.1 10.9 4.3 11.3L3 12.8L4.6 15.4L6.5 14.9C7.1 15.4 7.8 15.7 8.6 15.9L9.1 18H10.9L11.4 15.9C12.2 15.7 12.9 15.4 13.5 14.9L15.4 15.4L17 12.8L15.7 11.3C15.9 10.9 16 10.5 16 10Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "headset") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M4.5 10.2C4.5 7.1 7 4.5 10 4.5C13 4.5 15.5 7.1 15.5 10.2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect x="3.5" y="9.8" width="2.8" height="4.8" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13.7" y="9.8" width="2.8" height="4.8" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 15.3H12.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "user") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M4.8 15.6C5.7 13.5 7.6 12.3 10 12.3C12.4 12.3 14.3 13.5 15.2 15.6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "logout") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M8 5H6.5C5.4 5 4.5 5.9 4.5 7V13C4.5 14.1 5.4 15 6.5 15H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9.5 10H15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M13 7.5L15.5 10L13 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "close") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="6.4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7.6 7.6L12.4 12.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12.4 7.6L7.6 12.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="14" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6 8L10 11L14 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
