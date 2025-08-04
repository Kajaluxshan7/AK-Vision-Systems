import { motion } from "framer-motion";

const LoadingScreen = ({ isLoading, onLoadingComplete }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background:
          "linear-gradient(135deg, #0b1426 0%, #1e3a8a 50%, #0b1426 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        color: "white",
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={{
          width: "120px",
          height: "120px",
          marginBottom: "2rem",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          boxShadow: "0 0 40px rgba(0, 245, 255, 0.5)",
          backdropFilter: "blur(10px)",
        }}
        animate={{
          boxShadow: [
            "0 0 40px rgba(0, 245, 255, 0.5)",
            "0 0 60px rgba(124, 58, 237, 0.7)",
            "0 0 40px rgba(0, 245, 255, 0.5)",
          ],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <img
          src="/Images/AK-Vision Systems Logo White Background.png"
          alt="AK Vision Systems"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "brightness(1.2) contrast(1.1)",
          }}
        />
      </motion.div>

      <motion.h2
        style={{
          fontSize: "2.5rem",
          margin: "0.5rem 0",
          background: "linear-gradient(45deg, #3b82f6, #00d4ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textAlign: "center",
          fontWeight: "700",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        AK Vision Systems
      </motion.h2>

      <motion.p
        style={{
          opacity: 0.8,
          fontSize: "1.1rem",
          textAlign: "center",
          marginBottom: "2rem",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Advanced Security & Technology Solutions
      </motion.p>

      <motion.div
        style={{
          width: "200px",
          height: "4px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, #00f5ff, #7c3aed)",
            borderRadius: "2px",
          }}
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          onAnimationComplete={onLoadingComplete}
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
