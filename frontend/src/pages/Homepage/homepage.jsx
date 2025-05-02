import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import "./homepage.css"; // Ensure CSS is imported here

const Home = () => {
  return (
    <div className="home-container">
      {/* Typewriter Effect for Title */}
      <motion.h2
        className="home-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typewriter
          words={["Welcome to Intute.ai", "Empowering AI Innovations", "Shaping a Sustainable Future"]}
          loop={true}
          cursor={true}
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={20}
          delaySpeed={1200}
        />
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="home-text"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Empowering innovation through AI-driven solutions.<br />
        Revolutionizing industries with advanced technologies for a sustainable future.
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
  );
};

export default Home;