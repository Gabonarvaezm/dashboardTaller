import { BalanceCard } from "./balance-card";
import { CreditCard } from "./credit-card";
import { EngagementChartCard } from "./engagement-chart-card";
import { PaymentHistoryCard } from "./payment-history-card";
import { WalletCard } from "./wallet-card";
import { WeeklyRevenueCard } from "./weekly-revenue-card";

export function DashboardGrid() {
  return (
    <section className="grid items-start gap-6 xl:grid-cols-[0.94fr_1.58fr_1fr] xl:grid-rows-[auto_auto]">
      <div className="flex h-full flex-col gap-4">
        <WalletCard />
        <WeeklyRevenueCard />
      </div>

      <EngagementChartCard />

      <BalanceCard />

      <div className="xl:col-span-2">
        <PaymentHistoryCard />
      </div>

      <CreditCard />
    </section>
  );
}
