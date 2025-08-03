import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import EnhancedHome from "./pages/EnhancedHome";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import EnhancedNavigation from "./components/EnhancedNavigation";
import EnhancedFooter from "./components/EnhancedFooter";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
          <LoadingScreen />
          <EnhancedNavigation />

          {/* Main Content */}
          <main className="main-content pt-20">
            <Routes>
              <Route path="/" element={<EnhancedHome />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Scroll to Top Button */}
          <ScrollToTop />

          {/* Footer */}
          <EnhancedFooter />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
