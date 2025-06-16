import React, { useState } from "react";
import "./demoPage.css";

// Assets
import img from "../../assets/images/driver-distraction.jpg";
import img1 from "../../assets/images/Dashboard.jpg";
import img2 from "../../assets/images/marble-detection.jpg";
import video1 from "../../assets/video.mp4";

const features = [
  {
    title: "Customisable Workflows",
    description:
      "Tailor workflows to specific manufacturing needs using flexible, easily adjustable configurations that maintain efficiency and adaptability.",
    image: img,
    video: video1,
  },
  {
    title: "Another Feature",
    description:
      "Another example feature using the same video or a different one.",
    image: img1,
    video: video1,
  },
];

const FeatureCards = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [expanded, setExpanded] = useState(null);

  const closeModal = () => setSelectedVideo(null);

  return (
    <>
      <section className="demo-feature-section">
        <div className="demo-feature-tagline">
          <h2>Explore Our Intelligent AI-Powered Solutions</h2>
          <p>
            Discover how our products transform processes with smart automation,
            custom workflows, and real-time monitoring.
          </p>
        </div>

        <div className="demo-feature-card-grid">
          {features.map((item, index) => (
            <div
              className="demo-feature-card"
              key={index}
              onClick={() => setSelectedVideo(item.video)}
            >
              <div className="demo-feature-image-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className={item.title === "Another Feature" ? "no-crop" : ""}
                />
                <div className="demo-feature-card-title">{item.title}</div>
              </div>

              <div className="demo-feature-card-content">
                <p
                  className={`demo-card-description ${
                    expanded === index ? "expanded" : ""
                  }`}
                >
                  {item.description}
                </p>
                <span
                  className="demo-read-toggle"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpanded(expanded === index ? null : index);
                  }}
                >
                  {expanded === index ? "Read less" : "Read more"}
                </span>
                <a className="demo-feature-card-link">View Product →</a>
              </div>
            </div>
          ))}
        </div>

        <section className="demo-feature-highlight">
          <h2 className="demo-highlight-heading">Marble-Detection</h2>

          <div className="demo-highlight-wrapper">
            <div className="demo-highlight-image">
              <img src={img2} alt="Marble Detection Product" />
            </div>
            <div className="demo-highlight-text">
              <p>
                Our Marble Detection system uses advanced computer vision and AI
                to identify surface defects, patterns, and inconsistencies in
                real-time across marble slabs, improving quality control and
                reducing manual inspection efforts.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* Modal Video Overlay */}
      {selectedVideo && (
        <div className="demo-video-modal" onClick={closeModal}>
          <div
            className="demo-video-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="demo-close-button" onClick={closeModal}>
              ✕
            </button>
            <div className="demo-phone-frame">
              <video controls autoPlay>
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeatureCards;
