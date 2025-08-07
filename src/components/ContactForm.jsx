import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaMusic,
  FaMobileAlt,
  FaGlobe,
  FaLightbulb,
} from "react-icons/fa";
import {
  MdOutlineEmergency,
  MdOutlineAccessTime,
  MdOutlineFlashOn,
  MdOutlineAssignment,
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineBusiness,
  MdOutlineArrowForward,
  MdOutlineGpsFixed,
  MdOutlineChat,
  MdOutlineArrowBack,
  MdOutlinePerson,
} from "react-icons/md";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    urgency: "medium",
    budget: "",
    timeline: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const formRef = useRef(null);

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    }

    if (step === 2) {
      if (!formData.service) newErrors.service = "Please select a service";
      if (!formData.message.trim()) newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(2)) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
          urgency: "medium",
          budget: "",
          timeline: "",
        });
        setCurrentStep(1);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const services = [
    {
      value: "cctv",
      label: (
        <>
          <FaShieldAlt /> CCTV & Security Systems
        </>
      ),
      desc: "Professional surveillance solutions",
    },
    {
      value: "audio-video",
      label: (
        <>
          <FaMusic /> Audio Video Installation
        </>
      ),
      desc: "Commercial AV systems",
    },
    {
      value: "digital-marketing",
      label: (
        <>
          <FaMobileAlt /> Digital Marketing
        </>
      ),
      desc: "Online presence management",
    },
    {
      value: "social-media",
      label: (
        <>
          <FaMobileAlt /> Social Media Management
        </>
      ),
      desc: "Strategic social presence",
    },
    {
      value: "web-development",
      label: (
        <>
          <FaGlobe /> Web Development
        </>
      ),
      desc: "Custom website solutions",
    },
    {
      value: "consultation",
      label: (
        <>
          <FaLightbulb /> Consultation
        </>
      ),
      desc: "Expert advice and planning",
    },
  ];

  const urgencyLevels = [
    {
      value: "low",
      label: (
        <>
          <MdOutlineAccessTime /> Standard
        </>
      ),
      desc: "Response within 48 hours",
      color: "#00d084",
    },
    {
      value: "medium",
      label: (
        <>
          <MdOutlineFlashOn /> Urgent
        </>
      ),
      desc: "Response within 24 hours",
      color: "#ffb800",
    },
    {
      value: "high",
      label: (
        <>
          <MdOutlineEmergency /> Emergency
        </>
      ),
      desc: "Response within 4 hours",
      color: "#ff4757",
    },
  ];

  if (submitted) {
    return (
      <motion.div
        style={{
          background: "rgba(0, 208, 132, 0.1)",
          border: "1px solid #00d084",
          borderRadius: "20px",
          padding: "3rem",
          textAlign: "center",
          maxWidth: "500px",
          margin: "2rem auto",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          style={{ fontSize: "4rem", marginBottom: "1rem" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          ✅
        </motion.div>
        <h3 style={{ color: "#00d084", marginBottom: "1rem" }}>Thank You!</h3>
        <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
          Your message has been sent successfully. We&apos;ll get back to you
          soon!
        </p>
        <motion.button
          onClick={() => setSubmitted(false)}
          style={{
            background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
            color: "white",
            border: "none",
            padding: "0.75rem 2rem",
            borderRadius: "25px",
            marginTop: "2rem",
            cursor: "pointer",
            fontWeight: "600",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Another Message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={formRef}
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(0, 245, 255, 0.2)",
        borderRadius: "24px",
        padding: "2rem",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        maxWidth: "800px",
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
          radial-gradient(circle at 20% 20%, rgba(0, 245, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)
        `,
          pointerEvents: "none",
        }}
      />

      {/* Step Indicator */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        {[1, 2].map((step) => (
          <div key={step} style={{ display: "flex", alignItems: "center" }}>
            <motion.div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background:
                  currentStep >= step
                    ? "linear-gradient(135deg, #00f5ff, #7c3aed)"
                    : "rgba(255, 255, 255, 0.1)",
                border:
                  "2px solid " +
                  (currentStep >= step
                    ? "#00f5ff"
                    : "rgba(255, 255, 255, 0.2)"),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
              animate={{
                scale: currentStep === step ? 1.1 : 1,
                boxShadow:
                  currentStep === step
                    ? "0 0 20px rgba(0, 245, 255, 0.5)"
                    : "0 0 0px transparent",
              }}
              transition={{ duration: 0.3 }}
            >
              {currentStep > step ? "✓" : step}
            </motion.div>
            {step < 2 && (
              <div
                style={{
                  width: "60px",
                  height: "2px",
                  background:
                    currentStep > step
                      ? "linear-gradient(90deg, #00f5ff, #7c3aed)"
                      : "rgba(255, 255, 255, 0.2)",
                  margin: "0 1rem",
                }}
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={{ position: "relative", zIndex: 2 }}>
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3
                style={{
                  textAlign: "center",
                  marginBottom: "2rem",
                  background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <MdOutlineAssignment /> Personal Information
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                {/* Name Field */}
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      color: "#00f5ff",
                      fontWeight: "500",
                    }}
                  >
                    <MdOutlinePerson /> Full Name *
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "1rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: `2px solid ${
                        errors.name ? "#ff4757" : "rgba(0, 245, 255, 0.3)"
                      }`,
                      borderRadius: "12px",
                      color: "white",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "all 0.3s ease",
                    }}
                    whileFocus={{
                      borderColor: "#00f5ff",
                      boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)",
                    }}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <motion.p
                      style={{
                        color: "#ff4757",
                        fontSize: "0.875rem",
                        marginTop: "0.5rem",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      color: "#00f5ff",
                      fontWeight: "500",
                    }}
                  >
                    <MdOutlineEmail /> Email Address *
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "1rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: `2px solid ${
                        errors.email ? "#ff4757" : "rgba(0, 245, 255, 0.3)"
                      }`,
                      borderRadius: "12px",
                      color: "white",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "all 0.3s ease",
                    }}
                    whileFocus={{
                      borderColor: "#00f5ff",
                      boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)",
                    }}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <motion.p
                      style={{
                        color: "#ff4757",
                        fontSize: "0.875rem",
                        marginTop: "0.5rem",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      color: "#00f5ff",
                      fontWeight: "500",
                    }}
                  >
                    <MdOutlinePhone /> Phone Number *
                  </label>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "1rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: `2px solid ${
                        errors.phone ? "#ff4757" : "rgba(0, 245, 255, 0.3)"
                      }`,
                      borderRadius: "12px",
                      color: "white",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "all 0.3s ease",
                    }}
                    whileFocus={{
                      borderColor: "#00f5ff",
                      boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)",
                    }}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <motion.p
                      style={{
                        color: "#ff4757",
                        fontSize: "0.875rem",
                        marginTop: "0.5rem",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </div>

                {/* Company Field */}
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      color: "#00f5ff",
                      fontWeight: "500",
                    }}
                  >
                    <MdOutlineBusiness /> Company (Optional)
                  </label>
                  <motion.input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "1rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "2px solid rgba(0, 245, 255, 0.3)",
                      borderRadius: "12px",
                      color: "white",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "all 0.3s ease",
                    }}
                    whileFocus={{
                      borderColor: "#00f5ff",
                      boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)",
                    }}
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <motion.button
                  type="button"
                  onClick={nextStep}
                  style={{
                    background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
                    color: "white",
                    border: "none",
                    padding: "1rem 2rem",
                    borderRadius: "25px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Next Step <MdOutlineArrowForward />
                </motion.button>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3
                style={{
                  textAlign: "center",
                  marginBottom: "2rem",
                  background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <MdOutlineChat /> Project Details
              </h3>

              {/* Service Selection */}
              <div style={{ marginBottom: "2rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "1rem",
                    color: "#00f5ff",
                    fontWeight: "500",
                  }}
                >
                  <MdOutlineGpsFixed /> Select Service *
                </label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {services.map((service) => (
                    <motion.div
                      key={service.value}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          service: service.value,
                        }))
                      }
                      style={{
                        padding: "1rem",
                        background:
                          formData.service === service.value
                            ? "rgba(0, 245, 255, 0.1)"
                            : "rgba(255, 255, 255, 0.05)",
                        border: `2px solid ${
                          formData.service === service.value
                            ? "#00f5ff"
                            : errors.service
                            ? "#ff4757"
                            : "rgba(0, 245, 255, 0.3)"
                        }`,
                        borderRadius: "12px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        style={{ fontWeight: "600", marginBottom: "0.5rem" }}
                      >
                        {service.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.875rem",
                          color: "rgba(255, 255, 255, 0.7)",
                        }}
                      >
                        {service.desc}
                      </div>
                    </motion.div>
                  ))}
                </div>
                {errors.service && (
                  <motion.p
                    style={{
                      color: "#ff4757",
                      fontSize: "0.875rem",
                      marginTop: "0.5rem",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {errors.service}
                  </motion.p>
                )}
              </div>

              {/* Urgency Level */}
              <div style={{ marginBottom: "2rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "1rem",
                    color: "#00f5ff",
                    fontWeight: "500",
                  }}
                >
                  <MdOutlineFlashOn /> Priority Level
                </label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {urgencyLevels.map((urgency) => (
                    <motion.div
                      key={urgency.value}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          urgency: urgency.value,
                        }))
                      }
                      style={{
                        padding: "1rem",
                        background:
                          formData.urgency === urgency.value
                            ? `rgba(${
                                urgency.color === "#00d084"
                                  ? "0, 208, 132"
                                  : urgency.color === "#ffb800"
                                  ? "255, 184, 0"
                                  : "255, 71, 87"
                              }, 0.1)`
                            : "rgba(255, 255, 255, 0.05)",
                        border: `2px solid ${
                          formData.urgency === urgency.value
                            ? urgency.color
                            : "rgba(255, 255, 255, 0.2)"
                        }`,
                        borderRadius: "12px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        textAlign: "center",
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        style={{
                          fontWeight: "600",
                          marginBottom: "0.5rem",
                          color: urgency.color,
                        }}
                      >
                        {urgency.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.875rem",
                          color: "rgba(255, 255, 255, 0.7)",
                        }}
                      >
                        {urgency.desc}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Message Field */}
              <div style={{ marginBottom: "2rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "#00f5ff",
                    fontWeight: "500",
                  }}
                >
                  <MdOutlineChat /> Project Details *
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  style={{
                    width: "100%",
                    padding: "1rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: `2px solid ${
                      errors.message ? "#ff4757" : "rgba(0, 245, 255, 0.3)"
                    }`,
                    borderRadius: "12px",
                    color: "white",
                    fontSize: "1rem",
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "inherit",
                    transition: "all 0.3s ease",
                  }}
                  whileFocus={{
                    borderColor: "#00f5ff",
                    boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)",
                  }}
                  placeholder="Please describe your project requirements, timeline, and any specific needs..."
                />
                {errors.message && (
                  <motion.p
                    style={{
                      color: "#ff4757",
                      fontSize: "0.875rem",
                      marginTop: "0.5rem",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <motion.button
                  type="button"
                  onClick={prevStep}
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    padding: "1rem 2rem",
                    borderRadius: "25px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MdOutlineArrowBack /> Previous
                </motion.button>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: isSubmitting
                      ? "rgba(255, 255, 255, 0.1)"
                      : "linear-gradient(135deg, #00f5ff, #7c3aed)",
                    color: "white",
                    border: "none",
                    padding: "1rem 2rem",
                    borderRadius: "25px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        style={{
                          width: "20px",
                          height: "20px",
                          border: "2px solid transparent",
                          borderTop: "2px solid white",
                          borderRadius: "50%",
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};

export default ContactForm;
