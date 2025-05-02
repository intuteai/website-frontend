import React from "react";
import { motion } from "framer-motion";
import bannerImage from "../../assets/images/Car.jpg";
import img1 from "../../assets/images/assist.jpg";
import img2 from "../../assets/images/street.jpg";
import img3 from "../../assets/images/infrastructure.jpeg";
import evImage from "../../assets/electronics.jpg";
import iotImage from "../../assets/software.jpg";
import aiImage from "../../assets/mechanical.jpg";
import "./visionpage.css";

const aimPoints = [
  {
    title: "Intelligent Driver Assistance",
    content:
      "Empower drivers with real-time alerts, AI-based recommendations, and predictive assistance. From obstacle detection to adaptive cruise systems, we turn reactive driving into proactive mobility.",
    image: img1,
  },
  {
    title: "Smarter Streets for All",
    content:
      "Make streets safer for everyone—drivers, pedestrians, and cyclists—through connected monitoring, AI-driven analytics, and responsive alert systems that reduce accidents and improve traffic flow.",
    image: img2,
  },
  {
    title: "Connected Infrastructure",
    content:
      "Integrate AI into infrastructure, creating intelligent intersections, responsive lighting, and smart signage. This builds a collaborative, safe ecosystem for both urban and rural mobility networks.",
    image: img3,
  },
];

const VisionPage = () => {
  return (
    <div className="page-container">
      {/* Banner */}
      <div
        className="vision-banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="tagline-box-1">
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Because Every Journey
          </motion.p>
        </div>
        <div className="tagline-box-2">
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Deserves to be Safe!
          </motion.p>
        </div>
      </div>

      {/* Vision Cards */}
      <section className="vision-carousel-section">
        <h3 className="vision-heading">What We Aim To Do</h3>
        <div className="vision-cards-container">
          {aimPoints.map((item, index) => (
            <motion.div
              key={index}
              className="vision-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="carousel-image"
                loading="lazy"
                decoding="async"
              />
              <h4 className="carousel-title">{item.title}</h4>
              <p className="carousel-content">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-hero">
        <motion.h1
          className="solution-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Solutions & Applications
        </motion.h1>
        <motion.p
          className="solution-subtitle"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          We are committed to{" "}
          <strong>pioneering intelligent and sustainable solutions</strong> in
          the automotive industry. Our expertise spans{" "}
          <strong>
            EV drive-train innovations, connected vehicle ecosystems, and
            AI-driven road safety solutions.
          </strong>
        </motion.p>
      </section>

      <div className="solution-sections">
        {[
          {
            title: "AI/ML-Based Road Safety",
            image: aiImage,
            description:
              "Integrating Artificial Intelligence and Machine Learning to enhance road safety and driver monitoring.",
            details: [
              "Driver Monitoring System",
              "Autonomous Emergency Braking",
              "Traffic Flow Optimization",
              "Computer Vision for Road Safety",
            ],
          },
          {
            title: "Connected Vehicles & IoT",
            image: iotImage,
            description:
              "Enabling seamless connectivity between vehicles, infrastructure, and cloud ecosystems.",
            details: [
              "Telematics & Smart Diagnostics",
              "Vehicle-to-Everything (V2X) Communication",
              "Edge & Cloud Computing",
              "Over-the-Air (OTA) Updates",
            ],
          },
          {
            title: "EV Drive-train & Powertrains",
            image: evImage,
            description:
              "Optimizing energy efficiency, battery longevity, and performance for the next generation of electric vehicles.",
            details: [
              "Advanced Motor Control",
              "Reinforcement Learning",
              "Regenerative Braking",
              "Thermal Management",
            ],
          },
        ].map((section, i) => (
          <motion.section
            key={i}
            className="solution-section"
            style={{ backgroundImage: `url(${section.image})` }}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="solution-overlay"></div>
            <div className="solution-content">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
              <div className="solution-details">
                {section.details.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default VisionPage;
