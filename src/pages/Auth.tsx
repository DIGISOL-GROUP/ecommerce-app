import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Auth: React.FC = () => {
  const [role, setRole] = useState<'buyer' | 'supplier' | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-3xl font-semibold mb-6">Authentication Page</h2>
      <div className="flex gap-8 mb-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={`px-6 py-3 rounded-glass font-bold shadow-glass transition-all duration-300 ${role === 'buyer' ? 'bg-cyan-400 text-gray-900' : 'bg-gray-800 text-cyan-400'}`}
          onClick={() => setRole('buyer')}
        >
          Login as Buyer
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={`px-6 py-3 rounded-glass font-bold shadow-glass transition-all duration-300 ${role === 'supplier' ? 'bg-magenta text-gray-900' : 'bg-gray-800 text-magenta'}`}
          onClick={() => setRole('supplier')}
        >
          Login as Supplier
        </motion.button>
      </div>
      {role && !isAuthenticated && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
          <form className="flex flex-col gap-4 items-center">
            <input type="email" placeholder="Email" className="px-4 py-2 rounded bg-gray-900 text-white border border-cyan-400 focus:outline-none" />
            <input type="password" placeholder="Password" className="px-4 py-2 rounded bg-gray-900 text-white border border-magenta focus:outline-none" />
            <motion.button whileHover={{ scale: 1.05 }} className="px-6 py-2 rounded bg-cyan-400 text-gray-900 font-bold hover:bg-magenta transition-all" onClick={() => setIsAuthenticated(true)}>
              Login
            </motion.button>
          </form>
        </motion.div>
      )}
      {isAuthenticated && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4">
          <p className="text-cyan-400">Logged in as <span className="font-bold">{role}</span>. Protected routes enabled.</p>
        </motion.div>
      )}
    </div>
  );
};

export default Auth;
