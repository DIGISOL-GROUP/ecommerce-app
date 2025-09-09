import React from 'react';
import EnergyCalculator from '../components/EnergyCalculator';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Dashboard: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
  <h2 className="text-3xl font-semibold mb-6 text-cyan-400">User Dashboard</h2>
    <div className="bg-glass rounded-glass p-6 shadow-glass">
  <h3 className="text-xl font-bold text-cyan-400 mb-4">Order History</h3>
  <div className="bg-glass rounded p-4 mb-4 text-cyan-300">No orders yet.</div>
  <h3 className="text-xl font-bold text-cyan-400 mb-4">Energy Analytics</h3>
      <div className="bg-glass rounded p-4 mb-4">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={[{month:'Jan',energy:120},{month:'Feb',energy:140},{month:'Mar',energy:180}]}> 
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="energy" stroke="#00FFFF" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
  <h3 className="text-xl font-bold text-cyan-400 mb-4">Account Management</h3>
  <div className="bg-glass rounded p-4 mb-4 text-cyan-300">Manage your account details here.</div>
      <EnergyCalculator />
    </div>
  </div>
);

export default Dashboard;
