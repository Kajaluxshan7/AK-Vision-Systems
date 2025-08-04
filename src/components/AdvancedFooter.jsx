import { motion } from "framer-motion";

const AdvancedFooter = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      url: "https://facebook.com/akvision",
      color: "#1877f2",
      hoverColor: "#166fe5",
    },
    {
      name: "Instagram",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: "https://instagram.com/akvision",
      color: "#e4405f",
      hoverColor: "#d62976",
    },
    {
      name: "Twitter",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      url: "https://twitter.com/akvision",
      color: "#1da1f2",
      hoverColor: "#1a91da",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: "https://linkedin.com/company/akvision",
      color: "#0077b5",
      hoverColor: "#006ba1",
    },
    {
      name: "YouTube",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      url: "https://youtube.com/akvision",
      color: "#ff0000",
      hoverColor: "#cc0000",
    },
    {
      name: "TikTok",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
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
            © {currentYear} AK Vision Systems. All rights reserved. 
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
