import { motion } from "framer-motion";

const AdvancedAbout = () => {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      icon: "🎯",
      description: "Successfully delivered projects across Canada",
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      icon: "⚡",
      description: "Industry-leading system reliability",
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: "🔧",
      description: "Round-the-clock technical assistance",
    },
    {
      number: "5★",
      label: "Customer Rating",
      icon: "⭐",
      description: "Consistently excellent service reviews",
    },
  ];

  const team = [
    {
      name: "Akash Kumar",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format",
      bio: "Visionary leader with 10+ years in security technology and business innovation.",
      specialties: [
        "Strategic Planning",
        "Technology Vision",
        "Business Development",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "akash@akvision.ca",
      },
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=400&h=400&fit=crop&auto=format",
      bio: "Expert in security systems architecture and AI-powered surveillance solutions.",
      specialties: [
        "System Architecture",
        "AI Development",
        "Security Protocols",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@akvision.ca",
      },
    },
    {
      name: "Marcus Johnson",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format",
      bio: "Operations specialist ensuring seamless project delivery and customer satisfaction.",
      specialties: [
        "Project Management",
        "Quality Assurance",
        "Team Leadership",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "marcus@akvision.ca",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format",
      bio: "Creative marketing strategist specializing in digital transformation and brand growth.",
      specialties: ["Digital Marketing", "Brand Strategy", "Content Creation"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@akvision.ca",
      },
    },
  ];

  const values = [
    {
      icon: "🛡️",
      title: "Security First",
      description:
        "We prioritize the safety and protection of our clients above all else, implementing industry-leading security protocols.",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "Constantly evolving with cutting-edge technology to provide the most advanced solutions available.",
    },
    {
      icon: "🤝",
      title: "Reliability",
      description:
        "Our clients depend on us for consistent, high-quality service and support they can trust.",
    },
    {
      icon: "💎",
      title: "Excellence",
      description:
        "We strive for perfection in every project, ensuring exceptional results that exceed expectations.",
    },
  ];

  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description:
        "AK Vision Systems established with a mission to revolutionize security technology in Canada.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&auto=format",
    },
    {
      year: "2021",
      title: "First Major Contract",
      description:
        "Secured our first enterprise-level security installation for a major retail chain.",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop&auto=format",
    },
    {
      year: "2022",
      title: "Digital Expansion",
      description:
        "Launched comprehensive digital marketing and web development services.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
    },
    {
      year: "2023",
      title: "AI Integration",
      description:
        "Pioneered AI-powered surveillance systems with advanced analytics capabilities.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format",
    },
    {
      year: "2024",
      title: "Market Leadership",
      description:
        "Achieved recognition as a leading security technology provider across Canada.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&auto=format",
    },
  ];

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
            🏢 About AK Vision Systems
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
            Leading the future of security technology with innovative solutions,
            expert service, and unwavering commitment to protecting what matters
            most.
          </motion.p>

          {/* Company Image */}
          <motion.div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop&auto=format"
              alt="AK Vision Systems Office"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        style={{
          padding: "4rem 2rem",
          background: "rgba(255, 255, 255, 0.02)",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1280px", margin: "0 auto" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(0, 245, 255, 0.2)",
                  borderRadius: "20px",
                  padding: "2rem",
                  textAlign: "center",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "#00f5ff",
                  boxShadow: "0 0 30px rgba(0, 245, 255, 0.3)",
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1rem",
                  }}
                >
                  {stat.icon}
                </div>
                <h3
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    color: "#00f5ff",
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.number}
                </h3>
                <h4
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    color: "white",
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.label}
                </h4>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "0.9rem",
                  }}
                >
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: "4rem 2rem" }}>
        <div
          className="container"
          style={{ maxWidth: "1280px", margin: "0 auto" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "2rem",
                }}
              >
                🎯 Our Mission
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                }}
              >
                To revolutionize security and technology solutions across Canada
                by delivering cutting-edge systems that protect businesses,
                enhance operations, and drive digital transformation. We are
                committed to excellence, innovation, and building lasting
                partnerships with our clients.
              </p>

              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  background: "linear-gradient(135deg, #7c3aed, #00f5ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "2rem",
                }}
              >
                🌟 Our Vision
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: 1.7,
                }}
              >
                To become Canada&apos;s most trusted technology partner, known
                for innovative security solutions, exceptional service, and
                transformative digital experiences that empower businesses to
                thrive in an increasingly connected world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop&auto=format"
                alt="Team collaboration"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section
        style={{
          padding: "4rem 2rem",
          background: "rgba(255, 255, 255, 0.02)",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1280px", margin: "0 auto" }}
        >
          <motion.h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              textAlign: "center",
              background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "3rem",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            💎 Our Core Values
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(0, 245, 255, 0.2)",
                  borderRadius: "20px",
                  padding: "2rem",
                  textAlign: "center",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "#00f5ff",
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1rem",
                  }}
                >
                  {value.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "#00f5ff",
                    marginBottom: "1rem",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: 1.6,
                  }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: "4rem 2rem" }}>
        <div
          className="container"
          style={{ maxWidth: "1280px", margin: "0 auto" }}
        >
          <motion.h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              textAlign: "center",
              background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "3rem",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            👥 Meet Our Team
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(0, 245, 255, 0.2)",
                  borderRadius: "24px",
                  padding: "2rem",
                  textAlign: "center",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "#00f5ff",
                }}
              >
                <motion.div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: "0 auto 1.5rem",
                    border: "3px solid #00f5ff",
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </motion.div>

                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "#00f5ff",
                    marginBottom: "0.5rem",
                  }}
                >
                  {member.name}
                </h3>

                <p
                  style={{
                    color: "#7c3aed",
                    fontWeight: "500",
                    marginBottom: "1rem",
                  }}
                >
                  {member.role}
                </p>

                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                    marginBottom: "1.5rem",
                  }}
                >
                  {member.bio}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  {member.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      style={{
                        background: "rgba(124, 58, 237, 0.2)",
                        color: "#7c3aed",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "12px",
                        fontSize: "0.75rem",
                        fontWeight: "500",
                      }}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1rem",
                  }}
                >
                  <motion.a
                    href={member.social.linkedin}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "rgba(0, 119, 181, 0.2)",
                      border: "1px solid rgba(0, 119, 181, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      fontSize: "1.2rem",
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    💼
                  </motion.a>
                  <motion.a
                    href={member.social.twitter}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "rgba(29, 161, 242, 0.2)",
                      border: "1px solid rgba(29, 161, 242, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      fontSize: "1.2rem",
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    🐦
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.social.email}`}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "rgba(0, 245, 255, 0.2)",
                      border: "1px solid rgba(0, 245, 255, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      fontSize: "1.2rem",
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    📧
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        style={{
          padding: "4rem 2rem",
          background: "rgba(255, 255, 255, 0.02)",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1280px", margin: "0 auto" }}
        >
          <motion.h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              textAlign: "center",
              background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "3rem",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            🚀 Our Journey
          </motion.h2>

          <div
            style={{
              display: "grid",
              gap: "2rem",
            }}
          >
            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    index % 2 === 0 ? "1fr auto 1fr" : "1fr auto 1fr",
                  gap: "2rem",
                  alignItems: "center",
                }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {index % 2 === 0 ? (
                  <>
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(0, 245, 255, 0.2)",
                        borderRadius: "20px",
                        padding: "2rem",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                      }}
                    >
                      <h3
                        style={{
                          color: "#00f5ff",
                          fontSize: "1.5rem",
                          marginBottom: "1rem",
                        }}
                      >
                        {event.title}
                      </h3>
                      <p
                        style={{
                          color: "rgba(255, 255, 255, 0.8)",
                          lineHeight: 1.6,
                        }}
                      >
                        {event.description}
                      </p>
                    </div>
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        fontWeight: "700",
                        color: "white",
                        boxShadow: "0 0 30px rgba(0, 245, 255, 0.5)",
                      }}
                    >
                      {event.year}
                    </div>
                    <div
                      style={{
                        borderRadius: "16px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      style={{
                        borderRadius: "16px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #7c3aed, #00f5ff)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        fontWeight: "700",
                        color: "white",
                        boxShadow: "0 0 30px rgba(124, 58, 237, 0.5)",
                      }}
                    >
                      {event.year}
                    </div>
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(124, 58, 237, 0.2)",
                        borderRadius: "20px",
                        padding: "2rem",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                      }}
                    >
                      <h3
                        style={{
                          color: "#7c3aed",
                          fontSize: "1.5rem",
                          marginBottom: "1rem",
                        }}
                      >
                        {event.title}
                      </h3>
                      <p
                        style={{
                          color: "rgba(255, 255, 255, 0.8)",
                          lineHeight: 1.6,
                        }}
                      >
                        {event.description}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          background: `
          linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(124, 58, 237, 0.1)),
          radial-gradient(circle at 50% 50%, rgba(0, 245, 255, 0.1) 0%, transparent 50%)
        `,
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
            Ready to Work With Us?
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
            Join hundreds of satisfied clients who trust AK Vision Systems for
            their security and technology needs. Let&apos;s discuss your project
            today.
          </motion.p>

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
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 245, 255, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            🤝 Get In Touch
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AdvancedAbout;
