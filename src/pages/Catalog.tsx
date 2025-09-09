import React, { useState } from 'react';
import Wishlist from '../components/Wishlist';
import { FocusCards } from '../components/ui/focus-cards';

const productCards = [
  {
  title: "Voltora Power Station 5000",
  src: "/images/powerstation5000.png",
  description: "High-capacity portable power station for home and industrial use.",
  price: "$1999",
  category: "Power Stations",
  },
  {
  title: "Voltora Solar Panel X",
  src: "/images/solarpanelx.png",
  description: "Ultra-efficient solar panel with quantum cell technology.",
  price: "$899",
  category: "Solar Panels",
  },
  {
  title: "Voltora Portable Station",
  src: "/images/portablestation.png",
  description: "Compact power station for travel and outdoor adventures.",
  price: "$499",
  category: "Power Stations",
  },
  {
  title: "Voltora Smart Accessory",
  src: "/images/accessory.png",
  description: "Smart IoT accessory for energy monitoring and automation.",
  price: "$129",
  category: "Accessories",
  },
  {
  title: "Voltora Ultra Battery",
  src: "/images/battery.png",
  description: "Long-life battery for grid and off-grid storage.",
  price: "$699",
  category: "Batteries",
  },
  {
  title: "Voltora Grid Manager",
  src: "/images/gridmanager.png",
  description: "AI-powered grid management system for smart cities.",
  price: "$2999",
  category: "Grid Management",
  },
  {
  title: "Voltora QuantumWall Battery",
  src: "/images/quantumwall.png",
  description: "Wall-mounted battery with quantum energy cells.",
  price: "$2499",
  category: "Batteries",
  },
  {
  title: "Voltora Fusion Inverter",
  src: "/images/fusioninverter.png",
  description: "Hybrid inverter for solar and wind integration.",
  price: "$1199",
  category: "Inverters",
  },
  {
  title: "Voltora Smart Home Hub",
  src: "/images/smarthomehub.png",
  description: "Central hub for smart home energy control.",
  price: "$399",
  category: "Smart Home",
  },
  {
  title: "Voltora Nano Panel",
  src: "/images/nanopanel.png",
  description: "Nano-scale solar panel for wearables and micro devices.",
  price: "$99",
  category: "Solar Panels",
  },
  {
  title: "Voltora EV Supercharger",
  src: "/images/evsupercharger.png",
  description: "Fast-charging station for electric vehicles.",
  price: "$3499",
  category: "EV Charging",
  },
  {
  title: "Voltora HydroCell Generator",
  src: "/images/hydrocell.png",
  description: "Portable hydrogen fuel cell generator.",
  price: "$1599",
  category: "Generators",
  },
];

const categories = [
  "All Categories",
  "Solar Panels",
  "Power Stations",
  "Accessories",
  "Batteries",
  "Grid Management",
  "Inverters",
  "Smart Home",
  "EV Charging",
  "Generators",
];

const Catalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredCards =
    selectedCategory === "All Categories"
      ? productCards
      : productCards.filter((card) => card.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-3xl font-semibold mb-6">Product Catalog</h2>
      <div className="flex gap-4 mb-8">
        <input type="text" placeholder="Search products..." className="px-4 py-2 rounded bg-gray-900 text-white border border-cyan-400 focus:outline-none" />
        <select
          className="px-4 py-2 rounded bg-gray-900 text-white border border-magenta focus:outline-none"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <select className="px-4 py-2 rounded bg-gray-900 text-white border border-cyan-400 focus:outline-none">
          <option>All Efficiencies</option>
          <option>95%+</option>
          <option>98%+</option>
        </select>
      </div>
      <FocusCards cards={filteredCards} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Wishlist />
      </div>
    </div>
  );
};

export default Catalog;
