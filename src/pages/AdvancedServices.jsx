import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AdvancedServices = () => {
  const [activeService, setActiveService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const services = [
    {
      id: "cctv",
      icon: "🛡️",
      title: "CCTV & Security Systems",
      subtitle: "Professional Surveillance Solutions",
      category: "security",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format",
      description:
        "Comprehensive security camera installation and monitoring services for businesses and residential properties across Canada.",
      features: [
        "HD & 4K Security Cameras",
        "Remote Monitoring & Alerts",
        "Night Vision Capabilities",
        "Cloud Storage Solutions",
        "Mobile App Access",
        "Professional Installation",
        "24/7 Technical Support",
        "System Maintenance",
      ],
      benefits: [
        "Enhanced Property Security",
        "Crime Deterrence",
        "Insurance Premium Reduction",
        "Remote Property Monitoring",
        "Evidence Documentation",
      ],
      technologies: [
        "AI Detection",
        "Motion Sensors",
        "Facial Recognition",
        "Smart Analytics",
      ],
    },
    {
      id: "audio-video",
      icon: "🎵",
      title: "Commercial Audio Video",
      subtitle: "Professional AV Solutions",
      category: "technology",
      image:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop&auto=format",
      description:
        "Complete audio-visual systems for conferences, events, retail spaces, restaurants, and commercial facilities.",
      features: [
        "Conference Room AV Setup",
        "Digital Signage Solutions",
        "Sound System Installation",
        "Video Wall Configuration",
        "Wireless Presentation Systems",
        "Background Music Systems",
        "Microphone & Speaker Setup",
        "AV Control Systems",
      ],
      benefits: [
        "Enhanced Communication",
        "Professional Presentations",
        "Improved Customer Experience",
        "Brand Visibility",
        "Seamless Operations",
      ],
      technologies: [
        "4K Displays",
        "Wireless Audio",
        "Smart Controls",
        "Cloud Integration",
      ],
    },
    {
      id: "digital-marketing",
      icon: "📱",
      title: "Digital Marketing Services",
      subtitle: "Complete Online Presence",
      category: "marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format",
      description:
        "Strategic digital marketing solutions to boost your online visibility, drive traffic, and increase conversions.",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click Advertising (PPC)",
        "Content Marketing Strategy",
        "Email Marketing Campaigns",
        "Google Ads Management",
        "Analytics & Reporting",
        "Local SEO Optimization",
        "Conversion Rate Optimization",
      ],
      benefits: [
        "Increased Online Visibility",
        "Higher Website Traffic",
        "Better Lead Generation",
        "Improved ROI",
        "Brand Authority Building",
      ],
      technologies: [
        "AI Analytics",
        "Automation Tools",
        "CRM Integration",
        "Advanced Tracking",
      ],
    },
    {
      id: "social-media",
      icon: "📲",
      title: "Social Media Management",
      subtitle: "Strategic Social Presence",
      category: "marketing",
      image:
        "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop&auto=format",
      description:
        "Expert management of your social media accounts across all major platforms to build engagement and grow your audience.",
      features: [
        "Content Creation & Curation",
        "Social Media Strategy",
        "Community Management",
        "Paid Social Advertising",
        "Influencer Partnerships",
        "Social Media Analytics",
        "Brand Reputation Management",
        "Crisis Communication",
      ],
      benefits: [
        "Increased Brand Awareness",
        "Better Customer Engagement",
        "Lead Generation",
        "Community Building",
        "Real-time Customer Support",
      ],
      technologies: [
        "AI Content Tools",
        "Scheduling Platforms",
        "Analytics Suite",
        "Social Listening",
      ],
    },
    {
      id: "web-development",
      icon: "🌐",
      title: "Web Development",
      subtitle: "Custom Digital Solutions",
      category: "technology",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop&auto=format",
      description:
        "Modern, responsive websites and web applications built with cutting-edge technology and optimized for performance.",
      features: [
        "Responsive Web Design",
        "E-commerce Development",
        "Custom Web Applications",
        "Content Management Systems",
        "API Development & Integration",
        "Database Design",
        "Performance Optimization",
        "Security Implementation",
      ],
      benefits: [
        "Professional Online Presence",
        "Mobile-Friendly Design",
        "SEO Optimization",
        "Fast Loading Times",
        "Secure & Reliable",
      ],
      technologies: ["React", "Node.js", "Cloud Hosting", "SSL Security"],
    },
    {
      id: "consultation",
      icon: "💡",
      title: "Technology Consultation",
      subtitle: "Expert Strategic Guidance",
      category: "consulting",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format",
      description:
        "Strategic technology consulting to help you make informed decisions about your security and digital infrastructure.",
      features: [
        "Technology Assessment",
        "Security Audits",
        "System Integration Planning",
        "Budget Planning & ROI Analysis",
        "Vendor Evaluation",
        "Implementation Roadmaps",
        "Staff Training Programs",
        "Ongoing Support Planning",
      ],
      benefits: [
        "Informed Decision Making",
        "Cost Optimization",
        "Risk Mitigation",
        "Future-Proof Solutions",
        "Expert Guidance",
      ],
      technologies: [
        "Analysis Tools",
        "Security Frameworks",
        "Best Practices",
        "Industry Standards",
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
      {/* Hero Section */}
      <section
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          background: `
          radial-gradient(circle at 50% 20%, rgba(0, 245, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)
        `,
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1280px", margin: "0 auto" }}
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
            🚀 Advanced Technology Services
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

                    {/* Price Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        background: "rgba(0, 245, 255, 0.9)",
                        color: "#0a0f1c",
                        padding: "0.5rem 1rem",
                        borderRadius: "20px",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                      }}
                    >
                      {service.price}
                    </div>

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
              🚀 Get Free Consultation
            </motion.button>

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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedServices;
