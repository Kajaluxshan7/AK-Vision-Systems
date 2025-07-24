import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./App.css";

// Navigation component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="nav-brand">
          <img
            src="/Images/AK-Vision Systems Logo.png"
            alt="AK Vision Systems Logo"
            className="logo"
          />
          <div className="brand-text">
            <h1>AK Vision Systems</h1>
            <span className="tagline">Technology & Marketing Solutions</span>
          </div>
        </div>

        <nav className="nav">
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
            <li>
              <Link
                to="/"
                className={isActive("/") ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={isActive("/services") ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={isActive("/about") ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={isActive("/contact") ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Floating CTA Button */}
        <Link to="/contact" className="floating-cta">
          💬 Get Quote
        </Link>

        {/* Scroll to Top Button */}
        <ScrollToTop />

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <div className="footer-brand">
                  <img
                    src="/Images/AK-Vision Systems Logo.png"
                    alt="AK Vision Systems Logo"
                    className="footer-logo"
                  />
                  <h3>AK Vision Systems</h3>
                  <p>
                    Your trusted partner in technology and marketing solutions
                    across Canada.
                  </p>
                </div>
              </div>

              <div className="footer-section">
                <h4>Services</h4>
                <ul>
                  <li>CCTV & Security Systems</li>
                  <li>Commercial Audio Video</li>
                  <li>Digital Marketing</li>
                  <li>Social Media Management</li>
                  <li>Food Ordering Systems</li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Contact Info</h4>
                <ul>
                  <li>📧 info@akvision.ca</li>
                  <li>📞 +1 (XXX) XXX-XXXX</li>
                  <li>📍 Canada</li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="#" aria-label="Facebook">
                    📘
                  </a>
                  <a href="#" aria-label="Twitter">
                    🐦
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    💼
                  </a>
                  <a href="#" aria-label="Instagram">
                    📷
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p>
                &copy; {new Date().getFullYear()} AK Vision Systems. All rights
                reserved. | Privacy Policy | Terms of Service
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
