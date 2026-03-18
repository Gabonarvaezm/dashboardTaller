import { DashboardGrid } from "./dashboard-grid";
import { Header } from "./header";
import { Hero } from "./hero";
import { Sidebar } from "./sidebar";

export function DashboardShell() {
  return (
    <main className="min-h-screen bg-[#f3f5f2] px-4 py-6 text-[#101714] sm:px-6 xl:px-8 xl:py-8">
      <div className="mx-auto flex w-full max-w-[1660px] items-start gap-5 xl:gap-7">
        <Sidebar />

        <div className="min-w-0 flex-1">
          <div className="space-y-5 xl:space-y-6">
            <Header />
            <Hero />
            <DashboardGrid />
          </div>
        </div>
      </div>
    </main>
  );
}
