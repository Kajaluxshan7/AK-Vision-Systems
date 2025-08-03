import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HeroScene, DemoScene } from "../components/3D/Scene";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async";

function EnhancedHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Hero animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Services data with enhanced descriptions
  const services = [
    {
      icon: "🛡️",
      title: "Advanced CCTV Systems",
      description:
        "AI-powered surveillance with facial recognition, motion detection, and real-time analytics for complete security coverage.",
      features: [
        "4K Ultra HD",
        "Night Vision",
        "AI Analytics",
        "Remote Monitoring",
      ],
      gradient: "from-blue-600 to-cyan-400",
    },
    {
      icon: "🎵",
      title: "Smart Audio Video",
      description:
        "Intelligent AV solutions with voice control, automated systems, and seamless integration for modern businesses.",
      features: [
        "Voice Control",
        "Automation",
        "4K Displays",
        "Wireless Systems",
      ],
      gradient: "from-purple-600 to-pink-400",
    },
    {
      icon: "📱",
      title: "Digital Marketing AI",
      description:
        "AI-driven marketing strategies with predictive analytics, automated campaigns, and performance optimization.",
      features: [
        "AI Analytics",
        "Auto Campaigns",
        "SEO Optimization",
        "Social Media",
      ],
      gradient: "from-green-600 to-teal-400",
    },
    {
      icon: "📲",
      title: "Social Media Automation",
      description:
        "Automated social media management with content generation, scheduling, and engagement analytics.",
      features: ["Auto Posting", "Content AI", "Analytics", "Multi-Platform"],
      gradient: "from-orange-600 to-red-400",
    },
    {
      icon: "🍽️",
      title: "Smart Ordering Systems",
      description:
        "AI-powered food ordering with inventory management, predictive ordering, and customer analytics.",
      features: [
        "AI Recommendations",
        "Inventory Sync",
        "Mobile App",
        "Analytics",
      ],
      gradient: "from-yellow-600 to-orange-400",
    },
    {
      icon: "🎯",
      title: "Brand Strategy AI",
      description:
        "AI-assisted brand development with market analysis, competitor insights, and automated design generation.",
      features: [
        "Market Analysis",
        "Auto Design",
        "Competitor Intel",
        "Brand Voice",
      ],
      gradient: "from-indigo-600 to-blue-400",
    },
  ];

  // Enhanced statistics
  const stats = [
    { number: "500+", label: "Projects Completed", icon: "🚀" },
    { number: "100+", label: "Happy Clients", icon: "😊" },
    { number: "5+", label: "Years Experience", icon: "⭐" },
    { number: "24/7", label: "AI Support", icon: "🤖" },
  ];

  // Testimonials with enhanced data
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Vancouver",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=80&h=80&fit=crop&crop=face",
      text: "AK Vision's AI-powered CCTV system helped us reduce security incidents by 90%. The facial recognition is incredibly accurate!",
      rating: 5,
      service: "AI Security Systems",
    },
    {
      name: "Mike Chen",
      company: "Dragon Restaurant Toronto",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      text: "Their smart ordering system with AI recommendations increased our sales by 40% and improved customer satisfaction significantly.",
      rating: 5,
      service: "Smart Ordering Systems",
    },
    {
      name: "Emma Davis",
      company: "Creative Agency Montreal",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      text: "The AI-driven marketing campaigns have tripled our ROI. The automated social media management is a game-changer!",
      rating: 5,
      service: "Digital Marketing AI",
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <Helmet>
        <title>
          AK Vision Systems | Advanced AI-Powered Security & Technology
          Solutions
        </title>
        <meta
          name="description"
          content="Leading provider of AI-powered CCTV systems, smart audio video solutions, and digital marketing automation across Canada. Experience the future of technology today."
        />
        <meta
          name="keywords"
          content="AI CCTV, smart security, automated marketing, AI technology, Canada"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
        {/* Hero Section with 3D */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background particles */}
          <div className="absolute inset-0 particles-bg">
            <div className="absolute inset-0 bg-gradient-to-r from-tech-blue/10 to-primary-600/10 animate-pulse"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={heroVariants}
                className="text-white space-y-6"
              >
                <motion.div variants={itemVariants}>
                  <div className="inline-flex items-center px-4 py-2 bg-tech-blue/20 border border-tech-blue/30 rounded-full text-tech-blue text-sm font-medium mb-4">
                    <span className="w-2 h-2 bg-tech-blue rounded-full mr-2 animate-pulse"></span>
                    AI-Powered Security Solutions
                  </div>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-5xl lg:text-7xl font-bold leading-tight"
                >
                  <span className="text-gradient">Future-Ready</span>
                  <br />
                  Security & Tech
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
                >
                  Experience next-generation AI-powered CCTV systems, smart
                  automation, and intelligent digital marketing solutions
                  designed for the modern Canadian business.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    to="/contact"
                    className="btn-primary inline-flex items-center justify-center group"
                  >
                    <span>Start Your AI Journey</span>
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>

                  <Link
                    to="/services"
                    className="btn-outline inline-flex items-center justify-center"
                  >
                    <span>Explore Technologies</span>
                  </Link>
                </motion.div>

                {/* Quick stats */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
                >
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-2xl font-bold text-tech-blue">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* 3D Hero Scene */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative"
              >
                <div className="tech-glow rounded-2xl overflow-hidden">
                  <HeroScene className="h-96 lg:h-[500px]" />
                </div>

                {/* Floating info cards */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -left-4 glass-dark rounded-lg p-3 text-white text-sm"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>AI Detection Active</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -right-4 glass-dark rounded-lg p-3 text-white text-sm"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-tech-blue rounded-full animate-pulse"></div>
                    <span>24/7 Monitoring</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-white/60">
              <span className="text-sm mb-2">Explore Technologies</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              >
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Services Section */}
        <section ref={ref} className="py-20 relative">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="text-gradient">AI-Powered</span> Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technology solutions that learn, adapt, and evolve
                with your business needs
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative glass-dark rounded-2xl p-8 h-full card-hover border-glow">
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 rounded-2xl`}
                    ></div>

                    <div className="relative z-10">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-400"
                          >
                            <div className="w-1.5 h-1.5 bg-tech-blue rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>

                      <Link
                        to="/services"
                        className="inline-flex items-center text-tech-blue hover:text-white transition-colors group-hover:translate-x-1 transform transition-transform"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-20 bg-black/20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Experience <span className="text-gradient">Live Demo</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  See our AI-powered security system in action. Interactive 3D
                  visualization shows real-time monitoring, coverage areas, and
                  intelligent analytics.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-3 h-3 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg">
                      Real-time AI object detection
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-3 h-3 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg">Automated threat assessment</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-3 h-3 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg">
                      Predictive behavior analysis
                    </span>
                  </div>
                </div>

                <Link to="/contact" className="btn-primary">
                  Request Live Demo
                </Link>
              </div>

              <div className="tech-glow rounded-2xl overflow-hidden">
                <DemoScene className="h-96" />
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Client <span className="text-gradient">Success Stories</span>
              </h2>
              <p className="text-xl text-gray-300">
                Real results from real businesses across Canada
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="glass-dark rounded-2xl p-8 border-glow"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-16 h-16 rounded-full mr-4 border-2 border-tech-blue"
                    />
                    <div>
                      <h4 className="text-white font-bold text-lg">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-gray-400">
                        {testimonials[currentSlide].company}
                      </p>
                      <div className="flex mt-1">
                        {[...Array(testimonials[currentSlide].rating)].map(
                          (_, i) => (
                            <span key={i} className="text-yellow-400">
                              ⭐
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-white text-xl leading-relaxed mb-4">
                    &ldquo;{testimonials[currentSlide].text}&rdquo;
                  </blockquote>

                  <div className="inline-block px-3 py-1 bg-tech-blue/20 border border-tech-blue/30 rounded-full text-tech-blue text-sm">
                    {testimonials[currentSlide].service}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-tech-blue" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-tech-blue/20 to-primary-600/20">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-gradient">Transform</span> Your
                Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of Canadian businesses already using our
                AI-powered solutions. Get started with a free consultation and
                see the difference technology can make.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Get Free AI Consultation
                </Link>
                <Link to="/services" className="btn-outline">
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default EnhancedHome;
