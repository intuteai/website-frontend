import React from "react";
import { motion } from "framer-motion";
import "./teampage.css";
import aryanImage from "../../assets/images/Aryan.jpeg";
import kanishkImage from "../../assets/images/Kanishk.jpg";
import mayankImage from "../../assets/images/Mayank.jpeg";
import muditImage from "../../assets/images/Mudit.jpeg";
import prathamImage from "../../assets/images/Pratham.jpeg";
import rahulImage from "../../assets/images/Rahul.jpeg";
import rishikaImage from "../../assets/images/Rishika.jpg";
import saatwikImage from "../../assets/images/Saatwik.jpeg";
import yashImage from "../../assets/images/Yash.jpeg";
import maadhavImage from "../../assets/images/Maadhav.jpeg";
import kushImage from "../../assets/images/Kush.jpg";
import mrinalImage from "../../assets/images/Mrinal.jpg";
import akshayImage from "../../assets/images/Akshay.jpg";

const teamMembers = [
  {
    name: "Akshay Aggarwal",
    role: "Founder",
    description:
      "17+ years entrepreneurial career in Automation systems, Electric vehicle traction control & system integration",
    image: akshayImage,
  },
  {
    name: "Saatwik",
    role: "Software Engineer",
    description: "Full Stack Developer & Cloud Manager",
    image: saatwikImage,
  },
  {
    name: "Rishika",
    role: "System Architect",
    description: "Front-end Developer, UI/UX Designer",
    image: rishikaImage,
  },
  {
    name: "Maadhav",
    role: "Hardware Designer",
    description: "Electronic Circuit & PCB Designer",
    image: maadhavImage,
  },
  {
    name: "Mrinal",
    role: "Fabrication Engineer",
    description: "Thermal Analysis",
    image: mrinalImage,
  },
  {
    name: "Mudit",
    role: "Design Engineer",
    description: "",
    image: muditImage,
  },
  {
    name: "Aryan",
    role: "Data Engineer",
    description: "",
    image: aryanImage,
  },
  {
    name: "Kanishk",
    role: "Data Analyst",
    description: "",
    image: kanishkImage,
  },
  {
    name: "Yash",
    role: "Simulations Engineer",
    description: "",
    image: yashImage,
  },
  {
    name: "Pratham",
    role: "Application Developer",
    description: "",
    image: prathamImage,
  },
  {
    name: "Kush",
    role: "Design Engineer",
    description: "",
    image: kushImage,
  },
  {
    name: "Mayank",
    role: "Embedded Engineer",
    description: "",
    image: mayankImage,
  },
  {
    name: "Rahul",
    role: "Backend Developer",
    description: "",
    image: rahulImage,
  },
];

const Teampage = () => {
  const founder = teamMembers.find((member) => member.role === "Founder");
  const otherMembers = teamMembers.filter((member) => member.role !== "Founder");

  return (
    <div className="team-container">
      {/* Header Section */}
      <motion.div
        className="team-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="team-header-content">
          <h1 className="team-title">MEET OUR TEAM</h1>
          <p className="team-tagline">
            We are professionals developing revolutionary mobility solutions.
          </p>
        </div>
        {founder && (
          <motion.div
            className="founder-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {founder.image ? (
              <img
                src={founder.image}
                alt={founder.name}
                className="team-image"
                loading="lazy"
              />
            ) : (
              <div className="team-image-placeholder"></div>
            )}
            <h3 className="team-role">{founder.role}</h3>
            <h4 className="team-name">{founder.name}</h4>
            {founder.description && (
              <p className="founder-description">{founder.description}</p>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Team Grid Section */}
      <motion.div
        className="team-grid"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {otherMembers.map((member, index) => (
          <motion.div
            key={index}
            className="team-card"
            whileHover={{ scale: 1.05 }}
          >
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Teampage;