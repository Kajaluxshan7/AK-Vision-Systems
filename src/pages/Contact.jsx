import ContactForm from "../components/ContactForm";

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
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
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
            fontSize: "2rem",
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627974202171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8b3c1b1a1b!2sAK%20Vision%20Systems!5e0!3m2!1sen!2sus!4v1691155200000!5m2!1sen!2sus"
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
