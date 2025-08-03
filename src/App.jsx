import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdvancedHome from "./pages/AdvancedHome";
import AdvancedAbout from "./pages/AdvancedAbout";
import ScrollToTop from "./components/ScrollToTop";
import AdvancedServices from "./pages/AdvancedServices";
import Contact from "./pages/Contact";
import AdvancedNavigation from "./components/AdvancedNavigation";
import AdvancedFooterV2 from "./components/AdvancedFooterV2";
import MobileCallButton from "./components/MobileCallButton";
import "./App.css";
// import "./styles/advanced-theme.css";

function App() {
  return (
    <Router>
      <div
        className="app"
        style={{
          background:
            "linear-gradient(135deg, #0a0f1c 0%, #1a2347 50%, #0a0f1c 100%)",
          minHeight: "100vh",
        }}
      >
        <AdvancedNavigation />

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<AdvancedHome />} />
            <Route path="/about" element={<AdvancedAbout />} />
            <Route path="/services" element={<AdvancedServices />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Floating Buttons */}
        <ScrollToTop />
        <MobileCallButton />

        {/* Advanced Footer V2 */}
        <AdvancedFooterV2 />
      </div>
    </Router>
  );
}

export default App;
