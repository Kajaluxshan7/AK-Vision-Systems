import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const services = [
    "AI-Powered CCTV Systems",
    "Smart Audio Video Solutions",
    "Digital Marketing Automation",
    "Social Media AI Management",
    "Intelligent Ordering Systems",
    "Brand Strategy & Analytics",
  ];

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
  ];

  const socialLinks = [
    { label: "Facebook", icon: "📘", url: "#" },
    { label: "Twitter", icon: "🐦", url: "#" },
    { label: "LinkedIn", icon: "💼", url: "#" },
    { label: "Instagram", icon: "📷", url: "#" },
    { label: "YouTube", icon: "📺", url: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-gradient-to-br from-primary-950 via-black to-primary-900 border-t border-white/10">
      <div className="container-custom py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/Images/AK-Vision Systems Logo.png"
                alt="AK Vision Systems Logo"
                className="h-12 w-12 rounded-lg"
              />
              <div>
                <h3 className="text-white font-bold text-xl">
                  AK Vision Systems
                </h3>
                <span className="text-tech-blue text-sm">
                  AI-Powered Solutions
                </span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Leading provider of AI-powered security systems, smart automation,
              and digital marketing solutions across Canada. Building the future
              of technology for businesses everywhere.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <span className="text-lg mr-3">📧</span>
                <a
                  href="mailto:akvisionsystems@gmail.com"
                  className="hover:text-tech-blue transition-colors"
                >
                  akvisionsystems@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-lg mr-3">📞</span>
                <a
                  href="tel:+1234567890"
                  className="hover:text-tech-blue transition-colors"
                >
                  +1 (XXX) XXX-XXXX
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-lg mr-3">📍</span>
                <span>Serving All of Canada</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="text-tech-blue mr-2">⚙️</span>
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-tech-blue transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-tech-blue rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="text-tech-blue mr-2">🔗</span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-tech-blue transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-tech-blue rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="text-tech-blue mr-2">📬</span>
              Stay Connected
            </h4>

            <p className="text-gray-300 mb-4">
              Get the latest updates on AI technology and security innovations.
            </p>

            {/* Newsletter Signup */}
            <form className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-tech-blue"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-tech-blue text-black rounded-r-lg hover:bg-tech-blue/80 transition-colors font-medium"
                >
                  📨
                </button>
              </div>
            </form>

            {/* Social Links */}
            <div>
              <h5 className="text-white font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-lg hover:bg-tech-blue/20 hover:text-tech-blue transition-all hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Certifications & Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/10 pt-8 mb-8"
        >
          <div className="text-center mb-6">
            <h5 className="text-white font-medium mb-4">
              Trusted Technology Partners
            </h5>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-gray-400 font-tech">Microsoft Azure</div>
              <div className="text-gray-400 font-tech">AWS</div>
              <div className="text-gray-400 font-tech">Google Cloud</div>
              <div className="text-gray-400 font-tech">OpenAI</div>
              <div className="text-gray-400 font-tech">NVIDIA</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 lg:mb-0">
              © {currentYear} AK Vision Systems. All rights reserved. |
              <Link to="/privacy" className="hover:text-tech-blue ml-1">
                Privacy Policy
              </Link>{" "}
              |
              <Link to="/terms" className="hover:text-tech-blue ml-1">
                Terms of Service
              </Link>
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center text-gray-400">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                All Systems Operational
              </div>
              <div className="text-gray-400">🇨🇦 Proudly Canadian</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-tech-blue/5 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -left-8 w-32 h-32 bg-primary-600/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-8 left-1/3 w-16 h-16 bg-secondary-500/5 rounded-full animate-pulse delay-500"></div>
      </div>
    </footer>
  );
}

export default EnhancedFooter;
