
import { motion } from "framer-motion";
// import Image from "next/image"; // Removed. Use <img> tag instead.

export default function AboutWorldMap() {
    const worldMapContent = {
      headline: "Global Footprint, Local Brilliance",
      description:
        "NexShop’s energy solutions empower communities from the skyscrapers of New York to the solar villages of Kenya. Our installations are engineered for local climates, regulations, and energy demands—delivering maximum impact everywhere we operate.",
      locations: [
        { city: "New York", country: "USA", capacity: "120 MW" },
        { city: "Berlin", country: "Germany", capacity: "85 MW" },
        { city: "Dubai", country: "UAE", capacity: "110 MW" },
        { city: "Singapore", country: "Singapore", capacity: "60 MW" },
        { city: "Cape Town", country: "South Africa", capacity: "45 MW" },
        { city: "Nairobi", country: "Kenya", capacity: "35 MW" },
        { city: "Sydney", country: "Australia", capacity: "70 MW" },
        { city: "São Paulo", country: "Brazil", capacity: "55 MW" },
      ],
    };

    return (
        <section className="py-12">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">{worldMapContent.headline}</h2>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    viewport={{ once: true }}
                    className="w-full flex justify-center"
                >
          <img
            src="https://raw.githubusercontent.com/aceternity/aceternity-ui/main/apps/www/public/images/world-map.svg"
            alt="World Map"
            width={600}
            height={300}
            className="w-full max-w-2xl h-auto opacity-80"
          />
                </motion.div>
                <p className="mt-6 text-neutral-300 text-center max-w-xl">
                    {worldMapContent.description}
                </p>
                <div className="mt-8 w-full max-w-2xl">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2 text-center">Flagship Installations</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {worldMapContent.locations.map((loc, idx) => (
                      <li key={idx} className="bg-neutral-900 rounded-lg p-4 shadow">
                        <span className="font-bold text-cyan-200">{loc.city}, {loc.country}</span>
                        <br />
                        <span className="text-neutral-400">Capacity: {loc.capacity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
        </section>
    );
}
