import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AdvancedFooterV2 = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Services", href: "/services" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "#" },
        { name: "News & Updates", href: "#" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "CCTV Systems", href: "/services" },
        { name: "Digital Marketing", href: "/services" },
        { name: "Audio Video", href: "/services" },
        { name: "Social Media", href: "/services" },
        { name: "Food Ordering", href: "/services" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Technical Support", href: "#" },
        { name: "System Status", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Refund Policy", href: "#" },
        { name: "Accessibility", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "📘", href: "https://facebook.com" },
    { name: "Twitter", icon: "🐦", href: "https://twitter.com" },
    { name: "LinkedIn", icon: "💼", href: "https://linkedin.com" },
    { name: "Instagram", icon: "📷", href: "https://instagram.com" },
    { name: "YouTube", icon: "📺", href: "https://youtube.com" }
  ];

  const contactInfo = [
    { icon: "📍", text: "123 Technology Street, Toronto, ON M5V 3A8, Canada" },
    { icon: "📞", text: "+1 (416) 555-0123" },
    { icon: "📧", text: "info@akvision.ca" },
    { icon: "🕒", text: "Mon-Fri: 9AM-6PM EST" }
  ];

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2347 50%, #0a0f1c 100%)',
      borderTop: '1px solid rgba(0, 245, 255, 0.2)',
      padding: '3rem 0 1rem'
    }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Company Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #00f5ff, #7c3aed)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1rem',
                fontSize: '1.5rem'
              }}>
                🚀
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #00f5ff, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                AK Vision Systems
              </h3>
            </div>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.6,
              marginBottom: '1.5rem'
            }}>
              Transforming businesses across Canada with cutting-edge technology solutions, 
              professional security systems, and innovative digital marketing strategies.
            </p>

            {/* Contact Information */}
            <div style={{ marginBottom: '2rem' }}>
              {contactInfo.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '0.8rem',
                  gap: '0.8rem'
                }}>
                  <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                  <span style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.9rem',
                    lineHeight: 1.4
                  }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 style={{
                color: '#00f5ff',
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                Follow Us
              </h4>
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      textDecoration: 'none',
                      fontSize: '1.2rem',
                      border: '1px solid rgba(0, 245, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)'
                    }}
                    whileHover={{
                      scale: 1.1,
                      background: 'rgba(0, 245, 255, 0.2)',
                      borderColor: '#00f5ff'
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
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
              <h4 style={{
                color: '#00f5ff',
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '1.5rem'
              }}>
                {section.title}
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} style={{ marginBottom: '0.8rem' }}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        style={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#00f5ff';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                        }}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        style={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#00f5ff';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = 'rgba(255, 255, 255, 0.7)';
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
        </div>

        {/* Bottom Bar */}
        <motion.div
          style={{
            borderTop: '1px solid rgba(0, 245, 255, 0.2)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.9rem',
            margin: 0
          }}>
            © {currentYear} AK Vision Systems. All rights reserved.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <span style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.8rem'
            }}>
              🇨🇦 Proudly Canadian
            </span>
            <span style={{
              background: 'rgba(0, 245, 255, 0.1)',
              color: '#00f5ff',
              padding: '0.3rem 0.8rem',
              borderRadius: '15px',
              fontSize: '0.8rem',
              fontWeight: '500'
            }}>
              🔒 SSL Secured
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default AdvancedFooterV2;
