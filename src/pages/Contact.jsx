import AdvancedContactForm from "../components/AdvancedContactForm";

function Contact() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #0a0f1c 0%, #1a2347 50%, #0a0f1c 100%)",
        minHeight: "100vh",
        paddingTop: "100px",
      }}
    >
      <AdvancedContactForm />
    </div>
  );
}

export default Contact;
