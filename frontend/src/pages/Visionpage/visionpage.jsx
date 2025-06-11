import React from "react";
import { motion } from "framer-motion";
import bannerImage from "../../assets/images/Car.jpg";
import video1 from "../../assets/Driver-assistance.mp4";
import video2 from "../../assets/Smart-streets.mp4";
import video3 from "../../assets/Connected-cloud.mp4";
import video4 from "../../assets/Energy-integration.mp4";
import video5 from "../../assets/Urban-planning.mp4";
import "./visionpage.css";

const aimPoints = [
  {
    title: "Intelligent Driver Assistance",
    content:
      "Empower drivers with real-time alerts, AI-based recommendations, and predictive assistance. From obstacle detection to adaptive cruise systems, we turn reactive driving into proactive mobility.",
    video: video1,
  },
  {
    title: "Smarter Streets for All",
    content:
      "Make streets safer for everyone—drivers, pedestrians, and cyclists—through connected monitoring, AI-driven analytics, and responsive alert systems that reduce accidents and improve traffic flow.",
    video: video2,
  },
  {
    title: "Connected Infrastructure",
    content:
      "Integrate AI into infrastructure, creating intelligent intersections, responsive lighting, and smart signage. This builds a collaborative, safe ecosystem for both urban and rural mobility networks.",
    video: video3,
  },
  {
    title: "Sustainable Energy Integration",
    content:
      "Utilize AI to optimize energy consumption across electric mobility platforms. From predictive charging to green routing, ensure every trip is both efficient and eco-friendly.",
    video: video4,
  },
  {
    title: "Data-Driven Urban Planning",
    content:
      "Leverage mobility data to help cities make informed planning decisions. Analyze patterns, predict congestion, and propose changes that improve long-term transport sustainability.",
    video: video5,
  },
];

const VisionPage = () => {
  return (
    <div className="page-container">
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

      <section className="vision-carousel-section">
        <h3 className="vision-heading">
          Driving the Future of <b>"Safer"</b> and <br />
          <b>"Smarter"</b> Mobility
        </h3>
        <p className="vision-subtext">
          At Intute.ai, we harness the power of AI and data-driven technologies
          to reimagine transportation.
          <br />
          From intelligent infrastructure to sustainable mobility, we aim to
          make every journey safer, smarter, and more connected.
        </p>

        <div className="vision-cards-container">
          {aimPoints.map((item, index) => (
            <motion.div
              key={index}
              className={`vision-card horizontal-card ${
                index % 2 !== 0 ? "reverse-card" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="card-image-wrapper">
                <video
                  src={item.video}
                  className="carousel-video-horizontal"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <div className="card-text-wrapper">
                <h4 className="carousel-title">{item.title}</h4>
                <p className="carousel-content">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VisionPage;
