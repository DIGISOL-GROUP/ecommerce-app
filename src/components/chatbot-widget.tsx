"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const mockReplies = [
  "Hi! How can I help you today?",
  "Our team will get back to you soon.",
  "You can find more info on the About page!",
  "Try searching for your favorite product.",
  "Thank you for reaching out!",
];

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! I'm NexBot. How can I assist you?" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { from: "user", text: input },
      { from: "bot", text: mockReplies[Math.floor(Math.random() * mockReplies.length)] },
    ]);
    setInput("");
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="w-80 bg-black/90 border border-cyan-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-cyan-700 text-white px-4 py-2 font-bold flex items-center justify-between">
              NexBot
              <button onClick={() => setOpen(false)} className="text-white hover:text-cyan-200 text-xl">×</button>
            </div>
            <div className="flex-1 p-4 space-y-2 overflow-y-auto max-h-72">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.from === "user"
                      ? "text-right"
                      : "text-left"
                  }
                >
                  <span
                    className={
                      m.from === "user"
                        ? "inline-block bg-cyan-600 text-white rounded-lg px-3 py-1 mb-1"
                        : "inline-block bg-neutral-800 text-cyan-200 rounded-lg px-3 py-1 mb-1"
                    }
                  >
                    {m.text}
                  </span>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={sendMessage} className="flex border-t border-cyan-700">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1 px-3 py-2 bg-black text-white outline-none"
                placeholder="Type your message..."
                autoFocus
              />
              <button type="submit" className="px-4 text-cyan-400 font-bold hover:text-cyan-200">Send</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen((v) => !v)}
        className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl border-4 border-cyan-300 animate-bounce"
        aria-label="Open chatbot"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.037 2 11c0 2.387 1.053 4.553 2.828 6.172C4.298 19.13 2.5 21.5 2.5 21.5s3.5-1.5 5.5-2c1.3.323 2.68.5 4 .5 5.523 0 10-4.037 10-9s-4.477-9-10-9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  );
}
