import React, { useState, Suspense, lazy } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contactPage.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Lazy load the map component
const MapComponent = lazy(() => import("../../components/MapComponent"));

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("Sending...");

    try {
      await axios.post("/api/contact", formData, {
        headers: { "Content-Type": "application/json" },
      });
      setStatusMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatusMessage("Error sending message. Try again later.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="contact-container">
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        GET IN TOUCH
      </motion.h2>

      <motion.p
        className="contact-text"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Reach out to us for any inquiries or support. We're here to help!
      </motion.p>

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-label="Your Name"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Your Email"
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            aria-label="Your Message"
          />
        </div>

        <button type="submit" className="contact-btn">
          Send Message
        </button>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </motion.form>

      <div className="contact-info-section container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <motion.div
              className="contact-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <a href="mailto:info@intute.in" className="contact-link">
                <FaEnvelope size={24} color="#ff8e53" />
                <span className="contact-text">info@intute.in</span>
              </a>
            </motion.div>

            <motion.div
              className="contact-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaMapMarkerAlt size={24} color="#f3ec78" />
              <span className="contact-text">
                A5, Sector-68, NOIDA - 201303<br /> Uttar Pradesh, India
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading map...</div>}>
        <MapComponent />
      </Suspense>
    </div>
  );
};

export default ContactUs;
