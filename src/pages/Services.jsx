import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Services() {
  const [activeService, setActiveService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const services = [
    {
      id: "cctv",
      icon: "Security",
      title: "CCTV & Security Systems",
      subtitle: "Professional Surveillance Solutions",
      category: "security",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
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
    },
    {
      id: "audio-video",
      icon: "Audio/Video",
      title: "Commercial Audio Video Installation",
      subtitle: "Professional AV Solutions",
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
    },
    {
      id: "digital-marketing",
      icon: "Marketing",
      title: "Digital Marketing Services",
      subtitle: "Complete Online Presence Management",
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
    },
    {
      id: "social-media",
      icon: "Social Media",
      title: "Social Media Management",
      subtitle: "Strategic Social Presence",
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
        "Competitive Advantage",
      ],
    },
    {
      id: "food-ordering",
      icon: "Technology",
      title: "Online Food Ordering Systems",
      subtitle: "Restaurant Technology Solutions",
      description:
        "Custom online food ordering system platforms and delivery management systems designed specifically for Canadian restaurants and food businesses.",
      features: [
        "Custom Ordering Website",
        "Mobile App Development",
        "Menu Management System",
        "Order Tracking & Notifications",
        "Payment Gateway Integration",
        "Delivery Management",
        "Customer Database",
        "Analytics Dashboard",
      ],
      benefits: [
        "Increased Revenue",
        "Reduced Third-Party Fees",
        "Better Customer Data",
        "Streamlined Operations",
        "Enhanced Customer Experience",
      ],
    },
    {
      id: "marketing-strategy",
      icon: "Strategy",
      title: "Brand Strategy & Marketing",
      subtitle: "Comprehensive Marketing Solutions",
      description:
        "Complete marketing services from brand development to campaign execution, tailored for the Canadian market.",
      features: [
        "Brand Identity Development",
        "Marketing Strategy Planning",
        "Graphic Design Services",
        "Website Development",
        "Print Marketing Materials",
        "Event Marketing",
        "Public Relations",
        "Market Research",
      ],
      benefits: [
        "Strong Brand Identity",
        "Market Positioning",
        "Customer Loyalty",
        "Business Growth",
        "Competitive Edge",
      ],
    },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Professional Services</h1>
            <p>
              Comprehensive technology and marketing solutions designed to help
              Canadian businesses thrive in today's digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="section">
        <div className="container">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-detail ${index % 2 === 1 ? "reverse" : ""}`}
            >
              <div className="service-content">
                <div className="service-header">
                  <div className="service-icon large">
                    <span>{service.icon}</span>
                  </div>
                  <div>
                    <h2>{service.title}</h2>
                    <p className="service-subtitle">{service.subtitle}</p>
                  </div>
                </div>

                <p className="service-description">{service.description}</p>

                <div className="service-lists">
                  <div className="features-list">
                    <h4>🔧 What We Offer:</h4>
                    <ul>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="benefits-list">
                    <h4>✅ Benefits:</h4>
                    <ul>
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="service-cta">
                  <Link to="/contact" className="btn btn-primary">
                    Get Quote for {service.title}
                  </Link>
                </div>
              </div>

              <div className="service-image">
                <div className="placeholder-image">
                  <span className="placeholder-icon">{service.icon}</span>
                  <p>Professional {service.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Process */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <h2 className="section-title">Our Service Process</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>
                We assess your needs and provide a customized solution plan.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>Detailed project planning and timeline development.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Implementation</h3>
              <p>Professional installation and setup by our expert team.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Support</h3>
              <p>Ongoing maintenance and 24/7 support services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero" style={{ padding: "4rem 0" }}>
        <div className="container">
          <div className="hero-content">
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              Ready to Get Started?
            </h2>
            <p>
              Contact us today for a free consultation and quote. Our team is
              ready to help you implement the perfect solution for your business
              needs.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Schedule Free Consultation
              </Link>
              <a href="tel:+1-416-508-4636" className="btn btn-secondary">
                Call: +1 416-508-4636
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
