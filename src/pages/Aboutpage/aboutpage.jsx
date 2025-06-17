import { motion } from "framer-motion";
import { FaMicrochip, FaCode, FaCogs, FaCloud, FaCar } from "react-icons/fa";
import "./aboutpage.css";
import video from "../../assets/video.mp4";

const About = () => {
  return (
    <>
      {/* WHO WE ARE Section */}
      <div className="who-wrapper">
        <div className="who-we-are">
          <motion.h3
            className="who-we-are-title"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            WHO WE ARE ?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            At Intute.ai, we harness the power of cutting-edge technologies to
            drive intelligent, scalable, and sustainable innovation across
            industries. By integrating Model-Based Design (MBD) methodologies
            with high-efficiency AI models, we deliver optimized, data-driven
            solutions that enhance performance, reduce costs, and accelerate
            digital transformation.
            <br />
            <br />
            Our expertise lies in developing low-cost, scalable implementations
            that enhance road safety, car safety, and driver safety through
            intelligent technology. By integrating AI-driven insights with smart
            infrastructure, we empower businesses to streamline operations,
            improve decision-making, and optimize traffic management for safer
            mobility. Our solutions proactively reduce accidents, enhance
            vehicle security, and provide real-time driver assistance, ensuring
            a safer environment for all road users. With a strong focus on
            sustainability and efficiency, we design future-ready innovations
            that adapt seamlessly to evolving safety challenges while unlocking
            new opportunities for growth.
          </motion.p>
        </div>
      </div>

      {/* Core Technology Strengths */}
      <div className="about-container">
        <motion.h2
          className="core-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Core Technology Strengths
        </motion.h2>

        <div className="core-grid">
          <motion.div
            className="icon-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FaMicrochip size={80} />
            <h4>Embedded Firmware</h4>
            <p>
              We develop robust firmware that brings intelligence to the edge,
              enabling real-time processing and decision-making directly on
              hardware. Our solutions are optimized for reliability and
              low-power operation, ensuring seamless performance.
            </p>
          </motion.div>

          <motion.div
            className="icon-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <FaCode size={80} />
            <h4>Adaptive Intelligence</h4>
            <p>
              Our self-learning AI continuously analyzes your operations,
              automatically adjusting to improve efficiency and accuracy. Unlike
              static systems, our models evolve with your business needs,
              delivering smarter decisions over time.
            </p>
          </motion.div>

          <motion.div
            className="icon-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <FaCogs size={80} />
            <h4>Computational Design</h4>
            <p>
              Our AI-driven design tools automate and optimize product
              development, generating high-performance solutions faster than
              traditional methods. By combining simulation with machine
              learning, we reduce prototyping cycles while improving functional
              outcomes.
            </p>
          </motion.div>

          <motion.div
            className="icon-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <FaCloud size={80} />
            <h4>Seamless Connectivity</h4>
            <p>
              We eliminate integration headaches with plug-and-play
              compatibility across all major platforms and devices. Our
              solutions ensure real-time data flows effortlessly between your
              existing tools, creating a truly unified system.
            </p>
          </motion.div>

          <motion.div
            className="icon-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <FaCar size={80} />
            <h4>Smart Monitoring</h4>
            <p>
              Get 24/7 visibility with AI-powered alerts that spot anomalies
              before they become problems. Our predictive monitoring reduces
              downtime by flagging issues and suggesting optimizations in
              real-time.
            </p>
          </motion.div>
        </div>

        {/* Autonomous Driving Highlight Section */}
        <div className="autonomous-section">
          <div className="autonomous-background">
            <div className="autonomous-content">
              <motion.h2
                className="autonomous-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Can India Have Autonomous Driving?
              </motion.h2>
              <motion.a
                href="/blog"
                className="autonomous-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                Read More →
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
