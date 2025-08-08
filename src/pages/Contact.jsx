import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";

function Contact() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #0a0f1c 0%, #1a2347 50%, #0a0f1c 100%)",
        minHeight: "100vh",
        paddingTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      <SEO
        title="Contact Us - Get Free Consultation"
        description="Contact AK Vision Systems for professional CCTV installation, security solutions, and technology services. Get a free consultation and quote. Available 24/7 across Canada with expert support and installation."
        keywords="contact AK Vision Systems, free consultation, CCTV quote, security installation, technology support Canada, akvisionsystems@gmail.com"
        url="https://akvisionsystems.com/contact"
      />

      {/* Contact Form Section */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
          padding: "2rem 1.5rem",
          marginBottom: "2rem",
          backdropFilter: "blur(4px)",
        }}
      >
        <h2
          style={{
            color: "#00f5ff",
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            fontWeight: "700",
            marginBottom: "1.5rem",
            textAlign: "center",
            letterSpacing: "1px",
          }}
        >
          Get in Touch
        </h2>
        <ContactForm />
      </div>

      {/* Full-Width Map Section */}
      <div
        style={{
          width: "100%",
          maxWidth: "1440px",
          height: "350px",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
          marginBottom: "2rem",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368905.42652764096!2d-79.34315!3d43.75056744999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d107e9e813dd%3A0x66fb6dbb5501c0a3!2sAK%20Vision%20Systems!5e0!3m2!1sen!2slk!4v1754672214760!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="AK Vision Systems Location"
        />
      </div>
    </div>
  );
}

export default Contact;
