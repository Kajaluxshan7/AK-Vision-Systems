import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    urgency: "medium",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      // First check if response is ok before trying to parse JSON
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server response:', response.status, errorText);
        throw new Error(`Server error: ${response.status}. Please try again later.`);
      }

      // Only try to parse JSON if response is ok
      await response.json();

      setSubmitted(true);
      setSubmitMessage("Thank you! Your message has been sent successfully. We'll get back to you within 2 hours during business hours.");
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setSubmitMessage("");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
          urgency: "medium",
        });
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage(`Error: ${error.message || 'Failed to send message'}. Please try again or contact us directly.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "CCTV & Security Systems",
    "Commercial Audio Video Installation",
    "Digital Marketing Services",
    "Social Media Management",
    "Online Food Ordering Systems",
    "Brand Strategy & Marketing",
    "Consultation & Assessment",
    "Other",
  ];

  const contactInfo = [
    {
      icon: "📞",
      title: "Call Us",
      info: "+1 (XXX) XXX-XXXX",
      description: "Mon-Fri 8AM-6PM, Weekend Emergency Support",
    },
    {
      icon: "📧",
      title: "Email Us",
      info: "info@akvision.ca",
      description: "We respond within 2 hours during business hours",
    },
    {
      icon: "📍",
      title: "Service Area",
      info: "All of Canada",
      description: "Serving businesses coast to coast",
    },
    {
      icon: "⏰",
      title: "Response Time",
      info: "Same Day",
      description: "Emergency support available 24/7",
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content contact-hero">
            <h1>Get Your Free Consultation</h1>
            <p>
              Ready to transform your business with professional technology and
              marketing solutions? Contact AK Vision Systems today for a
              customized quote and expert consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form">
              <h2 style={{ color: "#1e3a8a", marginBottom: "1.5rem" }}>
                Request Your Free Quote
              </h2>

              {submitted ? (
                <div
                  style={{
                    background: "#d1fae5",
                    color: "#065f46",
                    padding: "2rem",
                    borderRadius: "8px",
                    textAlign: "center",
                    border: "2px solid #10b981",
                  }}
                >
                  <h3>Thank You!</h3>
                  <p>{submitMessage}</p>
                </div>
              ) : submitMessage && !submitted ? (
                <div
                  style={{
                    background: "#fef2f2",
                    color: "#dc2626",
                    padding: "2rem",
                    borderRadius: "8px",
                    textAlign: "center",
                    border: "2px solid #dc2626",
                    marginBottom: "1rem",
                  }}
                >
                  <p>{submitMessage}</p>
                </div>
              ) : null}

              {!submitted && (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">
                      What service are you interested in? *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="urgency">Project Timeline</label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                    >
                      <option value="urgent">Urgent (Within 1 week)</option>
                      <option value="high">High Priority (2-4 weeks)</option>
                      <option value="medium">Standard (1-2 months)</option>
                      <option value="low">Flexible (Planning phase)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Please describe your project requirements, location, and any specific needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message & Get Free Quote"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="contact-info">
              <h2 style={{ color: "#1e3a8a", marginBottom: "1.5rem" }}>
                Contact Information
              </h2>

              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    <span>{item.icon}</span>
                  </div>
                  <div className="contact-details">
                    <h4>{item.title}</h4>
                    <p style={{ fontWeight: "600", color: "#1e3a8a" }}>
                      {item.info}
                    </p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}

              <div
                style={{
                  marginTop: "2rem",
                  padding: "1.5rem",
                  background: "white",
                  borderRadius: "8px",
                  border: "2px solid #fbbf24",
                }}
              >
                <h4 style={{ color: "#1e3a8a", marginBottom: "1rem" }}>
                  🚨 Emergency Support
                </h4>
                <p style={{ color: "#4b5563", marginBottom: "0.5rem" }}>
                  Security system down? Critical marketing campaign issue?
                </p>
                <p style={{ color: "#4b5563", fontWeight: "600" }}>
                  Call our 24/7 emergency line: +1 (XXX) XXX-XXXX
                </p>
              </div>

              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1.5rem",
                  background: "white",
                  borderRadius: "8px",
                }}
              >
                <h4 style={{ color: "#1e3a8a", marginBottom: "1rem" }}>
                  💼 What to Expect
                </h4>
                <ul style={{ listStyle: "none", padding: 0, color: "#4b5563" }}>
                  <li style={{ padding: "0.3rem 0" }}>
                    ✓ Free consultation and assessment
                  </li>
                  <li style={{ padding: "0.3rem 0" }}>
                    ✓ Detailed project proposal
                  </li>
                  <li style={{ padding: "0.3rem 0" }}>✓ Transparent pricing</li>
                  <li style={{ padding: "0.3rem 0" }}>
                    ✓ Professional installation/setup
                  </li>
                  <li style={{ padding: "0.3rem 0" }}>
                    ✓ Ongoing support and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <h2 className="section-title">We Serve All of Canada</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏙️</div>
              <h3>Major Cities</h3>
              <p>
                Toronto, Vancouver, Montreal, Calgary, Ottawa, Edmonton,
                Winnipeg, and all major metropolitan areas across Canada.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏘️</div>
              <h3>Suburban Areas</h3>
              <p>
                Complete coverage of suburban business districts and residential
                commercial areas in all provinces.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏞️</div>
              <h3>Remote Locations</h3>
              <p>
                Specialized solutions for remote locations with satellite
                internet and advanced remote monitoring capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>How quickly can you respond?</h3>
              <p>
                We provide same-day consultations for urgent requests and
                typically begin projects within 1-2 weeks of approval.
              </p>
            </div>
            <div className="service-card">
              <h3>Do you provide warranties?</h3>
              <p>
                Yes! All installations come with comprehensive warranties, and
                our digital marketing services include performance guarantees.
              </p>
            </div>
            <div className="service-card">
              <h3>What about ongoing support?</h3>
              <p>
                We offer 24/7 technical support, regular maintenance, and
                continuous optimization for all our services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
