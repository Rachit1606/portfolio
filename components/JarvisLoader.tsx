"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logs = [
  "R.A.C.H.I.T Initialization sequence started...",
  "Loading cybernetic neuro-net...",
  "Establishing secure connection to mainframe...",
  "Bypassing quantum encryption protocols...",
  "Access granted. Welcome to Rachit's Profile"
];

const JarvisLoader = () => {
  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Sequence the logs
    const logInterval = setInterval(() => {
      setTextIndex((prev) => (prev < logs.length - 1 ? prev + 1 : prev));
    }, 400);

    // End loader after loosely ~2.8 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => {
      clearInterval(logInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05070e] overflow-hidden"
        >
          {/* Cyber Ring Animation */}
          <div className="relative flex items-center justify-center w-48 h-48 sm:w-64 sm:h-64 mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute w-full h-full rounded-full border-t-4 border-b-4 border-designColor opacity-80 drop-shadow-[0_0_15px_rgba(0,240,255,1)]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute w-4/5 h-4/5 rounded-full border-l-4 border-r-4 border-cyberPurple opacity-60 drop-shadow-[0_0_15px_rgba(176,38,255,1)]"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute w-1/2 h-1/2 rounded-full bg-designColor blur-2xl opacity-20"
            />
            {/* Center Core */}
            <div className="w-16 h-16 rounded-full bg-boxBg border-2 border-designColor flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.8)]">
              <div className="w-6 h-6 rounded-full bg-designColor animate-pulse blur-[1px]"></div>
            </div>
          </div>

          {/* Terminal Logs */}
          <div className="w-11/12 max-w-lg min-h-[128px] h-auto mt-4 sm:mt-8 flex flex-col items-start justify-end text-left font-mono text-[10px] sm:text-sm md:text-base selection:bg-designColor z-10">
            {logs.slice(0, textIndex + 1).map((log, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`${i === logs.length - 1 ? "text-designColor font-bold shadow-neon" : "text-gray-400"
                  } drop-shadow-md mb-2 leading-relaxed`}
              >
                &gt; {log}
              </motion.p>
            ))}
            {textIndex < logs.length - 1 && (
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-4 sm:w-3 sm:h-5 bg-designColor mt-1 block"
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JarvisLoader;
