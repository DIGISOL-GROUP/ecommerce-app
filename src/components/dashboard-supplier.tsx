"use client";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function DashboardSupplier() {
  const user = useSelector((state: RootState) => state.user) as { name?: string };
  // Placeholder data for analytics, low-stock, notifications
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-fuchsia-400">Welcome, {user.name || "Supplier"}!</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl bg-neutral-900 p-6 border border-fuchsia-800 shadow-lg">
          <h3 className="font-semibold text-fuchsia-300 mb-2">Sales Analytics</h3>
          <ul className="text-neutral-200 text-sm space-y-1">
            <li>Today: $1,200</li>
            <li>This Week: $8,500</li>
            <li>This Month: $32,000</li>
          </ul>
        </div>
        <div className="rounded-xl bg-neutral-900 p-6 border border-fuchsia-800 shadow-lg">
          <h3 className="font-semibold text-fuchsia-300 mb-2">Low Stock Alerts</h3>
          <ul className="text-neutral-200 text-sm space-y-1">
            <li>Smartwatch Pro (3 left)</li>
            <li>AR Glasses (1 left)</li>
          </ul>
        </div>
        <div className="rounded-xl bg-neutral-900 p-6 border border-fuchsia-800 shadow-lg">
          <h3 className="font-semibold text-fuchsia-300 mb-2">New Orders</h3>
          <ul className="text-neutral-200 text-sm space-y-1">
            <li>Order #12349 - Pending</li>
            <li>Order #12350 - Pending</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
