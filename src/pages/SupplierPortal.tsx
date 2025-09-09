import React from 'react';

const SupplierPortal: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
  <h2 className="text-3xl font-semibold mb-6 text-cyan-400">Supplier Portal</h2>
    <div className="bg-glass rounded-glass p-6 shadow-glass mb-8">
  <h3 className="text-xl font-bold text-cyan-400 mb-2">Inventory Management</h3>
      <div className="flex flex-col gap-4">
  <div className="bg-gray-800 rounded p-4 text-cyan-300">Product: Voltora Power Station 5000</div>
  <div className="bg-gray-800 rounded p-4 text-cyan-300">Stock: 20 units</div>
  <button className="px-4 py-2 rounded bg-cyan-400 text-white font-bold hover:bg-cyan-300 transition-all">Add New Product</button>
      </div>
    </div>
  </div>
);

export default SupplierPortal;
