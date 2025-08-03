import { motion } from "framer-motion";

const MobileCallButton = () => {
  return (
    <motion.div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.a
        href="tel:+1234567890"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(135deg, #10f54a, #00f5ff)',
          borderRadius: '50%',
          textDecoration: 'none',
          color: 'white',
          fontSize: '1.5rem',
          boxShadow: '0 8px 24px rgba(16, 245, 74, 0.3)',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: '0 12px 32px rgba(16, 245, 74, 0.5)',
          background: 'linear-gradient(135deg, #00f5ff, #10f54a)'
        }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -5, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        📱
      </motion.a>
    </motion.div>
  );
};

export default MobileCallButton;
