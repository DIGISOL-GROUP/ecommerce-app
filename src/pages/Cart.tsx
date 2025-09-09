import React from 'react';

const Cart: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
  <h2 className="text-3xl font-semibold mb-6 text-cyan-400">Shopping Cart</h2>
    <div className="bg-glass rounded-glass p-6 shadow-glass mb-8">
  <p className="text-cyan-300">Your cart is empty.</p>
  <button className="mt-4 px-4 py-2 rounded bg-cyan-400 text-white font-bold hover:bg-cyan-300 transition-all">Proceed to Checkout</button>
    </div>
    <div className="bg-glass rounded-glass p-6 shadow-glass">
  <h3 className="text-xl font-bold text-cyan-400 mb-4">Checkout</h3>
      <form className="flex flex-col gap-4">
  <input type="text" placeholder="Name" className="px-4 py-2 rounded bg-gray-900 text-cyan-300 border border-cyan-400 focus:outline-none" />
  <input type="email" placeholder="Email" className="px-4 py-2 rounded bg-gray-900 text-cyan-300 border border-cyan-400 focus:outline-none" />
  <input type="text" placeholder="Address" className="px-4 py-2 rounded bg-gray-900 text-cyan-300 border border-cyan-400 focus:outline-none" />
  <button className="px-6 py-2 rounded bg-cyan-400 text-white font-bold hover:bg-cyan-300 transition-all">Place Order</button>
      </form>
    </div>
  </div>
);

export default Cart;
