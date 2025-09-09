import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>(['Hello! How can I help you today?']);
  const [input, setInput] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, input.trim()]);
      setInput('');
    }
  }

  return (
    <>
      <button
        className="fixed bottom-6 left-6 z-50 bg-cyan-400 rounded-full p-3 shadow-lg hover:bg-magenta transition-colors"
        onClick={() => setOpen(true)}
        aria-label="Open Chatbot"
      >
        <MessageCircle size={32} color="#fff" />
      </button>
      {open && (
        <div
          ref={modalRef}
          className="fixed bottom-20 left-6 z-50 bg-glass rounded-glass p-6 shadow-glass w-80 animate-fade-in flex flex-col"
        >
          <h4 className="text-lg font-bold text-cyan-400 mb-2">Voltora AI Assistant</h4>
          <div className="flex-1 overflow-y-auto mb-2 max-h-48">
            {messages.map((msg, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-2 mb-2 text-white">
                {msg}
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-cyan-400 focus:outline-none"
              placeholder="Type your question..."
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 rounded bg-cyan-400 text-gray-900 font-bold hover:bg-magenta transition-all"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
