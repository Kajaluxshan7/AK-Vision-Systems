import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";

const AdvancedServices = () => {
  const [activeService, setActiveService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const services = [
    {
      id: "cctv",
      icon: "🛡️",
      title: "CCTV & Security Systems",
      subtitle: "Advanced Surveillance & Protection",
      category: "security",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format",
      description:
        "End-to-end security camera installation and monitoring services for residential and commercial properties across Canada.",
      features: [
        "HD & 4K Surveillance Cameras",
        "Remote Access & Real-Time Alerts",
        "Infrared Night Vision",
        "Secure Cloud Storage",
        "Mobile App Integration",
        "Professional Installation",
        "24/7 Technical Assistance",
        "Ongoing Maintenance & Support",
      ],
      benefits: [
        "Enhanced Security & Protection",
        "Crime Prevention & Deterrence",
        "Lower Insurance Premiums",
        "Real-Time Property Monitoring",
        "Reliable Evidence Collection",
      ],
      technologies: [
        "AI-Powered Detection",
        "Motion Sensing",
        "Facial Recognition",
        "Intelligent Video Analytics",
      ],
    },
    {
      id: "audio-video",
      icon: "🎵",
      title: "Commercial & Residential Audio/Video",
      subtitle: "Integrated AV Solutions for Any Space",
      category: "technology",
      image:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop&auto=format",
      description:
        "Complete audio-visual solutions tailored for conference rooms, events, retail environments, restaurants, and corporate facilities.",
      features: [
        "Conference Room AV Setup",
        "Digital Signage Deployment",
        "Surround Sound System Installation",
        "Video Wall Configuration",
        "Wireless Presentation Tools",
        "Background Music Integration",
        "Microphone & Speaker Configuration",
        "Centralized AV Control Systems",
      ],
      benefits: [
        "Improved Communication & Engagement",
        "Professional Presentation Experience",
        "Enhanced Customer Environment",
        "Increased Brand Visibility",
        "Streamlined Operations",
      ],
      technologies: [
        "4K UHD Displays",
        "Wireless Audio Solutions",
        "Smart Control Interfaces",
        "Cloud-Connected AV Systems",
      ],
    },
    {
      id: "digital-marketing",
      icon: "📱",
      title: "Digital Marketing Services",
      subtitle: "Complete Digital Strategy & Social Media Management",
      category: "marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format",
      description:
        "Comprehensive digital marketing services designed to boost your online presence, drive qualified traffic, increase conversions, and manage your brand across all digital platforms.",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click Advertising (PPC)",
        "Content Strategy & Blogging",
        "Email Marketing Campaigns",
        "Google Ads Management",
        "Performance Analytics & Reporting",
        "Local SEO & Listings Optimization",
        "Conversion Rate Optimization (CRO)",
        "Social Media Strategy & Scheduling",
        "Content Creation & Community Engagement",
        "Influencer Partnerships",
        "Paid Social Advertising",
      ],
      benefits: [
        "Stronger Online Visibility",
        "Increased Website Traffic",
        "Higher Quality Lead Generation",
        "Improved Marketing ROI",
        "Consistent Social Media Engagement",
        "Established Brand Authority",
        "Real-Time Customer Interaction",
      ],
      technologies: [
        "AI-Powered Analytics",
        "Marketing Automation Platforms",
        "CRM Integrations",
        "Conversion Tracking Tools",
        "Social Listening Systems",
        "Post Scheduling Software",
      ],
    },
    {
      id: "web-development",
      icon: "🌐",
      title: "Web Development",
      subtitle: "Responsive & Scalable Web Solutions",
      category: "technology",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop&auto=format",
      description:
        "Custom-built websites and web applications designed for performance, scalability, and modern user experiences across all devices.",
      features: [
        "Mobile-Responsive Design",
        "E-Commerce Development",
        "Custom Web Application Development",
        "Content Management System (CMS)",
        "API Integration & Development",
        "Database Architecture & Management",
        "Performance Optimization",
        "Robust Security Implementation",
      ],
      benefits: [
        "Professional Online Presence",
        "Improved User Experience",
        "SEO-Friendly Structure",
        "Fast & Reliable Performance",
        "Secure & Scalable Infrastructure",
      ],
      technologies: ["React", "Node.js", "Cloud Hosting", "SSL Encryption"],
    },
    {
      id: "food-ordering",
      icon: "🍽️",
      title: "Online Food Ordering Systems",
      subtitle: "Custom Ordering Platforms for Restaurants",
      category: "technology",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&auto=format", // Vibrant restaurant ordering experience
      description:
        "Tailored online food ordering and delivery platforms that simplify restaurant operations, boost sales, and enhance the customer experience.",
      features: [
        "User-Friendly Ordering Interface",
        "Live Order Management Dashboard",
        "Customizable Menus & Offers",
        "Secure Payment Gateway Integration",
        "Real-Time Order & Delivery Tracking",
        "Loyalty & Reward Program Features",
        "Customer Feedback & Reviews",
        "Multi-Restaurant Support (Optional)",
      ],
      benefits: [
        "Increased Order Volume & Revenue",
        "Faster & Accurate Order Processing",
        "Enhanced Customer Convenience",
        "Contactless Ordering & Payment",
        "Better Customer Retention",
      ],
      technologies: [
        "Progressive Web Apps",
        "Real-Time Notification System",
        "Mobile App Support",
        "Admin Panel with Analytics",
      ],
    },
    {
      id: "tv-mounting",
      icon: "📺",
      title: "TV Mounting Services",
      subtitle: "Safe, Clean & Professional Installations",
      category: "services",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // Working Unsplash photo of modern living room with mounted TV
      description:
        "Expert TV wall mounting services for homes and businesses, ensuring secure installations, optimal viewing angles, and concealed wiring for a polished look.",
      features: [
        "Flat, Tilt & Swivel Mount Installation",
        "Cable Concealment & Routing",
        "Soundbar & Device Integration",
        "Smart TV Setup & Configuration",
        "Multiple Room Mounting",
        "Precision Positioning with Laser Tools",
        "Unboxing & Setup Assistance",
        "Post-Installation Inspection",
      ],
      benefits: [
        "Clutter-Free, Professional Appearance",
        "Optimized Viewing Experience",
        "Maximized Space Utilization",
        "Safe & Stable Mounting",
        "Improved Aesthetic Appeal",
      ],
      technologies: [
        "Universal Mounting Hardware",
        "Stud & Beam Detection Tools",
        "Laser-Leveling Equipment",
        "Integrated Cable Management Kits",
      ],
    },
  ];

  const categories = [
    { id: "all", label: "All Services", icon: "🔧" },
    { id: "security", label: "Security", icon: "🛡️" },
    { id: "technology", label: "Technology", icon: "💻" },
    { id: "marketing", label: "Marketing", icon: "📈" },
    { id: "consulting", label: "Consulting", icon: "💡" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #0a0f1c 0%, #1a2347 50%, #0a0f1c 100%)",
        minHeight: "100vh",
        paddingTop: "100px",
      }}
    >
      <SEO
        title="Advanced Technology Services - CCTV, Audio/Video, Digital Marketing"
        description="Comprehensive technology services including AI-powered CCTV & security systems, commercial audio/video solutions, digital marketing, web development, and food ordering systems. Professional installation and 24/7 support across Canada."
        keywords="CCTV services Canada, security systems, audio video installation, digital marketing services, web development, social media management, food ordering systems, brand strategy, technology solutions"
        url="https://akvision.ca/services"
      />

      {/* Hero Section */}
      <section
        style={{
          padding: "4rem 1rem",
          textAlign: "center",
          background: `
          radial-gradient(circle at 50% 20%, rgba(0, 245, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)
        `,
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1rem",
          }}
        >
          <motion.h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "700",
              background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "1.5rem",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Advanced Technology Services
          </motion.h1>

          <motion.p
            style={{
              fontSize: "1.25rem",
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "800px",
              margin: "0 auto 3rem",
              lineHeight: 1.6,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive security, technology, and digital solutions tailored
            for Canadian businesses. From cutting-edge CCTV systems to strategic
            digital marketing - we have got you covered.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "2rem",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  background:
                    selectedCategory === category.id
                      ? "linear-gradient(135deg, #00f5ff, #7c3aed)"
                      : "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  border: `1px solid ${
                    selectedCategory === category.id
                      ? "#00f5ff"
                      : "rgba(255, 255, 255, 0.2)"
                  }`,
                  padding: "0.75rem 1.5rem",
                  borderRadius: "25px",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "2rem 2rem 6rem" }}>
        <div
          className="container"
          style={{ maxWidth: "1280px", margin: "0 auto" }}
        >
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "2rem",
            }}
            layout
          >
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(0, 245, 255, 0.2)",
                    borderRadius: "24px",
                    overflow: "hidden",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    position: "relative",
                    cursor: "pointer",
                  }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "#00f5ff",
                    boxShadow:
                      "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 245, 255, 0.2)",
                  }}
                  onClick={() =>
                    setActiveService(
                      activeService === service.id ? null : service.id
                    )
                  }
                >
                  {/* Service Image */}
                  <div
                    style={{
                      height: "200px",
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(135deg, rgba(0, 245, 255, 0.3), rgba(124, 58, 237, 0.3))",
                      }}
                    />

                    {/* Service Icon */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "1rem",
                        left: "1rem",
                        width: "60px",
                        height: "60px",
                        background: "rgba(255, 255, 255, 0.9)",
                        borderRadius: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                      }}
                    >
                      {service.icon}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div style={{ padding: "2rem" }}>
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        color: "#00f5ff",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: "0.9rem",
                        marginBottom: "1rem",
                        fontWeight: "500",
                      }}
                    >
                      {service.subtitle}
                    </p>

                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        lineHeight: 1.6,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Technologies */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            background: "rgba(124, 58, 237, 0.2)",
                            color: "#7c3aed",
                            padding: "0.25rem 0.75rem",
                            borderRadius: "12px",
                            fontSize: "0.75rem",
                            fontWeight: "500",
                            border: "1px solid rgba(124, 58, 237, 0.3)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      style={{
                        background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
                        color: "white",
                        border: "none",
                        padding: "0.75rem 1.5rem",
                        borderRadius: "25px",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        width: "100%",
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {activeService === service.id
                        ? "Hide Details"
                        : "View Details"}
                      {activeService === service.id ? "" : ""}
                    </motion.button>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {activeService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            marginTop: "2rem",
                            paddingTop: "2rem",
                            borderTop: "1px solid rgba(0, 245, 255, 0.2)",
                          }}
                        >
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns:
                                "repeat(auto-fit, minmax(200px, 1fr))",
                              gap: "2rem",
                            }}
                          >
                            {/* Features */}
                            <div>
                              <h4
                                style={{
                                  color: "#00f5ff",
                                  fontSize: "1.1rem",
                                  fontWeight: "600",
                                  marginBottom: "1rem",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "0.5rem",
                                }}
                              >
                                ⚡ Features
                              </h4>
                              <ul
                                style={{
                                  listStyle: "none",
                                  padding: 0,
                                  margin: 0,
                                }}
                              >
                                {service.features.map((feature, idx) => (
                                  <motion.li
                                    key={feature}
                                    style={{
                                      color: "rgba(255, 255, 255, 0.8)",
                                      fontSize: "0.9rem",
                                      marginBottom: "0.5rem",
                                      paddingLeft: "1.5rem",
                                      position: "relative",
                                    }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                  >
                                    <span
                                      style={{
                                        position: "absolute",
                                        left: 0,
                                        color: "#00f5ff",
                                      }}
                                    >
                                      ✓
                                    </span>
                                    {feature}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            {/* Benefits */}
                            <div>
                              <h4
                                style={{
                                  color: "#7c3aed",
                                  fontSize: "1.1rem",
                                  fontWeight: "600",
                                  marginBottom: "1rem",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "0.5rem",
                                }}
                              >
                                🎯 Benefits
                              </h4>
                              <ul
                                style={{
                                  listStyle: "none",
                                  padding: 0,
                                  margin: 0,
                                }}
                              >
                                {service.benefits.map((benefit, idx) => (
                                  <motion.li
                                    key={benefit}
                                    style={{
                                      color: "rgba(255, 255, 255, 0.8)",
                                      fontSize: "0.9rem",
                                      marginBottom: "0.5rem",
                                      paddingLeft: "1.5rem",
                                      position: "relative",
                                    }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                  >
                                    <span
                                      style={{
                                        position: "absolute",
                                        left: 0,
                                        color: "#7c3aed",
                                      }}
                                    >
                                      ★
                                    </span>
                                    {benefit}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              gap: "1rem",
                              marginTop: "2rem",
                            }}
                          >
                            <motion.button
                              style={{
                                background: "rgba(0, 245, 255, 0.1)",
                                color: "#00f5ff",
                                border: "1px solid #00f5ff",
                                padding: "0.75rem 1.5rem",
                                borderRadius: "25px",
                                fontSize: "0.9rem",
                                fontWeight: "600",
                                cursor: "pointer",
                                flex: 1,
                              }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              💬 Get Quote
                            </motion.button>

                            <motion.button
                              style={{
                                background: "rgba(124, 58, 237, 0.1)",
                                color: "#7c3aed",
                                border: "1px solid #7c3aed",
                                padding: "0.75rem 1.5rem",
                                borderRadius: "25px",
                                fontSize: "0.9rem",
                                fontWeight: "600",
                                cursor: "pointer",
                                flex: 1,
                              }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              Call Us
                            </motion.button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "4rem 2rem",
          background: `
          linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(124, 58, 237, 0.1)),
          radial-gradient(circle at 30% 70%, rgba(0, 245, 255, 0.1) 0%, transparent 50%)
        `,
          textAlign: "center",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <motion.h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "1.5rem",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>

          <motion.p
            style={{
              fontSize: "1.2rem",
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: "2rem",
              lineHeight: 1.6,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let our experts help you choose the perfect technology solutions for
            your needs. Get a free consultation and custom quote today.
          </motion.p>

          <motion.div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              style={{
                background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
                color: "white",
                border: "none",
                padding: "1rem 2rem",
                borderRadius: "25px",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 245, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.button>

            <a href="tel:+14165084636" style={{ textDecoration: "none" }}>
              <motion.button
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  padding: "1rem 2rem",
                  borderRadius: "25px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                whileHover={{
                  scale: 1.05,
                  background: "rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Call +1 416-508-4636
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedServices;
