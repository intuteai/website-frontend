import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import "./homepage.css"; // Ensure CSS is imported here
import nvidia from "../../assets/NvidiaImage.png";
import opencv from "../../assets/OpenCVImage.png";
import { FaCarCrash, FaBatteryFull, FaRoad, FaCogs } from "react-icons/fa";
import heroVideo from "../../assets/3d-video.mp4";

const Home = () => {
  return (
    <>
      <div className="home-wrappere">
        <div className="home-content">
          <motion.h2
            className="home-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <Typewriter
              words={[
                "Welcome to Intute.ai",
                "Empowering AI Innovations",
                "Shaping a Sustainable Future",
              ]}
              loop={true}
              cursor={true}
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={20}
              delaySpeed={7000}
            />
          </motion.h2>

          <motion.p
            className="home-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Empowering innovation through AI-driven solutions.
            <br />
            Revolutionizing industries with advanced technologies for a
            sustainable future.
          </motion.p>

          <motion.p
            className="dpiit-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <strong>A DPIIT REGISTERED STARTUP</strong>
          </motion.p>
        </div>

        <div className="home-image">
          <div className="home-video-container"></div>
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="home-video"
          />
          </div>
        </div>
      <motion.div
        className="automate-section"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="automate-title">Your Fast Lane to AI-Powered Automation</h2>
        <p className="automate-subtext">
          Skip the complexity — design and deploy smart automation workflows in minutes.
        </p>
        <p className="automate-subtext">
          Accelerate operations, reduce manual effort, and build intelligent systems with no programming expertise needed.
        </p>
        <Link to="/get-demo" className="automate-button">Explore Our Products</Link>
      </motion.div>
      <div className="industries-wrapper">
        <motion.div
          className="industries-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="industries-text">
            Backed by technology leaders like <strong>NVIDIA</strong> and <strong>OpenCV</strong>, our solutions power intelligent
            automation across <strong>manufacturing</strong>, <strong>mobility</strong>, and <strong>embedded AI</strong> systems —
            delivering scalable performance and real-time insights where it matters most.
          </p>
          <div className="industries-logos">
            <img src={nvidia} alt="NVIDIA" className="industry-logo" />
            <img src={opencv} alt="OpenCV" className="industry-logo" />
          </div>
        </motion.div>
      </div>
      <motion.section
        className="features-section"
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="features-title">Smarter Possibilities with AI-Powered Automation</h2>
        <div className="features-grid">
          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <FaCarCrash className="feature-icon" />
            <h3>Driver Behavior Monitoring</h3>
            <p>Detect fatigue, distraction, and unsafe driving patterns using vision-based AI.</p>
          </motion.div>
          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <FaBatteryFull className="feature-icon" />
            <h3>Predictive Diagnostics</h3>
            <p>Track battery, tyre, and vehicle health with real-time alerts and analytics.</p>
          </motion.div>
          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <FaCogs className="feature-icon" />
            <h3>Fleet Intelligence</h3>
            <p>Monitor and analyze vehicle usage, location, and efficiency at scale.</p>
          </motion.div>
          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <FaRoad className="feature-icon" />
            <h3>Road & Environment Analysis</h3>
            <p>Evaluate road quality and environmental conditions to enhance safety.</p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;