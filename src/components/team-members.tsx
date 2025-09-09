import { motion } from "framer-motion";
// import Image from "next/image"; // Removed. Use <img> tag instead.

const team = [
  {
    name: "Dr. Evelyn Carter",
    role: "Founder & CEO",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "A visionary with 20 years in the energy sector. 'I started NexShop to prove that sustainable energy can be both powerful and profitable.'",
    twitter: "https://twitter.com/evelyn",
    linkedin: "https://linkedin.com/in/evelyn",
  },
  {
    name: "Dr. Marcus Lee",
    role: "Lead Engineer",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    bio: "PhD in Electrical Engineering. Background in grid-scale battery technology.",
    twitter: "https://twitter.com/marcus",
    linkedin: "https://linkedin.com/in/marcus",
  },
  {
    name: "Priya Nair",
    role: "Head of Sustainability",
    avatar: "https://randomuser.me/api/portraits/women/72.jpg",
    bio: "Focused on the environmental impact and lifecycle of all products.",
    twitter: "https://twitter.com/priya",
    linkedin: "https://linkedin.com/in/priya",
  },
  {
    name: "Carlos Mendes",
    role: "Project Implementation Manager",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    bio: "Ensures projects are delivered on time and to spec.",
    twitter: "https://twitter.com/carlos",
    linkedin: "https://linkedin.com/in/carlos",
  },
  {
    name: "Sophia Zhang",
    role: "Chief Technology Officer",
    avatar: "https://randomuser.me/api/portraits/women/66.jpg",
    bio: "Expert in IoT and smart grid integration.",
    twitter: "https://twitter.com/sophia",
    linkedin: "https://linkedin.com/in/sophia",
  },
];

export default function TeamMembers() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-black/80 to-neutral-900/80 border border-cyan-800/40 rounded-2xl p-6 shadow-xl flex flex-col items-center"
          >
              <img
              src={member.avatar}
              alt={member.name}
              width={80}
              height={80}
              className="w-20 h-20 rounded-full border-4 border-cyan-500 shadow-lg mb-3 object-cover"
            />
            <div className="text-cyan-300 font-bold text-lg mb-1">{member.name}</div>
            <div className="text-cyan-200 text-sm mb-2">{member.role}</div>
            <p className="text-neutral-300 text-center text-sm mb-3">{member.bio}</p>
            <div className="flex gap-3">
              <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-200 transition">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-200 transition">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/></svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
