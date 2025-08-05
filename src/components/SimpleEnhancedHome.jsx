import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./EnhancedHome.css"; // We'll create this CSS file

const SimpleEnhancedHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeDemo, setActiveDemo] = useState(0);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const demos = [
    {
      title: "AI-Powered Surveillance",
      description: "Advanced facial recognition and threat detection",
      icon: "🤖",
    },
    {
      title: "360° Security Coverage",
      description: "Complete perimeter monitoring and protection",
      icon: "📹",
    },
    {
      title: "Real-time Analytics",
      description: "Instant alerts and comprehensive reporting",
      icon: "📊",
    },
  ];

  const features = [
    {
      icon: "🔒",
      title: "Advanced Security",
      desc: "Military-grade encryption",
    },
    { icon: "🌐", title: "Remote Monitoring", desc: "24/7 cloud access" },
    { icon: "🚨", title: "Instant Alerts", desc: "Real-time notifications" },
    { icon: "🔧", title: "Easy Installation", desc: "Professional setup" },
  ];

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          className="loading-logo"
          animate={{ rotateY: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          📹
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          AK Vision Systems
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Loading Advanced Security Solutions...
        </motion.p>
      </div>
    );
  }

  return (
    <div className="enhanced-home">
      {/* Hero Section */}
      <section className="hero">
        <div className="particle-bg"></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="floating-camera"
            animate={{
              y: [0, -20, 0],
              rotateY: [0, 15, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            📹
          </motion.div>

          <h1 className="hero-title">
            <span className="gradient-text">Next-Gen Security</span>
            <br />
            <span className="tech-text">With AI Technology</span>
          </h1>

          <p className="hero-description">
            Revolutionary CCTV systems powered by artificial intelligence,
            delivering unmatched security coverage for your business.
          </p>

          <div className="hero-actions">
            <motion.button
              className="btn-primary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Get Started
            </motion.button>
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📺 Watch Demo
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Interactive Demo Section */}
      <section className="demo-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Experience Our Technology
        </motion.h2>

        <div className="demo-container">
          <div className="demo-controls">
            {demos.map((demo, index) => (
              <motion.button
                key={index}
                className={`demo-btn ${activeDemo === index ? "active" : ""}`}
                onClick={() => setActiveDemo(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="demo-icon">{demo.icon}</span>
                <div>
                  <h3>{demo.title}</h3>
                  <p>{demo.description}</p>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            className="demo-display"
            key={activeDemo}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="demo-screen">
              <div className="screen-content">
                <motion.div
                  className="scanning-line"
                  animate={{ y: [0, 200, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="data-points">
                  <div className="data-point">✓ Target Detected</div>
                  <div className="data-point">✓ Identity Verified</div>
                  <div className="data-point">✓ Access Granted</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose AK Vision?
        </motion.h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 212, 255, 0.3)",
              }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3>3000+</h3>
            <p>Installations</p>
          </motion.div>
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3>99.9%</h3>
            <p>Uptime</p>
          </motion.div>
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>24/7</h3>
            <p>Support</p>
          </motion.div>
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>5★</h3>
            <p>Rating</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready to Secure Your Future?</h2>
          <p>
            Join hundreds of satisfied customers who trust AK Vision Systems
          </p>
          <motion.button
            className="btn-cta"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(249, 115, 22, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            🔒 Get Free Consultation
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default SimpleEnhancedHome;
