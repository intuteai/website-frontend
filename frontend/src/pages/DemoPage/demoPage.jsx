import React from "react";
import "./demoPage.css";
import img from "../../assets/images/driver-distraction.jpg";

const features = [
  {
    title: "Customisable Workflows",
    description:
      "Tailor workflows to specific manufacturing needs using flexible, easily adjustable configurations that maintain efficiency and adaptability.",
    image: img,
    link: "https://your-video-link.com/video1",
  },
  {
    title: "Customisable Workflows",
    description:
      "Tailor workflows to specific manufacturing needs using flexible, easily adjustable configurations that maintain efficiency and adaptability.",
    image: img,
    link: "https://your-video-link.com/video1",
  },
];

const FeatureCards = () => {
  return (
    <section className="feature-section">
      <div className="feature-tagline">
        <h2>Explore Our Intelligent AI-Powered Solutions</h2>
        <p>Discover how our products transform processes with smart automation, custom workflows, and real-time monitoring.</p>
      </div>

      {features.map((item, index) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="feature-card-link"
          key={index}
        >
          <div className={`feature-row ${index % 2 !== 0 ? "reverse" : ""}`}>
            <div className="feature-text">
              <div className="feature-box">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
            <div className="feature-img-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        </a>
      ))}
    </section>
  );
};

export default FeatureCards;
