import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./demoPage.css";

// Assets
import img from "../../assets/images/driver-distraction.jpg";
import img1 from "../../assets/images/Dashboard.jpg";
import img2 from "../../assets/images/marble-detection.jpg";
import video1 from "../../assets/driver_detection_video.mp4";
import video2 from "../../assets/dashboard_video_2.mp4";
import img3 from "../../assets/images/veloconnect-lite.jpg";
import video3 from "../../assets/veloconnect_lite.mp4";

const features = [
  {
    title: "VeloConnect Lite",
    description:
      "ESP-32 based logic controller with Bluetooth, GSM, Wi-Fi and CAN Bus. 12× rugged digital inputs (9–80V), 1× analog input (0–5V), 1× relay output, USB interface, and 7–14.4V DC supply. Mobile app connectivity via Bluetooth; read battery/sensor data and command your motor over CAN—ideal for vehicle VCUs and micro PLC use.",
    image: img3,
    video: video3,
    noCrop: true,
  },
  {
    title: "Driver Distraction Detection",
    description:
      "An AI-powered system that monitors driver behavior in real-time to detect signs of distraction, such as phone use or drowsiness and provides instant alerts to enhance road safety.",
    image: img,
    video: video1,
    noCrop: false,
  },
  {
    title: "Advanced EV Dashboard",
    description:
      "A real-time dashboard displaying key EV parameters such as motor RPM, battery level, voltage, temperature and more with detailed analytics and fault detection.",
    image: img1,
    video: video2,
    noCrop: true,
  },
];

const FeatureCards = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const [isLandscape, setIsLandscape] = useState(false);

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
            <div className="demo-feature-card" key={index}>
              <div className="demo-feature-image-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className={item.noCrop ? "no-crop" : ""}
                  onClick={() => setSelectedVideo(item.video)}
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
                {item.title.startsWith("VeloConnect") ? (
                  <Link
                    className="demo-feature-card-link"
                    to="/products/veloconnect-lite"
                   onClick={(e) => e.stopPropagation()}
                  >
                    View Product →
                  </Link>
                ) : (
  <a
    className="demo-feature-card-link"
    href="#"
    onClick={(e) => {
      e.preventDefault();        // don’t jump to top
      e.stopPropagation();       // just in case
      setSelectedVideo(item.video); // open the video modal
    }}
  >
    View Product →
  </a>
)}
              </div>
            </div>
          ))}
        </div>
        {/* Product 3 Section */}
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

      {/* Modal for Video Preview */}
      {selectedVideo && (
        <div className="demo-video-modal" onClick={closeModal}>
          <div
            className={`demo-video-container ${
              isLandscape ? "landscape-modal" : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="demo-close-button" onClick={closeModal}>
              ✕
            </button>
            <div
              className={`demo-phone-frame ${
                isLandscape ? "landscape-video" : ""
              }`}
            >
              <video
                controls
                autoPlay
                onLoadedMetadata={(e) => {
                  const v = e.currentTarget;
                  setIsLandscape((v.videoWidth || 16) >= (v.videoHeight || 9));
                }}
              >
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
