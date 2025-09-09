"use client";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import type { UserState } from "../store/userSlice";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const spendingData = [
  { month: "Jan", amount: 120 },
  { month: "Feb", amount: 200 },
  { month: "Mar", amount: 150 },
  { month: "Apr", amount: 300 },
  { month: "May", amount: 250 },
  { month: "Jun", amount: 400 },
];

export default function DashboardBuyer() {
  const user = useSelector((state: RootState) => state.user.user) as UserState['user'] || { name: "Buyer" };
  // Placeholder data for orders, packages, wishlist
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-cyan-400">Welcome, {user.name || "Buyer"}!</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl bg-neutral-900 p-6 border border-cyan-800 shadow-lg">
          <h3 className="font-semibold text-cyan-300 mb-2">Order History</h3>
          <ul className="text-neutral-200 text-sm space-y-1">
            <li>Order #12345 - Delivered</li>
            <li>Order #12346 - In Transit</li>
            <li>Order #12347 - Processing</li>
          </ul>
        </div>
        <div className="rounded-xl bg-neutral-900 p-6 border border-cyan-800 shadow-lg">
          <h3 className="font-semibold text-cyan-300 mb-2">Tracked Packages</h3>
          <ul className="text-neutral-200 text-sm space-y-1">
            <li>Order #12346 - ETA: 2 days</li>
            <li>Order #12348 - ETA: 5 days</li>
          </ul>
        </div>
        <div className="rounded-xl bg-neutral-900 p-6 border border-cyan-800 shadow-lg">
          <h3 className="font-semibold text-cyan-300 mb-2">Wishlist</h3>
          <ul className="text-neutral-200 text-sm space-y-1">
            <li>Futuristic Smartwatch</li>
            <li>Wireless AR Glasses</li>
          </ul>
        </div>
      </div>
      <div className="bg-neutral-900 border border-cyan-800 rounded-xl p-6 shadow-lg">
        <h3 className="font-semibold text-cyan-300 mb-4">Spending Over Time</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={spendingData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="month" stroke="#67e8f9" />
            <YAxis stroke="#67e8f9" />
            <Tooltip contentStyle={{ background: '#0f172a', borderColor: '#67e8f9', color: '#fff' }} />
            <Line type="monotone" dataKey="amount" stroke="#67e8f9" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
