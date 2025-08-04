import { motion } from "framer-motion";

const MobileCallButton = () => {
  return (
    <motion.div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.a
        href="tel:+14165084636"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "60px",
          background: "linear-gradient(135deg, #10f54a, #00f5ff)",
          borderRadius: "50%",
          textDecoration: "none",
          color: "white",
          fontSize: "1.2rem",
          boxShadow: "0 8px 24px rgba(16, 245, 74, 0.3)",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 12px 32px rgba(16, 245, 74, 0.5)",
          background: "linear-gradient(135deg, #00f5ff, #10f54a)",
        }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -5, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
        >
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </motion.a>
    </motion.div>
  );
};

export default MobileCallButton;
