import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AdvancedHome = () => {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      icon: "📊",
      description: "Successfully delivered across Canada"
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee", 
      icon: "⚡",
      description: "Industry-leading reliability"
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: "🔧",
      description: "Round-the-clock assistance"
    },
    {
      number: "5★",
      label: "Customer Rating",
      icon: "⭐",
      description: "Consistently excellent service"
    }
  ];

  const services = [
    {
      icon: "🛡️",
      title: "CCTV & Security Systems",
      description: "Professional surveillance solutions with HD cameras, remote monitoring, and 24/7 security coverage for commercial and residential properties.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop&crop=center",
      features: ["HD Camera Installation", "Remote Monitoring", "24/7 Support", "Cloud Storage"]
    },
    {
      icon: "📹",
      title: "Commercial Audio Video",
      description: "Complete audio-visual installation and management for businesses, conferences, events, and commercial spaces.",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=250&fit=crop&crop=center",
      features: ["Conference Systems", "Event AV", "Installation", "Maintenance"]
    },
    {
      icon: "📱",
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including SEO, PPC, content marketing, and online brand development.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
      features: ["SEO Optimization", "PPC Campaigns", "Content Marketing", "Analytics"]
    },
    {
      icon: "📲",
      title: "Social Media Management",
      description: "Expert social media handling and marketing across all platforms to boost your online presence and engagement.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=250&fit=crop&crop=center",
      features: ["Content Creation", "Community Management", "Ad Campaigns", "Analytics"]
    },
    {
      icon: "🍽️",
      title: "Online Food Ordering",
      description: "Custom food ordering platforms and management systems to streamline your restaurant's digital operations.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop&crop=center",
      features: ["Custom Platform", "Order Management", "Payment Integration", "Analytics"]
    },
    {
      icon: "🎯",
      title: "Brand Strategy & Marketing",
      description: "Strategic brand development, market analysis, and comprehensive marketing solutions for business growth.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&crop=center",
      features: ["Brand Development", "Market Analysis", "Strategy Planning", "Implementation"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=100&h=100&fit=crop&crop=face",
      text: "AK Vision Systems transformed our security infrastructure. The CCTV installation was flawless and their support is exceptional.",
      rating: 5,
      service: "Security Systems"
    },
    {
      name: "Michael Chen",
      company: "Restaurant Group",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "Their food ordering system increased our online orders by 300%. The platform is user-friendly and reliable.",
      rating: 5,
      service: "Food Ordering System"
    },
    {
      name: "Emily Rodriguez",
      company: "Marketing Agency",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "Outstanding digital marketing results! Our online presence and lead generation improved dramatically.",
      rating: 5,
      service: "Digital Marketing"
    }
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2347 50%, #0a0f1c 100%)',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <section style={{
        padding: '120px 2rem 4rem',
        textAlign: 'center',
        background: `
          radial-gradient(circle at 50% 20%, rgba(0, 245, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 40%, rgba(16, 245, 74, 0.05) 0%, transparent 50%)
        `
      }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #00f5ff 0%, #7c3aed 50%, #10f54a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1.5rem',
              lineHeight: 1.1
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Next-Generation Technology Solutions
          </motion.h1>
          
          <motion.p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '800px',
              margin: '0 auto 3rem',
              lineHeight: 1.6
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            🚀 Transforming businesses across Canada with cutting-edge security systems, 
            digital marketing excellence, and innovative technology solutions that drive growth.
          </motion.p>

          <motion.div
            style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '4rem'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <motion.button
                style={{
                  background: 'linear-gradient(135deg, #00f5ff, #7c3aed)',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2.5rem',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 8px 32px rgba(0, 245, 255, 0.3)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 12px 40px rgba(0, 245, 255, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Get Free Consultation
              </motion.button>
            </Link>

            <Link to="/services" style={{ textDecoration: 'none' }}>
              <motion.button
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '2px solid #00f5ff',
                  padding: '1rem 2.5rem',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  background: 'rgba(0, 245, 255, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                🔧 View Services
              </motion.button>
            </Link>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(0, 245, 255, 0.2)'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=500&fit=crop&auto=format"
              alt="AK Vision Systems - Advanced Technology Solutions"
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover'
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '4rem 2rem',
        background: 'rgba(255, 255, 255, 0.02)'
      }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.h2
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #00f5ff, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '3rem'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            📈 Trusted by Hundreds of Businesses
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(0, 245, 255, 0.2)',
                  borderRadius: '20px',
                  padding: '2rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  borderColor: '#00f5ff',
                  boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)'
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  {stat.icon}
                </div>
                <h3 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#00f5ff',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </h3>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '0.5rem'
                }}>
                  {stat.label}
                </h4>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.9rem'
                }}>
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section style={{ padding: '4rem 2rem' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #00f5ff, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1rem'
            }}>
              🔧 Our Expert Services
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Comprehensive technology solutions designed to transform your business operations
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {services.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.title}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(0, 245, 255, 0.2)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  borderColor: '#00f5ff'
                }}
              >
                <div style={{
                  height: '200px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    width: '60px',
                    height: '60px',
                    background: 'rgba(0, 245, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}>
                    {service.icon}
                  </div>
                </div>

                <div style={{ padding: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: '#00f5ff',
                    marginBottom: '1rem'
                  }}>
                    {service.title}
                  </h3>
                  
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem'
                  }}>
                    {service.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        style={{
                          background: 'rgba(124, 58, 237, 0.2)',
                          color: '#7c3aed',
                          padding: '0.3rem 0.8rem',
                          borderRadius: '15px',
                          fontSize: '0.8rem',
                          fontWeight: '500'
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link to="/services" style={{ textDecoration: 'none' }}>
                    <motion.button
                      style={{
                        background: 'linear-gradient(135deg, #00f5ff, #7c3aed)',
                        color: 'white',
                        border: 'none',
                        padding: '0.8rem 1.5rem',
                        borderRadius: '25px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        width: '100%'
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More →
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            style={{ textAlign: 'center', marginTop: '3rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/services" style={{ textDecoration: 'none' }}>
              <motion.button
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '2px solid #00f5ff',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  background: 'rgba(0, 245, 255, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                🔍 View All Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{
        padding: '4rem 2rem',
        background: 'rgba(255, 255, 255, 0.02)'
      }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.h2
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #00f5ff, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '3rem'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            💬 What Our Clients Say
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(0, 245, 255, 0.2)',
                  borderRadius: '20px',
                  padding: '2rem',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  borderColor: '#00f5ff'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      marginRight: '1rem',
                      border: '2px solid #00f5ff'
                    }}
                  />
                  <div>
                    <h4 style={{
                      color: '#00f5ff',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '0.2rem'
                    }}>
                      {testimonial.name}
                    </h4>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '0.9rem'
                    }}>
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  marginBottom: '1rem'
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#ffd700', fontSize: '1.2rem' }}>⭐</span>
                  ))}
                </div>

                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.6,
                  marginBottom: '1rem',
                  fontStyle: 'italic'
                }}>
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <span style={{
                  background: 'rgba(124, 58, 237, 0.2)',
                  color: '#7c3aed',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}>
                  {testimonial.service}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: `
          linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(124, 58, 237, 0.1)),
          radial-gradient(circle at 50% 50%, rgba(0, 245, 255, 0.1) 0%, transparent 50%)
        `
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.h2
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #00f5ff, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1.5rem'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            🚀 Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p
            style={{
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join hundreds of satisfied clients across Canada. Get your free consultation 
            and discover how we can elevate your business to the next level.
          </motion.p>

          <motion.div
            style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <motion.button
                style={{
                  background: 'linear-gradient(135deg, #00f5ff, #7c3aed)',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Get Free Consultation
              </motion.button>
            </Link>

            <Link to="/about" style={{ textDecoration: 'none' }}>
              <motion.button
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '2px solid #00f5ff',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  background: 'rgba(0, 245, 255, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                🏢 Learn About Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedHome;
