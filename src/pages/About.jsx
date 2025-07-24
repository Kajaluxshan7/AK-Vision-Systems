import { Link } from "react-router-dom";

function About() {
  const values = [
    {
      icon: "🎯",
      title: "Innovation",
      description:
        "We stay ahead of technology trends to provide cutting-edge solutions that give our clients a competitive advantage in their markets.",
    },
    {
      icon: "🤝",
      title: "Reliability",
      description:
        "Our commitment to quality and 24/7 support ensures your systems work when you need them most, building trust with every project.",
    },
    {
      icon: "🇨🇦",
      title: "Local Expertise",
      description:
        "Deep understanding of Canadian business needs, regulations, and market dynamics helps us deliver perfectly tailored solutions.",
    },
    {
      icon: "⚡",
      title: "Efficiency",
      description:
        "Streamlined processes and rapid deployment minimize downtime and get your systems operational quickly and effectively.",
    },
    {
      icon: "🛡️",
      title: "Security First",
      description:
        "Every solution is designed with security as a priority, protecting your business data and maintaining customer trust.",
    },
    {
      icon: "💡",
      title: "Customer Focus",
      description:
        "We listen to your unique needs and create customized solutions that align perfectly with your business objectives and budget.",
    },
  ];

  const team = [
    {
      name: "Technical Excellence",
      role: "Our certified technicians bring years of experience in security systems, audio-visual technology, and digital infrastructure.",
    },
    {
      name: "Marketing Expertise",
      role: "Our digital marketing specialists understand the Canadian market and create strategies that drive real business results.",
    },
    {
      name: "Customer Support",
      role: "Our dedicated support team provides 24/7 assistance, ensuring your systems and campaigns perform optimally at all times.",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content about-hero">
            <h1>About AK Vision Systems</h1>
            <p>
              Leading provider of integrated technology and marketing solutions,
              empowering Canadian businesses to thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 style={{ color: "#1e3a8a", marginBottom: "1.5rem" }}>
                Our Story
              </h2>
              <p>
                Founded with a vision to bridge the gap between traditional
                business operations and modern technology, AK Vision Systems has
                become a trusted partner for businesses across Canada. We
                recognized that many companies struggle to navigate the complex
                world of security technology and digital marketing.
              </p>
              <p>
                Our journey began with a simple mission: to provide
                comprehensive, reliable, and innovative solutions that help
                businesses protect their assets, enhance their operations, and
                reach their target audiences effectively.
              </p>
              <p>
                Today, we proudly serve hundreds of clients across Canada, from
                small local businesses to large commercial enterprises,
                delivering results that exceed expectations and building lasting
                partnerships based on trust and excellence.
              </p>
            </div>
            <div className="about-image">
              <div className="placeholder-image">
                <span className="placeholder-icon">🏢</span>
                <p>AK Vision Systems Office</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <div className="placeholder-image">
                <span className="placeholder-icon">🎯</span>
                <p>Our Mission & Vision</p>
              </div>
            </div>
            <div className="about-text">
              <h2 style={{ color: "#1e3a8a", marginBottom: "1.5rem" }}>
                Mission & Vision
              </h2>
              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ color: "#3b82f6", marginBottom: "1rem" }}>
                  Our Mission
                </h3>
                <p>
                  To empower Canadian businesses with cutting-edge technology
                  solutions and strategic marketing services that enhance
                  security, improve operations, and drive sustainable growth in
                  the digital economy.
                </p>
              </div>
              <div>
                <h3 style={{ color: "#3b82f6", marginBottom: "1rem" }}>
                  Our Vision
                </h3>
                <p>
                  To be Canada's most trusted technology and marketing solutions
                  provider, known for innovation, reliability, and exceptional
                  customer service that transforms how businesses operate and
                  connect with their customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            These fundamental principles guide everything we do and shape how we
            serve our clients.
          </p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-subtitle">
            Our diverse team of professionals brings together technical
            expertise, creative marketing insights, and exceptional customer
            service.
          </p>
          <div className="services-grid">
            {team.map((member, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <span>{index === 0 ? "🔧" : index === 1 ? "📈" : "🛟"}</span>
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Serving All of Canada</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                AK Vision Systems proudly serves businesses across all Canadian
                provinces and territories. Our network of certified technicians
                and digital marketing specialists ensures that wherever you are
                in Canada, you receive the same high-quality service and
                support.
              </p>
              <h3 style={{ color: "#1e3a8a", margin: "2rem 0 1rem" }}>
                Key Service Areas:
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ padding: "0.5rem 0", color: "#4b5563" }}>
                  🏙️ Major Metropolitan Areas
                </li>
                <li style={{ padding: "0.5rem 0", color: "#4b5563" }}>
                  🏘️ Suburban Business Districts
                </li>
                <li style={{ padding: "0.5rem 0", color: "#4b5563" }}>
                  🏭 Industrial Complexes
                </li>
                <li style={{ padding: "0.5rem 0", color: "#4b5563" }}>
                  🍽️ Restaurant & Hospitality
                </li>
                <li style={{ padding: "0.5rem 0", color: "#4b5563" }}>
                  🏢 Corporate Offices
                </li>
                <li style={{ padding: "0.5rem 0", color: "#4b5563" }}>
                  🏪 Retail Establishments
                </li>
              </ul>
            </div>
            <div className="about-image">
              <div className="placeholder-image">
                <span className="placeholder-icon">🇨🇦</span>
                <p>Serving All Canada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero" style={{ padding: "4rem 0" }}>
        <div className="container">
          <div className="hero-content">
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              Ready to Work Together?
            </h2>
            <p>
              Let's discuss how AK Vision Systems can help transform your
              business with our comprehensive technology and marketing
              solutions.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <Link to="/services" className="btn btn-secondary">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
