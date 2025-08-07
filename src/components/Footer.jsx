import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const AdvancedFooterV2 = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Services", href: "/services" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "CCTV Systems", href: "/services" },
        { name: "Digital Marketing", href: "/services" },
        { name: "Audio Video", href: "/services" },
        { name: "Social Media", href: "/services" },
        { name: "Online Food Ordering Systems", href: "/services" },
      ],
    },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      icon: <FaFacebookF style={{ color: "white" }} />,
      url: "https://www.facebook.com",
    },
    {
      label: "Instagram",
      icon: <FaInstagram style={{ color: "white" }} />,
      url: "https://www.instagram.com/ak_vision_systems?igsh=MWsxZzRpNTNydjRxYg%3D%3D&utm_source=qr",
    },
    {
      label: "TikTok",
      icon: <FaTiktok style={{ color: "white" }} />,
      url: "https://www.tiktok.com/@akvisionsystems?_t=ZM-8ybDJ9xozvs&_r=1",
    },
  ];

  const contactInfo = [
    {
      icon: <FaPhoneAlt style={{ color: "white" }} />,
      text: "+1 416-508-4636",
      url: "tel:+14165084636",
      noTargetBlank: true,
    },
    {
      icon: <FaPhoneAlt style={{ color: "white" }} />,
      text: "+1 416-292-0002",
      url: "tel:+14162920002",
      noTargetBlank: true,
    },
    {
      icon: <FaEnvelope style={{ color: "white" }} />,
      text: "akvisionsystems@gmail.com",
      url: "mailto:akvisionsystems@gmail.com",
    },
    {
      icon: <FaClock style={{ color: "white" }} />,
      text: "Mon-Fri: 9AM-6PM EST",
    },
  ];

  return (
    <>
      <footer
        style={{
          background:
            "linear-gradient(135deg, #0a0f1c 0%, #1a2347 50%, #0a0f1c 100%)",
          borderTop: "1px solid rgba(0, 245, 255, 0.2)",
          padding: "3rem 0 1rem",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1250px", margin: "0 auto", padding: "0 2rem" }}
        >
          {/* Main Footer Content */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            {/* Company Info Section */}
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
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "1rem",
                  }}
                >
                  <img
                    src="/Images/AK-Vision Systems Logo.png"
                    alt="AK Vision Systems Logo"
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <h3
                  style={{
                    marginLeft: "5px",
                    fontSize: "14px",
                    fontWeight: "700",
                    background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  AK Vision Systems
                </h3>
              </div>

              <p
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                Transforming businesses across Canada with cutting-edge
                technology solutions, professional security systems, and
                innovative digital marketing strategies.
              </p>
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
                    color: "#00f5ff",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "1.5rem",
                  }}
                >
                  {section.title}
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} style={{ marginBottom: "0.8rem" }}>
                      {link.href.startsWith("/") ? (
                        <Link
                          to={link.href}
                          style={{
                            color: "rgba(255, 255, 255, 0.7)",
                            textDecoration: "none",
                            fontSize: "0.9rem",
                            transition: "color 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.color = "#00f5ff";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = "rgba(255, 255, 255, 0.7)";
                          }}
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          style={{
                            color: "rgba(255, 255, 255, 0.7)",
                            textDecoration: "none",
                            fontSize: "0.9rem",
                            transition: "color 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.color = "#00f5ff";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = "rgba(255, 255, 255, 0.7)";
                          }}
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact Information Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: footerSections.length * 0.1 }}
              viewport={{ once: true }}
            >
              <h4
                style={{
                  color: "#00f5ff",
                  fontSize: "1rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                }}
              >
                Contact Us
              </h4>
              <div style={{ marginTop: "1rem" }}>
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "0.8rem",
                      gap: "0.8rem",
                    }}
                  >
                    <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                    <a
                      href={item.url}
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "0.9rem",
                        lineHeight: 1.4,
                        textDecoration: "none",
                      }}
                      {...(item.noTargetBlank
                        ? {}
                        : { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {item.text}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: footerSections.length * 0.2 }}
              viewport={{ once: true }}
            >
              <h4
                style={{
                  color: "#00f5ff",
                  fontSize: "1rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                }}
              >
                Follow Us
              </h4>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "10px",
                      textDecoration: "none",
                      fontSize: "1.2rem",
                      border: "1px solid rgba(0, 245, 255, 0.2)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                    }}
                    whileHover={{
                      scale: 1.1,
                      background: "rgba(0, 245, 255, 0.2)",
                      borderColor: "#00f5ff",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            style={{
              borderTop: "1px solid rgba(0, 245, 255, 0.2)",
              paddingTop: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "0.9rem",
                margin: 0,
              }}
            >
              © {currentYear} AK Vision Systems. All rights reserved.
            </p>

            <div
              style={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            ></div>
          </motion.div>
        </div>

        {/* Responsive Design Enhancements */}
        <style>
          {`
              @media (max-width: 768px) {
                footer .container {
                  padding: 0 1rem;
                }
                footer div[style*="gridTemplateColumns"] {
                  grid-template-columns: 1fr;
                  gap: 1rem;
                }
                footer h4 {
                  font-size: 1rem;
                }
                footer p, footer a {
                  font-size: 0.85rem;
                }
              }
            `}
        </style>
      </footer>
    </>
  );
};

export default AdvancedFooterV2;
