import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const AdvancedNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["hero", "services", "about", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (path, sectionId = null) => {
    setIsMenuOpen(false);

    if (location.pathname !== path) {
      navigate(path);
      // Wait for navigation then scroll to top or section
      setTimeout(() => {
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          scrollToTop();
        }
      }, 100);
    } else {
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        scrollToTop();
      }
    }
  };

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Home", icon: "Home" },
    { path: "/about", label: "About", icon: "About" },
    { path: "/services", label: "Services", icon: "Services" },
    { path: "/contact", label: "Contact", icon: "Contact" },
  ];

  return (
    <>
      <motion.header
        className={`header ${scrolled ? "scrolled" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled
            ? "rgba(10, 15, 28, 0.95)"
            : "rgba(10, 15, 28, 0.8)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0, 245, 255, 0.2)",
          transition: "all 0.3s ease",
          boxShadow: scrolled ? "0 8px 32px rgba(0, 0, 0, 0.3)" : "none",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 2rem",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          {/* Logo Section */}
          <motion.div
            className="nav-brand"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              cursor: "pointer",
            }}
            onClick={() => handleNavClick("/")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              style={{
                width: "50px",
                height: "50px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                boxShadow: "0 0 20px rgba(0, 245, 255, 0.4)",
                backdropFilter: "blur(10px)",
              }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(0, 245, 255, 0.4)",
                  "0 0 30px rgba(124, 58, 237, 0.6)",
                  "0 0 20px rgba(0, 245, 255, 0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img
                src="/Images/AK-Vision Systems Logo White Background.png"
                alt="AK Vision Systems Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  filter: "brightness(1.2) contrast(1.1)",
                }}
              />
            </motion.div>
            <div>
              <h1
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                AK Vision Systems
              </h1>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255, 255, 255, 0.7)",
                  fontWeight: "400",
                }}
              >
                Advanced Security Solutions
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div
              style={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: isActive(item.path) ? "#00f5ff" : "#ffffff",
                    fontSize: "1rem",
                    fontWeight: "500",
                    cursor: "pointer",
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    position: "relative",
                  }}
                  whileHover={{
                    scale: 1.05,
                    color: "#00f5ff",
                    textShadow: "0 0 8px #00f5ff",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      style={{
                        position: "absolute",
                        bottom: "-2px",
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: "linear-gradient(90deg, #00f5ff, #7c3aed)",
                        borderRadius: "1px",
                      }}
                      layoutId="activeTab"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={() => handleNavClick("/contact")}
              style={{
                background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
                color: "#ffffff",
                border: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "25px",
                fontSize: "0.9rem",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(0, 245, 255, 0.3)",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(0, 245, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Quote
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              style={{
                display: "none",
                background: "transparent",
                border: "none",
                color: "#ffffff",
                fontSize: "1.5rem",
                cursor: "pointer",
                padding: "0.5rem",
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mobile-menu-toggle"
            >
              {isMenuOpen ? "✕" : "☰"}
            </motion.button>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                background: "rgba(10, 15, 28, 0.98)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(0, 245, 255, 0.2)",
                padding: "2rem",
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    style={{
                      background: isActive(item.path)
                        ? "rgba(0, 245, 255, 0.1)"
                        : "transparent",
                      border: "1px solid rgba(0, 245, 255, 0.2)",
                      color: isActive(item.path) ? "#00f5ff" : "#ffffff",
                      padding: "1rem",
                      borderRadius: "12px",
                      fontSize: "1rem",
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                    whileHover={{
                      background: "rgba(0, 245, 255, 0.1)",
                      borderColor: "#00f5ff",
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}

                <motion.button
                  onClick={() => handleNavClick("/contact")}
                  style={{
                    background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
                    color: "#ffffff",
                    border: "none",
                    padding: "1rem",
                    borderRadius: "12px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    marginTop: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Get Quote
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-brand h1 {
            font-size: 1.2rem !important;
          }
          .nav-brand span {
            display: none;
          }
          nav > div:first-child {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default AdvancedNavigation;
