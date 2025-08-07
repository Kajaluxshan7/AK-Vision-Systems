import { motion } from "framer-motion";
import {
  FaTasks,
  FaBolt,
  FaHeadset,
  FaStar,
  FaShieldAlt,
  FaRocket,
  FaHandshake,
  FaGem,
  FaSatelliteDish,
} from "react-icons/fa";
import SEO from "../components/SEO";

const AdvancedAbout = () => {
  const stats = [
    {
      number: "3000+",
      label: "Projects Completed",
      icon: <FaTasks style={{ color: "#00f5ff", fontSize: "2.2rem" }} />,
      description: "Successfully delivered projects across Canada",
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      icon: <FaBolt style={{ color: "#00f5ff", fontSize: "2.2rem" }} />,
      description: "Industry-leading system reliability",
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <FaHeadset style={{ color: "#00f5ff", fontSize: "2.2rem" }} />,
      description: "Round-the-clock technical assistance",
    },
    {
      number: "4.8★",
      label: "Customer Rating",
      icon: <FaStar style={{ color: "#00f5ff", fontSize: "2.2rem" }} />,
      description: "Consistently excellent service reviews",
    },
  ];

  const team = [
    {
      name: "Jana",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format",
      bio: "Over 9 years of experience in CCTV installation and commercial, residential audio & video system installation and management.",
      specialties: [
        "CCTV Installation",
        "Commercial, Residential Audio & Video Systems",
      ],
      social: {
        email: "akvisionsystems@gmail.com",
      },
    },
  ];

  const values = [
    {
      icon: <FaShieldAlt style={{ color: "#00f5ff", fontSize: "2rem" }} />,
      title: "Security First",
      description:
        "We prioritize the safety and protection of our clients above all else, implementing industry-leading security protocols.",
    },
    {
      icon: <FaRocket style={{ color: "#7c3aed", fontSize: "2rem" }} />,
      title: "Innovation",
      description:
        "Constantly evolving with cutting-edge technology to provide the most advanced solutions available.",
    },
    {
      icon: <FaHandshake style={{ color: "#10b981", fontSize: "2rem" }} />,
      title: "Reliability",
      description:
        "Our clients depend on us for consistent, high-quality service and support they can trust.",
    },
    {
      icon: <FaGem style={{ color: "#00f5ff", fontSize: "2rem" }} />,
      title: "Excellence",
      description:
        "We strive for excellence in every project, delivering results that exceed expectations.",
    },
  ];

  const timeline = [
    {
      year: "2017",
      title: "CCTV Installation & Maintenance",
      description:
        "Began offering reliable CCTV installation and maintenance services, ensuring safety and security for both commercial and residential clients.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop&auto=format", // Security camera closeup
    },
    {
      year: "2020",
      title: "Audio & Video System Maintenance",
      description:
        "Expanded services to include maintenance of commercial and residential audio and video systems, enhancing client media infrastructure reliability.",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=400&fit=crop&auto=format", // Audio mixing console
    },
    {
      year: "2023",
      title: "Audio & Video Installation & Management",
      description:
        "Launched full-scale installation and management solutions for audio and video systems across commercial and residential sectors.",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop&auto=format", // Home theater setup
    },
    {
      year: "2025",
      title: "Digital Marketing Services",
      description:
        "Entered the digital marketing space, offering strategic online branding, SEO, and media solutions to help businesses grow their digital presence.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&auto=format", // Digital marketing workspace
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
      <SEO
        title="About Us - Professional Security & Technology Experts"
        description="Learn about AK Vision Systems, Canada's leading provider of AI-powered CCTV systems and technology solutions. Over 9 years of experience serving 3000+ clients with 99.9% uptime guarantee and 24/7 support."
        keywords="AK Vision Systems about, security company Canada, CCTV installation experts, technology solutions provider, Jana founder CEO, security professionals"
        url="https://akvisionsystems.com/about"
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
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <FaTasks style={{ color: "#00f5ff", fontSize: "2.5rem" }} />
              <span>About AK Vision Systems</span>
            </span>
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
                <FaRocket
                  style={{
                    color: "#00f5ff",
                    fontSize: "2rem",
                    marginRight: "0.5rem",
                  }}
                />{" "}
                Our Mission
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
                <FaStar
                  style={{
                    color: "#7c3aed",
                    fontSize: "2rem",
                    marginRight: "0.5rem",
                  }}
                />{" "}
                Our Vision
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
            <FaGem
              style={{
                color: "#00f5ff",
                fontSize: "2rem",
                marginRight: "0.5rem",
              }}
            />{" "}
            Our Core Values
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
            <FaHandshake
              style={{
                color: "#10b981",
                fontSize: "2rem",
                marginRight: "0.5rem",
              }}
            />{" "}
            Meet Our Team
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
                    <FaHandshake
                      style={{ color: "#0077b5", fontSize: "1.2rem" }}
                    />
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
                    <FaBolt style={{ color: "#1da1f2", fontSize: "1.2rem" }} />
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
                    <FaHeadset
                      style={{ color: "#00f5ff", fontSize: "1.2rem" }}
                    />
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
            <FaSatelliteDish
              style={{
                color: "#00f5ff",
                fontSize: "2rem",
                marginRight: "0.5rem",
              }}
            />{" "}
            Our Journey
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
            <FaHandshake style={{ color: "#10b981", fontSize: "1.2rem" }} /> Get
            In Touch
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AdvancedAbout;
