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
import saatwikImage from "../../assets/images/Saatwik.jpeg";
import maadhavImage from "../../assets/images/Maadhav.jpeg";
import kushImage from "../../assets/images/Kush.jpg";
import akshayImage from "../../assets/images/Akshay.jpg";
import teamMeetingImage from "../../assets/images/team-meeting.jpg";

// Team data
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
    description: "",
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
    name: "Kanishk",
    role: "Data Analyst",
    description: "",
    image: kanishkImage,
    linkedin: "#",
  },

  {
    name: "Maadhav",
    role: "Hardware Designer",
    description: "Electronic Circuit & PCB Designer",
    image: maadhavImage,
    linkedin: "#",
  },

  {
    name: "Aryan",
    role: "Data Engineer",
    description: "",
    image: aryanImage,
    linkedin: "#",
  },

  {
    name: "Kush",
    role: "Design Engineer",
    description: "",
    image: kushImage,
    linkedin: "#",
  },
];

// Team Card Component
const renderCard = (member) => (
  <motion.div
    key={member.name}
    className={`team-card ${member.role === "Founder" ? "founder-card" : ""}`}
    whileHover={{ scale: 1.05 }}
  >
    {member.image ? (
      <img
        src={member.image}
        alt={member.name}
        className="team-image-rect"
        loading="lazy"
      />
    ) : (
      <div className="team-image-placeholder"></div>
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
  const otherMembers = teamMembers.filter(
    (member) => member.role !== "Founder"
  );

  return (
    <div className="team-container">
      <motion.div
        className="team-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="team-header-content">
          <h1 className="team-title">MEET OUR TEAM</h1>
          <p className="team-tagline">
            We're a team of researchers, engineers, and operational leaders,
            with experience spanning a variety of disciplines, all working
            together to build reliable and robust AI systems for manufacturing.
          </p>
        </div>

        {founder && renderCard(founder)}
      </motion.div>

      <hr className="team-divider" />

      <motion.div
        className="team-grid"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {otherMembers.map(renderCard)}
      </motion.div>

      <div className="team-meeting-section">
        <motion.div
          className="team-meeting-image-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={teamMeetingImage}
            alt="Team Meeting"
            className="team-meeting-image"
          />
          <div className="meeting-caption-overlay">
            <p className="gradient-caption">
              A quick glimpse of our collaborative team during a strategy
              session.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Teampage;
