import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
// import { cn } from "../../lib/utils"; // Removed: module not found
// import Image from "next/image"; // Removed. Use <img> tag instead.

const testimonials = [
  {
    name: "Dr. Amara Singh",
    role: "Director, Solar Village Initiative (Kenya)",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "NexShop’s microgrid deployment transformed our community. Reliable power means our clinics and schools can operate without interruption. Their team’s expertise and compassion set a new standard for partnership.",
  },
  {
    name: "Lucas Meyer",
    role: "CTO, Voltaic Systems Inc.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Integrating NexShop’s battery systems with our energy management software was seamless. Their hardware is robust, and their support is world-class. We’re achieving new levels of grid stability and efficiency together.",
  },
  {
    name: "Sofia Martinez",
    role: "Homeowner, São Paulo",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "After installing NexShop’s solar panels and QuantumWall battery, my home is energy independent—even during outages. The mobile app makes monitoring effortless, and the installation was quick and professional.",
  },
  {
    name: "Michael Chen",
    role: "Sustainability Lead, TerraForm Engineering",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    quote:
      "NexShop’s industrial solutions helped us deliver a 50 MW project ahead of schedule. Their predictive diagnostics and remote support minimized downtime and maximized ROI. Truly a game-changer in renewable deployment.",
  },
];

export default function TestimonialsAnimated() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-black/80 to-neutral-900/80 border-cyan-800/40 shadow-xl hover:scale-[1.03] transition-transform duration-300">
            <CardContent className="flex flex-col items-center gap-4 p-8">
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full border-4 border-cyan-500 shadow-lg mb-2 object-cover"
                />
              <blockquote className="text-lg text-neutral-200 italic text-center">“{t.quote}”</blockquote>
              <div className="mt-4 text-cyan-400 font-bold">{t.name}</div>
              <div className="text-cyan-200 text-sm">{t.role}</div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
