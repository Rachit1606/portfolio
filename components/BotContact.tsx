"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaExternalLinkAlt, FaPaperPlane } from "react-icons/fa";

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

const BotContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! I'm Rachit's virtual assistant. Ask me about his skills, experience, or projects!", sender: 'bot' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = { id: Date.now(), text: inputValue.trim(), sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");

    // Simulate thinking delay
    setTimeout(() => {
      const lowerInput = userMsg.text.toLowerCase();
      let botResponse = "I'm just a local AI! Try asking me about Rachit's skills, experience, projects, or how to contact him. You can also email him directly at rc257785@dal.ca";

      if (lowerInput.includes("experience") || lowerInput.includes("work") || lowerInput.includes("job")) {
        botResponse = "Rachit is a Full Stack Developer currently at Citigroup. He also has past experience working at FDM Group, GrayCyan, Snapdeal, Coding Ninjas, and as a TA at Dalhousie University!";
      } else if (lowerInput.includes("skill") || lowerInput.includes("tech") || lowerInput.includes("stack")) {
        botResponse = "His core stack includes Python, Fast API, AI Agents, Java Spring Boot, and AWS. He's also highly proficient in React and Next.js!";
      } else if (lowerInput.includes("project")) {
        botResponse = "He's built awesome projects like ILikeImage (AWS Serverless), TaskSync, and Eduhub. Check out the Projects section above for Github links!";
      } else if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("hire") || lowerInput.includes("reach")) {
        botResponse = "You can reach Rachit instantly by emailing rc257785@dal.ca or calling +1 (782) 882-7240.";
      } else if (lowerInput.includes("education") || lowerInput.includes("degree") || lowerInput.includes("study") || lowerInput.includes("university")) {
        botResponse = "Rachit holds a Master's in Applied Computer Science from Dalhousie University and a Bachelor's in Computer Engineering.";
      } else if (lowerInput.includes("achievement") || lowerInput.includes("certificate") || lowerInput.includes("hackathon") || lowerInput.includes("award")) {
        botResponse = "He is an AWS Certified Solutions Architect, a Solace Certified Developer, and won multiple Runner-up prizes in Generative AI hackathons with Cognizant and DeepSense!";
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
        botResponse = "Hello there! How can I help you today?";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-[90vw] max-w-[350px] sm:w-80 h-[60vh] max-h-[500px] min-h-[300px] bg-[#0b0f19] border border-cyberPurple rounded-2xl shadow-[0_0_20px_rgba(176,38,255,0.3)] flex flex-col overflow-hidden backdrop-blur-md"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-designColor to-cyberPurple px-4 py-3 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2">
                <FaRobot className="text-white text-xl drop-shadow-md" />
                <span className="text-white font-titleFont font-semibold tracking-wide drop-shadow-md">AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">
                <FaTimes />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-[#0a0a0a]">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 max-w-[85%] text-sm rounded-2xl ${msg.sender === 'user' ? 'bg-designColor text-[#05070e] rounded-tr-sm font-medium' : 'bg-[#151924] text-gray-300 border border-gray-800 rounded-tl-sm leading-relaxed'} shadow-sm`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Direct Email Link built in */}
            <div className="px-4 py-2 bg-[#0b0f19] border-t border-gray-800 shrink-0">
              <a
                href="mailto:rc257785@dal.ca"
                className="w-full py-2 bg-transparent border border-designColor border-opacity-50 text-designColor rounded-lg text-center text-xs font-semibold hover:bg-designColor hover:text-[#0b0f19] transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                Send Direct Email <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </div>

            {/* Input Footer */}
            <form onSubmit={handleSend} className="p-3 bg-[#151924] flex items-center gap-2 shrink-0">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 w-0 bg-[#0b0f19] text-white text-sm px-4 py-2 rounded-full border border-gray-700 focus:outline-none focus:border-designColor transition-colors"
                maxLength={100}
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-9 h-9 shrink-0 outline-none rounded-full bg-designColor text-[#05070e] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
              >
                <FaPaperPlane className="text-sm -ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#0b0f19] border-2 border-designColor rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.6)] hover:border-cyberPurple hover:shadow-[0_0_25px_rgba(176,38,255,0.8)] hover:text-cyberPurple transition-colors duration-300 text-designColor text-2xl relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-designColor/20 to-cyberPurple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="relative z-10">{isOpen ? <FaTimes className="text-xl" /> : <FaRobot />}</span>
      </motion.button>
    </div>
  );
};

export default BotContact;
