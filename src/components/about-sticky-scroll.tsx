import { motion } from "framer-motion";


const features = [
  {
    title: "Our Vision: A World Unplugged",
    description:
      "We envision a planet seamlessly powered by intelligent, distributed energy networks. A future where every home, business, and community generates its own clean power, shares it efficiently, and remains resilient in the face of change. We are building towards a world no longer constrained by finite resources, but energized by infinite innovation.",
  },
  {
    title: "Our Mission: Accelerate Your Transition",
    description:
      "NexShop exists to dismantle the barriers to renewable adoption. We achieve this by curating only the most advanced and reliable products, pairing them with unparalleled expert guidance and seamless integration services. Our mission is to make sustainable energy not just an alternative, but the obvious, most powerful choice for all.",
  },
  {
    title: "Milestones of Impact",
    description:
      "4.2 GW Deployed: Our solutions now generate enough clean energy to power over 850,000 homes annually.\n98.7% Client Satisfaction: Our end-to-end project support earns near-perfect scores for reliability and service.\nGlobal Reach, Local Impact: Successfully completed projects in 18 countries across 6 continents.\nAward-Winning Innovation: Recipient of the 2024 Global Green Tech Award for 'System Integration Excellence.'",
  },
  {
    title: "Forged Through Strategic Alliance",
    description:
      "Voltaic Systems Inc.: World-leading battery chemistry and energy management software.\nHelios Spectrum: Pioneers in photovoltaic cell efficiency, pushing the boundaries of solar harvest.\nTerraForm Engineering: Masters of large-scale renewable project deployment and grid integration.\nThe Orion Network: Global non-profit partnership for bringing solar power to underserved communities.",
  },
];

export default function AboutStickyScroll() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10 text-center">
          Why NexShop?
        </h2>
        <div className="space-y-10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.7, type: "spring" }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-black/80 to-neutral-900/80 border border-cyan-800/40 rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">{f.title}</h3>
              <p className="text-neutral-200 text-lg">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
