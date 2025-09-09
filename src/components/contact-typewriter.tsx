import { useEffect, useState } from "react";

const phrases = [
  "Get in Touch...",
  "Let's Build a Sustainable Future Together.",
];

export default function ContactTypewriter() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (displayed.length < phrases[index].length) {
      timeout = setTimeout(() => {
        setDisplayed(phrases[index].slice(0, displayed.length + 1));
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setDisplayed("");
        setIndex((i) => (i + 1) % phrases.length);
      }, 1200);
    }
    return () => clearTimeout(timeout);
  }, [displayed, index]);

  return (
    <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 text-center mb-8 min-h-[2.5em]">
      {displayed}
      <span className="animate-pulse">|</span>
    </h2>
  );
}
