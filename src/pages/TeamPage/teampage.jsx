// Teampage.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import "./teampage.css";

// Images
import aryanImage from "../../assets/images/Aryan.jpeg";
import kanishkImage from "../../assets/images/Kanishk.jpg";
import mayankImage from "../../assets/images/Mayank.jpeg";
import prathamImage from "../../assets/images/Pratham.jpeg";
import rahulImage from "../../assets/images/Rahul.jpeg";
import rishikaImage from "../../assets/images/Rishika.jpg";
import saatwikImage from "../../assets/images/Saatwik.jpg";
import rhythmImage from "../../assets/images/Rhythm.jpeg";
import akshayImage from "../../assets/images/Akshay.jpg";
import teamMeetingImage from "../../assets/images/team-meeting.jpg";

// Team data (unchanged, but feel free to extend)
const teamMembers = [
  {
    name: "Akshay Aggarwal",
    role: "Founder",
    description:
      "17+ years entrepreneurial career in Automation systems, Electric vehicle traction control & system integration.",
    image: akshayImage,
    linkedin: "https://www.linkedin.com/in/akshay-aggarwal-4072637/",
  },
  {
    name: "Saatwik",
    role: "Software Developer",
    description: "Full Stack Developer & Cloud Manager",
    image: saatwikImage,
    linkedin: "https://www.linkedin.com/in/saatwik",
  },
  {
    name: "Mayank",
    role: "Embedded Engineer",
    description: "Embedded UI Developer",
    image: mayankImage,
    linkedin: "#",
  },
  {
    name: "Pratham",
    role: "Application Developer",
    description: "React-Native specialist and Real-time Systems Enthusiast",
    image: prathamImage,
    linkedin: "#",
  },

  {
    name: "Rishika",
    role: "System Architect",
    description: "Front-end Developer, UI/UX Designer",
    image: rishikaImage,
    linkedin: "https://www.linkedin.com/in/rishika",
  },

  {
    name: "Rahul",
    role: "Backend Developer",
    description: "",
    image: rahulImage,
    linkedin: "#",
  },
  {
    name: "Rhythm",
    role: "Data Scientist",
    description: "",
    image: rhythmImage,
    linkedin: "#",
  },

  {
    name: "Kanishk",
    role: "Data Analyst",
    description: "",
    image: kanishkImage,
    linkedin: "#",
  },
];

// Team Card Component (kept lightweight)
const renderCard = (member) => (
  <motion.div
    key={member.name}
    className={`team-card ${member.role === "Founder" ? "founder-card" : ""}`}
    whileHover={{ scale: 1.03 }}
  >
    {member.image ? (
      <img
        src={member.image}
        alt={member.name}
        className="team-image-rect"
        loading="lazy"
        decoding="async"
      />
    ) : (
      <div className="team-image-placeholder" aria-hidden />
    )}

    <h3 className="team-role">{member.role}</h3>
    <h4 className="team-name">{member.name}</h4>
    {member.description && (
      <p className="team-description">{member.description}</p>
    )}

    {member.role === "Founder" && member.linkedin && (
      <a
        href={member.linkedin}
        className="linkedin-icon"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`LinkedIn profile of ${member.name}`}
      >
        <FaLinkedinIn />
      </a>
    )}
  </motion.div>
);

// Main Team Page Component
const Teampage = () => {
  const founder = teamMembers.find((member) => member.role === "Founder");
  const otherMembers = teamMembers.filter((member) => member.role !== "Founder");

  return (
    <div className="team-container">
      <motion.header
        className="team-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="team-header-content">
          <h1 className="team-title">MEET OUR TEAM</h1>
          <p className="team-tagline">
            We're a team of researchers, engineers, and operational leaders, with
            experience spanning a variety of disciplines, all working together to
            build reliable and robust AI systems for manufacturing.
          </p>
        </div>
        {founder && renderCard(founder)}
      </motion.header>

      <hr className="team-divider" />

      <motion.section
        className="team-grid"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        aria-label="Team members"
      >
        {otherMembers.map(renderCard)}
      </motion.section>

      <section className="team-meeting-section">
        <motion.div
          className="team-meeting-image-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src={teamMeetingImage}
            alt="Team strategy session"
            className="team-meeting-image"
            loading="lazy"
            decoding="async"
          />
          <div className="meeting-caption-overlay">
            <p className="gradient-caption">
              A quick glimpse of our collaborative team during a strategy session.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Teampage;