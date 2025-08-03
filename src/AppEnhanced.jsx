import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

// Import existing components
import ScrollToTop from "./components/ScrollToTop";

// Import enhanced components
import SimpleEnhancedHome from "./components/SimpleEnhancedHome";

// Import existing pages (we'll enhance these later)
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

// Enhanced Navigation Component
const EnhancedNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(11, 20, 38, 0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(59, 130, 246, 0.2)",
        padding: "1rem 2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#3B82F6",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          📹 AK Vision Systems
        </div>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <a
            href="/"
            style={{
              color: "#00D4FF",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
          >
            Home
          </a>
          <a
            href="/about"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
          >
            About
          </a>
          <a
            href="/services"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
          >
            Services
          </a>
          <a
            href="/contact"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
          >
            Contact
          </a>
          <button
            style={{
              background: "linear-gradient(45deg, #3B82F6, #1e40af)",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "25px",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            🔒 Get Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

// Enhanced Footer Component
const EnhancedFooter = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white",
        padding: "3rem 2rem 1rem",
        borderTop: "1px solid rgba(59, 130, 246, 0.2)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          marginBottom: "2rem",
        }}
      >
        <div>
          <h3 style={{ color: "#3B82F6", marginBottom: "1rem" }}>
            📹 AK Vision Systems
          </h3>
          <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
            Leading provider of advanced CCTV and security solutions in Canada.
            Protecting what matters most with cutting-edge technology.
          </p>
        </div>

        <div>
          <h4 style={{ color: "#00D4FF", marginBottom: "1rem" }}>Services</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
            <li>🔒 CCTV Installation</li>
            <li>🌐 Remote Monitoring</li>
            <li>🚨 Alarm Systems</li>
            <li>🔧 Maintenance & Support</li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: "#00D4FF", marginBottom: "1rem" }}>
            Contact Info
          </h4>
          <div style={{ lineHeight: 1.8 }}>
            <p>📧 akvisionsystems@gmail.com</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📍 Toronto, Ontario, Canada</p>
          </div>
        </div>

        <div>
          <h4 style={{ color: "#00D4FF", marginBottom: "1rem" }}>Follow Us</h4>
          <div style={{ display: "flex", gap: "1rem" }}>
            <span style={{ fontSize: "1.5rem", cursor: "pointer" }}>📘</span>
            <span style={{ fontSize: "1.5rem", cursor: "pointer" }}>📷</span>
            <span style={{ fontSize: "1.5rem", cursor: "pointer" }}>🐦</span>
            <span style={{ fontSize: "1.5rem", cursor: "pointer" }}>💼</span>
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          opacity: 0.7,
        }}
      >
        <p>
          &copy; 2024 AK Vision Systems. All rights reserved. | Advanced
          Security Solutions
        </p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <EnhancedNav />

        <main style={{ paddingTop: "80px" }}>
          <Routes>
            <Route path="/" element={<SimpleEnhancedHome />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <EnhancedFooter />
      </div>
    </Router>
  );
}

export default App;
