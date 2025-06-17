import React, { useState } from "react";
import { motion } from "framer-motion";
import "./blogpage.css";
import bannerImage from "../../assets/autonomous.jpeg";

const BlogPage = () => {
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setSubmitted(true);
      setComment("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="article-container">
      <motion.div
        className="article-banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      ></motion.div>

      <motion.div
        className="article-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="article-title">Can India Have Autonomous Driving?</h1>
        <p>
          Autonomous driving is no longer a distant dream. With companies around
          the world making significant strides, self-driving vehicles are
          becoming an inevitable part of the future. But while these
          technologies are being tested and deployed in countries with
          well-defined infrastructure and relatively predictable traffic, the
          question remains: Can autonomous driving work in India? With its
          complex traffic patterns, diverse road users, and often chaotic
          driving behavior, India poses a unique challenge—and perhaps a unique
          opportunity—for autonomous mobility.
          <br />
          <hr />
          <h3>The Indian Driving Ecosystem: A Unique Challenge</h3>
          <p>
            India's roads are a melting pot of vehicles—cars, bikes, trucks,
            rickshaws, pedestrians, and even animals—often sharing the same
            space with minimal lane discipline. Traffic laws are loosely
            enforced, and driving behavior tends to be highly improvised. <br />
            In urban areas, congestion and narrow roads dominate the scene. In
            rural areas, the problem shifts to poor road quality, lack of
            signage, and low lighting. These factors create a dynamic,
            unstructured environment that current autonomous driving systems
            struggle to handle effectively.
            <br />
            <hr />
            <h3>What It Takes to Drive Without a Driver?</h3>
            <p>
              For a vehicle to drive itself, it must perceive, process, and act
              with high precision—all without human intervention. This requires
              a tightly integrated stack of technologies that work together in
              real time.
            </p>
            <p>
              At the hardware level, self-driving cars rely on a fusion of
              sensors :
            </p>
            <ul>
              <li>
                <strong>LiDAR (Light Detection and Ranging)</strong> for
                accurate 3D mapping and object detection.
              </li>
              <li>
                <strong>Radar</strong> to detect objects and track movement,
                especially useful in poor visibility.
              </li>
              <li>
                <strong>Cameras</strong> for object classification, traffic sign
                recognition, and lane detection
              </li>
              <li>
                <strong>Ultrasonic sensors</strong> for close-range detection in
                parking and tight environments.
              </li>
              <li>
                <strong>Inertial Measurement Units (IMUs)</strong> and{" "}
                <strong>GNSS (Global Navigation Satellite Systems)</strong> for
                localization and motion tracking.
              </li>
            </ul>
          </p>
          <p>
            These sensors feed data into the vehicle's perception system, which
            uses deep learning algorithms to identify and track pedestrians,
            vehicles, road signs, and more. A sensor fusion layer combines all
            inputs to create a comprehensive real-time model of the vehicle's
            surroundings.
          </p>
          <p>
            Next comes the planning and decision-making module, where path
            planning algorithms, behavior prediction models, and trajectory
            generation come into play. The vehicle must predict the intent of
            nearby agents and calculate the safest and most efficient path
            forward.
          </p>
          <p>
            This is supported by a high-definition (HD) map and a localization
            system that allows the car to know its exact position within a few
            centimeters—far more precise than standard GPS. All of this runs on
            powerful onboard compute platforms, often leveraging GPUs, AI
            accelerators, and edge computing capabilities.
          </p>
          <p>
            To ensure seamless coordination, Vehicle-to-Everything (V2X)
            communication enables the car to interact with infrastructure,
            pedestrians, and other vehicles, enhancing safety and traffic flow.
          </p>
          <p>
            Crucially, the system must perform under real-time constraints,
            handling sensor input, running AI models, and making decisions in
            milliseconds. Reliability, redundancy, and fail-safe mechanisms are
            critical, especially in safety-critical scenarios.
          </p>
          <hr />
          <h3>India’s Roadblocks to Autonomy</h3>
          <p>
            India’s unpredictable traffic, lack of lane discipline, and diverse
            road users pose a unique challenge for autonomous vehicles. Roads
            often lack clear markings, consistent signage, or proper lighting.
            Driving behavior adds to the complexity—rules are loosely followed,
            and decision-making is spontaneous. Combine that with extreme
            weather conditions and infrastructure gaps, and it’s clear that
            autonomous tech can’t simply be imported; it must be redesigned for
            India.
          </p>
          <hr />
          <h3>Turning Challenges into Opportunities</h3>
          <p>
            India may not be ready for fully autonomous vehicles today, but that
            doesn’t mean it can’t lead in its own way. Rather than aiming
            directly for full Level 5 autonomy, the near future is more likely
            to be shaped by semi-autonomous systems—features that assist, not
            replace, human drivers.
          </p>
          <p>
            Technologies like driver drowsiness alerts, lane change assist, and
            blind spot information systems are already being developed and
            tested. These features can significantly enhance road safety,
            especially on highways, and act as stepping stones toward more
            advanced autonomy.
          </p>
          <p>
            Fleet-based applications—such as autonomous delivery vehicles or
            shared mobility in controlled zones like campuses and airports—also
            offer promising early use cases.
          </p>
          <p>
            The Indian government is also laying the groundwork. Regulatory
            frameworks like AIS 184, AIS 185, and AIS 186 have been introduced
            to guide the safe development of ADAS and autonomous tech, aiming to
            ensure safety, reliability, and legal clarity.
          </p>
          <p>
            With the right mix of policy support, incremental adoption, and
            local innovation, India has the opportunity to define a version of
            autonomous mobility that works for its roads, its people, and its
            pace.
          </p>
          <hr />
          <h3>Conclusion: A Different Road to Autonomy</h3>
          <p>
            Autonomous driving in India isn’t a question of if, but how. The
            journey will not mirror that of the West, where structured roads and
            disciplined traffic make it easier to deploy self-driving cars.
            Instead, India will likely follow a different route—one built on
            gradual integration of assistive technologies, tailored innovation,
            and real-world adaptation.
          </p>
          <p>
            With ongoing development in ADAS features, supportive government
            regulations, and expanding R&D, a meaningful level of vehicle
            autonomy on Indian roads could be achievable by 2035. It may begin
            with fleets, highways, and controlled zones—but it will steadily
            move closer to the everyday commute.
          </p>
          <p>
            Full autonomy might still be a distant dream, but the path is
            already forming. The future of driving in India might not be
            driverless just yet, but it will certainly be smarter.
          </p>
        </p>
        <div className="author">
          <p><strong>By Akshay Aggarwal</strong><br />- Founder, Intute.AI Technologies Pvt. Ltd.</p> 
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPage;
