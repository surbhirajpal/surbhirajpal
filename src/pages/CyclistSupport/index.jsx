import { motion } from "framer-motion";
import { Divider, Row, Col, Carousel } from "antd";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Screen from "./Screen";

import "./CyclistSupport.scss";

export default function CyclistSupport() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="project cycle"
    >
      <Header subtitle="PedalPal" />

      <div className="container">
        <div className="cycle__hero">
          <h1 className="project__hero-title">
            {"PedalPal: Digital Support Systems for Cyclists"}
          </h1>

          <p className="project__section-title">{"1. OVERVIEW"}</p>
          <p className="project__section-description">
            This project explores the design of a digital support system for
            cyclists, aimed at delivering real-time hazard alerts and safety
            notifications without interrupting the ride. By integrating GPS
            tracking, traffic updates, and context-aware warnings into a
            minimalist, glance-friendly interface, we ensure riders receive
            accurate, timely information that enhances their safety without
            causing distraction.
          </p>
          <div className="project__hero-img">
            <img src="/cyclist/hero.png" />
          </div>
        </div>
        <Divider />

        <div className="cycle__problem">
          <p className="project__section-title">{"2. PROBLEM STATEMENT"}</p>
          <p className="project__section-subtitle">
            A glimpse into what lies ahead.
          </p>
          <p className="project__section-description">
            Cyclists face significant safety risks from unexpected hazards, and
            timely alerts are crucial for preventing accidents and ensuring a
            safe riding experience.
          </p>
        </div>
        <Divider />

        <div className="cycle__design-thinking">
          <p className="project__section-title">
            {"3. DESIGN THINKING PROCESS"}
          </p>
          <p className="project__section-subtitle">
            Journey from insight to solution.
          </p>
          <div className="cycle__design-thinking-image">
            <img src="/cyclist/design-thinking.png" />
          </div>
        </div>
        <Divider />

        <div className="cycle__research">
          <p className="project__section-title">{"4. Initial Research"}</p>
          <p className="project__section-subtitle">
            Some stats to have a closer look.
          </p>
          <Row align={"middle"} justify={"space-between"}>
            <Col span={4}>
              <div className="cycle__research-card">
                <p className="cycle-stats">932</p>
                <p>
                  <strong>Bicyclist deaths in 2020, </strong>there were in the
                  United States, accounting for 2.4% of all traffic fatalities.
                </p>
              </div>
            </Col>

            <Col span={4}>
              <div className="cycle__research-card">
                <p className="cycle-stats">20%</p>
                <p>
                  Of bicyclist fatalities{" "}
                  <strong>occur between 6 PM and 9 PM</strong>, suggesting that
                  low-light conditions.
                </p>
              </div>
            </Col>

            <Col span={4}>
              <div className="cycle__research-card">
                <p className="cycle-stats">50%</p>
                <p>
                  of head and neck injuries in cyclists can be{" "}
                  <strong>prevented by wearing a helmet.</strong>
                </p>
              </div>
            </Col>

            <Col span={4}>
              <div className="cycle__research-card">
                <p className="cycle-stats">55%</p>
                <p>
                  Of adult cyclists <strong>regularly wear helmets</strong>{" "}
                  while riding bikes.
                </p>
              </div>
            </Col>

            <Col span={4}>
              <div className="cycle__research-card">
                <p className="cycle-stats">78%</p>
                <p>
                  Of bicycle accidents occur <strong>in urban areas</strong>
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <Divider />

        <div className="cycle__insights">
          <p className="project__section-title">
            {"5. Rider Insights & Challenges"}
          </p>
          <p className="project__section-subtitle">
            Balancing real needs with real-world roadblocks.
          </p>
          <Row gutter={60} align={"middle"} justify={"space-around"}>
            <Col span={12}>
              <img src="/cyclist/insights.png" />
            </Col>
            <Col span={12}>
              <ul>
                <li>
                  <strong>Seamless Integration:</strong> Cyclists need hazard
                  warnings and route guidance that blend into their natural
                  riding habits—no fiddling with menus or awkward hand
                  movements.
                </li>
                <li>
                  <strong>Accurate Real-Time Data:</strong> Reliable GPS
                  tracking, traffic updates, and hazard detection are essential
                  for safe decision-making on the fly.
                </li>
                <li>
                  <strong>Distraction-Free Alerts:</strong> Safety notifications
                  must grab attention immediately without pulling eyes off the
                  road.
                </li>
                <li>
                  <strong>Intuitive Glanceable Interface:</strong> Key
                  metrics—speed, upcoming hazards, turn arrows—should appear in
                  a clean, minimalist layout that’s legible at a glance.
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <Divider />

        <div className="cycle__persona">
          <p className="project__section-title">{"6. Rider Personas"}</p>
          <p className="project__section-subtitle">
            Profiling cyclists to tailor a safer riding experience.
          </p>
          <Carousel autoplay={true} className="custom-carousel">
            <div>
              <img src="/cyclist/persona-1.png" />
            </div>
            <div>
              <img src="/cyclist/persona-2.png" />
            </div>
          </Carousel>
        </div>
        <Divider />

        <div className="cycle__low-fed">
          <p className="project__section-title">
            {"7. Low-Fidelity Prototypes"}
          </p>
          <p className="project__section-subtitle">
            Early sketches to validate core interactions.{" "}
          </p>
          <div className="cycle__design-thinking-image">
            <img src="/cyclist/low-fed.png" />
          </div>
        </div>
        <Divider />

        <div className="cycle__high-fed">
          <p className="project__section-title">
            {"8. High-Fidelity Prototypes"}
          </p>
          <p className="project__section-subtitle">
            {"Polished designs bringing validated concepts to life."}
          </p>
          <Screen />
        </div>
        <Divider />

        <img src="/cyclist/screens.png" />
        <Divider />

        <div className="cycle__persona">
          <Carousel autoplay={true} className="custom-carousel">
            <div>
              <img src="/cyclist/scenario1.png" />
            </div>
            <div>
              <img src="/cyclist/scenario2.png" />
            </div>
            <div>
              <img src="/cyclist/scenario3.png" />
            </div>
            <div>
              <img src="/cyclist/scenario4.png" />
            </div>
            <div>
              <img src="/cyclist/scenario5.png" />
            </div>
            <div>
              <img src="/cyclist/scenario6.png" />
            </div>
            <div>
              <img src="/cyclist/scenario7.png" />
            </div>
            <div>
              <img src="/cyclist/scenario8.png" />
            </div>
            <div>
              <img src="/cyclist/scenario9.png" />
            </div>
            <div>
              <img src="/cyclist/scenario10.png" />
            </div>
          </Carousel>
        </div>
        <Divider />

        <p className="project__section-description">
          {
            "Note: Only key screens are displayed here to safeguard the full design. Reach out for an in-depth preview."
          }
        </p>
      </div>
      <Footer project="pedalPal" />
    </motion.div>
  );
}
