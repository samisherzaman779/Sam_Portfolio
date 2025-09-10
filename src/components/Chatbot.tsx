"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, MessageCircle, X, Minus } from "lucide-react";

export default function Chatbot() {
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user" as const, text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { sender: "bot", text: "❌ Error: " + data.error }]);
      }
    } catch (err) {
      setMessages((prev) => [...prev, { sender: "bot", text: "⚠ Something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Floating Chat Button */}
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-accent to-gray-400 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
        >
          <MessageCircle size={24} />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-20 right-5 ${
              minimized ? "w-64 h-12" : "w-[90vw] max-w-md h-[70vh] md:h-[500px]"
            } bg-primary dark:bg-gray-900 shadow-2xl rounded-2xl flex flex-col border border-gray-200 dark:border-gray-700 overflow-hidden`}
          >
            {/* Header */}
            <div className="bg-accent dark:bg-primary text-black px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot size={26} />
                <h3 className="font-semibold text-sm md:text-base">AI Assistant</h3>
              </div>
              <div className="flex gap-2">
                {/* Minimize Button */}
                <button
                  onClick={() => setMinimized(!minimized)}
                  className="hover:bg-gray-500/40 rounded p-1"
                >
                  <Minus size={18} />
                </button>
                {/* Close Button */}
                <button
                  onClick={() => setOpen(false)}
                  className="hover:bg-gray-500/40 rounded p-1"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!minimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
                  {messages.length === 0 && (
                    <p className="text-gray-200 text-center">
                      Say hi 👋 to start chatting!
                    </p>
                  )}
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`px-4 py-2 rounded-2xl max-w-[75%] shadow text-sm md:text-base ${
                          msg.sender === "user"
                            ? "bg-accent text-black rounded-br-none"
                            : "bg-gray-500 text-white rounded-bl-none"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                  {loading && (
                    <p className="text-gray-400 text-xs">Bot is typing...</p>
                  )}
                  <div ref={chatEndRef} />
                </div>

                {/* Input */}
                <div className="p-3 border-t border-gray-200 dark:border-gray-700 flex gap-2 bg-background">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    className="flex-1 border rounded-lg px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary bg-gray-800 dark:bg-gray-800 text-white dark:text-black"
                    placeholder="Type your message..."
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={sendMessage}
                    disabled={loading}
                    className="bg-accent hover:bg-accent-dark text-black border border-black px-4 py-2 rounded-lg shadow disabled:opacity-50"
                  >
                    <Send size={18} />
                  </motion.button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
