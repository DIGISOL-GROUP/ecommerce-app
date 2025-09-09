// Footer Component
import { Link } from "react-router-dom";

import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
      viewport={{ once: true }}
      className="w-full bg-neutral-950 text-neutral-300 border-t border-neutral-800 py-10 px-4 mt-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-2 text-cyan-400">NexShop</h2>
          <p className="text-sm mb-4">The Future of Shopping is Here.</p>
          <p className="text-xs">&copy; {new Date().getFullYear()} NexShop. All rights reserved.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-cyan-300">Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/home" className="hover:text-cyan-400 transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-cyan-400 transition">Products</Link></li>
            <li><Link to="/dashboard" className="hover:text-cyan-400 transition">Dashboard</Link></li>
            <li><Link to="/about" className="hover:text-cyan-400 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-cyan-300">Follow Us</h3>
          <div className="flex space-x-3">
            <motion.a whileHover={{ scale: 1.2 }} href="#" aria-label="Twitter" className="hover:text-cyan-400 transition"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 2c-2.72 0-4.924 2.206-4.924 4.924 0 .386.044.762.127 1.124C7.728 7.89 4.1 6.13 1.671 3.149a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099A4.904 4.904 0 0 1 .964 8.1v.062c0 2.385 1.697 4.374 3.946 4.827a4.936 4.936 0 0 1-2.212.084c.623 1.943 2.432 3.355 4.576 3.395A9.868 9.868 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" aria-label="GitHub" className="hover:text-cyan-400 transition"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z"/></svg></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" aria-label="LinkedIn" className="hover:text-cyan-400 transition"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"/></svg></motion.a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-cyan-300">Newsletter</h3>
          <form className="flex flex-col space-y-2">
            <input type="email" placeholder="Your email" className="px-3 py-2 rounded bg-neutral-900 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm" />
            <HoverBorderGradient as={(props) => <button type="submit" {...props} />} className="w-full justify-center text-base font-semibold py-2 mt-1">Subscribe</HoverBorderGradient>
          </form>
        </div>
      </div>
    </motion.footer>
  );
}
