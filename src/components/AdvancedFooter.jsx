import { motion } from "framer-motion";

const AdvancedFooter = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: "📘",
      url: "https://facebook.com/akvision",
      color: "#1877f2",
      hoverColor: "#166fe5",
    },
    {
      name: "Instagram",
      icon: "📷",
      url: "https://instagram.com/akvision",
      color: "#e4405f",
      hoverColor: "#d62976",
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "https://twitter.com/akvision",
      color: "#1da1f2",
      hoverColor: "#1a91da",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/company/akvision",
      color: "#0077b5",
      hoverColor: "#006ba1",
    },
    {
      name: "YouTube",
      icon: "📺",
      url: "https://youtube.com/akvision",
      color: "#ff0000",
      hoverColor: "#cc0000",
    },
    {
      name: "TikTok",
      icon: "🎵",
      url: "https://tiktok.com/@akvision",
      color: "#000000",
      hoverColor: "#ff0050",
    },
  ];

  const footerSections = [
    {
      title: "Services",
      icon: "🛡️",
      links: [
        { label: "CCTV Systems", href: "/services#cctv" },
        { label: "Audio Video", href: "/services#audio-video" },
        { label: "Digital Marketing", href: "/services#digital-marketing" },
        { label: "Social Media", href: "/services#social-media" },
        { label: "Web Development", href: "/services#web-development" },
      ],
    },
    {
      title: "Company",
      icon: "🏢",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/about#team" },
        { label: "Careers", href: "/careers" },
        { label: "News & Updates", href: "/blog" },
        { label: "Case Studies", href: "/portfolio" },
      ],
    },
    {
      title: "Support",
      icon: "🔧",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "Help Center", href: "/help" },
        { label: "Documentation", href: "/docs" },
        { label: "System Status", href: "/status" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "akvisionsystems@gmail.com",
      href: "mailto:akvisionsystems@gmail.com",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: "📍",
      label: "Address",
      value: "Toronto, Ontario, Canada",
      href: "https://maps.google.com/?q=Toronto,Ontario,Canada",
    },
    {
      icon: "🕒",
      label: "Hours",
      value: "Mon-Fri: 9AM-6PM EST",
      href: null,
    },
  ];

  return (
    <footer
      style={{
        background: `
        linear-gradient(135deg, rgba(10, 15, 28, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%),
        radial-gradient(circle at 20% 80%, rgba(0, 245, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)
      `,
        borderTop: "1px solid rgba(0, 245, 255, 0.2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 100px,
            rgba(0, 245, 255, 0.03) 100px,
            rgba(0, 245, 255, 0.03) 101px
          )
        `,
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4rem 2rem 2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Main Footer Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <motion.div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 245, 255, 0.4)",
                    "0 0 30px rgba(124, 58, 237, 0.6)",
                    "0 0 20px rgba(0, 245, 255, 0.4)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                📹
              </motion.div>
              <div>
                <h3
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
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "0.9rem",
                    margin: "0.25rem 0 0 0",
                  }}
                >
                  Advanced Security Solutions
                </p>
              </div>
            </div>

            <p
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: 1.6,
                marginBottom: "2rem",
                fontSize: "1rem",
              }}
            >
              Leading provider of cutting-edge CCTV, security systems, and
              digital solutions across Canada. Protecting what matters most with
              innovative technology and expert service since 2020.
            </p>

            {/* Contact Info */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "rgba(0, 245, 255, 0.1)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      border: "1px solid rgba(0, 245, 255, 0.3)",
                    }}
                  >
                    {contact.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        color: "#00f5ff",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                      }}
                    >
                      {contact.label}
                    </div>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        style={{
                          color: "rgba(255, 255, 255, 0.9)",
                          textDecoration: "none",
                          fontSize: "0.9rem",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#00f5ff")}
                        onMouseLeave={(e) =>
                          (e.target.style.color = "rgba(255, 255, 255, 0.9)")
                        }
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span
                        style={{
                          color: "rgba(255, 255, 255, 0.9)",
                          fontSize: "0.9rem",
                        }}
                      >
                        {contact.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#00f5ff",
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  marginBottom: "1.5rem",
                }}
              >
                <span style={{ fontSize: "1.3rem" }}>{section.icon}</span>
                {section.title}
              </h4>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {section.links.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                        transition: "all 0.3s ease",
                        display: "block",
                        padding: "0.25rem 0",
                        borderRadius: "4px",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "#00f5ff";
                        e.target.style.transform = "translateX(8px)";
                        e.target.style.textShadow =
                          "0 0 8px rgba(0, 245, 255, 0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "rgba(255, 255, 255, 0.8)";
                        e.target.style.transform = "translateX(0)";
                        e.target.style.textShadow = "none";
                      }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Media & Newsletter */}
        <motion.div
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "20px",
            padding: "2rem",
            marginBottom: "2rem",
            border: "1px solid rgba(0, 245, 255, 0.2)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            {/* Social Media */}
            <div>
              <h4
                style={{
                  color: "#00f5ff",
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                🌐 Follow Us
              </h4>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      textDecoration: "none",
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: `${social.color}20`,
                      borderColor: social.color,
                      boxShadow: `0 0 20px ${social.color}40`,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4
                style={{
                  color: "#00f5ff",
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                📧 Stay Updated
              </h4>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "0.9rem",
                  marginBottom: "1rem",
                  lineHeight: 1.5,
                }}
              >
                Get the latest security insights, technology updates, and
                exclusive offers.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    padding: "0.75rem 1rem",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(0, 245, 255, 0.3)",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "0.9rem",
                    outline: "none",
                  }}
                />
                <motion.button
                  style={{
                    background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
                    color: "white",
                    border: "none",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2rem 0",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <motion.div
            style={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "0.9rem",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © {currentYear} AK Vision Systems. All rights reserved. | 🇨🇦 Proudly
            Canadian
          </motion.div>

          <motion.div
            style={{
              display: "flex",
              gap: "2rem",
              fontSize: "0.875rem",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="/privacy"
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                textDecoration: "none",
              }}
            >
              Terms of Service
            </a>
            <a
              href="/cookies"
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                textDecoration: "none",
              }}
            >
              Cookie Policy
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
          border: "none",
          color: "white",
          fontSize: "1.5rem",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(0, 245, 255, 0.4)",
          zIndex: 1000,
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 8px 30px rgba(0, 245, 255, 0.6)",
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        ⬆️
      </motion.button>
    </footer>
  );
};

export default AdvancedFooter;
