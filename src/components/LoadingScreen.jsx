import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoadingStore } from "../store";

function LoadingScreen() {
  const { isLoading, progress, setProgress, setLoading } = useLoadingStore();
  const [loadingText, setLoadingText] = useState("Initializing AI Systems...");

  const loadingSteps = useMemo(
    () => [
      "Initializing AI Systems...",
      "Loading 3D Models...",
      "Connecting Security Networks...",
      "Calibrating Sensors...",
      "Optimizing Performance...",
      "Ready to Launch!",
    ],
    []
  );

  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + Math.random() * 15;

          // Update loading text based on progress
          const stepIndex = Math.floor(
            (newProgress / 100) * loadingSteps.length
          );
          setLoadingText(
            loadingSteps[Math.min(stepIndex, loadingSteps.length - 1)]
          );

          if (newProgress >= 100) {
            clearInterval(timer);
            setTimeout(() => setLoading(false), 500);
            return 100;
          }
          return newProgress;
        });
      }, 200);

      return () => clearInterval(timer);
    }
  }, [isLoading, setProgress, setLoading, loadingSteps]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center loading-screen"
        >
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-black"></div>

            {/* Animated particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="absolute w-1 h-1 bg-tech-blue rounded-full"
              />
            ))}
          </div>

          {/* Main loading content */}
          <div className="relative z-10 text-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="mb-8"
            >
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <img
                  src="/Images/AK-Vision Systems Logo.png"
                  alt="AK Vision Systems"
                  className="w-full h-full rounded-2xl"
                />
                <div className="absolute inset-0 bg-tech-blue/20 rounded-2xl animate-pulse"></div>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                AK Vision Systems
              </h1>
              <p className="text-tech-blue font-medium">AI-Powered Solutions</p>
            </motion.div>

            {/* 3D Loading Animation */}
            <div className="mb-8">
              <div className="relative w-32 h-32 mx-auto">
                {/* Outer ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-4 border-transparent border-t-tech-blue rounded-full"
                />

                {/* Middle ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border-3 border-transparent border-r-primary-400 rounded-full"
                />

                {/* Inner ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-8 border-2 border-transparent border-b-secondary-400 rounded-full"
                />

                {/* Center dot */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-tech-blue rounded-full"
                />
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-80 max-w-full mx-auto mb-6">
              <div className="flex justify-between items-center mb-2">
                <motion.span
                  key={loadingText}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-white font-medium"
                >
                  {loadingText}
                </motion.span>
                <span className="text-tech-blue font-mono">
                  {Math.round(progress)}%
                </span>
              </div>

              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-gradient-to-r from-tech-blue to-primary-400 rounded-full relative"
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                </motion.div>
              </div>
            </div>

            {/* Status indicators */}
            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center text-green-400">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-2 bg-green-400 rounded-full mr-2"
                />
                AI Systems Online
              </div>
              <div className="flex items-center text-blue-400">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
                  className="w-2 h-2 bg-blue-400 rounded-full mr-2"
                />
                3D Engine Ready
              </div>
              <div className="flex items-center text-purple-400">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                  className="w-2 h-2 bg-purple-400 rounded-full mr-2"
                />
                Security Active
              </div>
            </div>

            {/* Fun loading tips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 text-gray-400 text-sm"
            >
              💡 Tip: Our AI systems learn from every interaction to provide
              better security
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
