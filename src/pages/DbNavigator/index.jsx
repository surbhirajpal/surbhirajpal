import { motion } from "framer-motion";
import { Divider, Row, Col } from "antd";

import Header from "../../components/Header";

import "./DbNavigator.scss";

export default function DbNavigator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="project db"
    >
      <div className="container">
        <Header />

        <div className="db__hero">
          <h1 className="project__hero-title">
            {"DB Navigator App 2.0 - Case Study"}
          </h1>

          <p className="project__section-title">{"1. OVERVIEW"}</p>
          <p className="project__section-description">
            This case study showcases how innovation was balanced with
            practicality to enhance the DB Navigator app - bringing clarity,
            speed, and convenience to an already trusted rail network. Explore
            the design decisions, tools, and processes that shaped a more
            accessible, human-centered travel experience for Deutsche Bahn
            passengers.
          </p>
          <div className="project__hero-img">
            <img src="/project1/hero.png" />
          </div>
        </div>
        <Divider />

        <div className="db__problem">
          <p className="project__section-title">{"2. PROBLEM STATEMENT"}</p>
          <p className="project__section-subtitle">
            {"A snapshot of whats ahead."}
          </p>
          <p className="project__section-description">
            Deutsche Bahn's DB Navigator app is the company's flagship mobile
            tool for planning and managing train travel across one of Europe's
            largest and most meticulously maintained rail networks. Despite
            Deutsche Bahn's reputation for extensive coverage, punctuality, and
            dependable service, the DB Navigator app falls short of the same
            level of seamlessness and intuitive interaction, making it harder
            than necessary for passengers to quickly discover connections,
            compare ticket options, and complete their bookings.
          </p>
        </div>
        <Divider />

        <div className="db__design-thinking">
          <p className="project__section-title">
            {"3. DESIGN THINKING PROCESS"}
          </p>
          <p className="project__section-subtitle">
            {"Empathy-driven steps to user-centric solutions."}
          </p>
          <img src="/project1/design-thinking.png" />
        </div>
        <Divider />

        <div className="db__problem-solution">
          <p className="project__section-title">{"4. KEY CHALLENGES"}</p>
          <p className="project__section-subtitle">
            {"Turning pain points into polished experiences."}
          </p>
          <Row gutter={60} align={"top"} justify={"space-around"}>
            <Col span={8}>
              <h2>{"Challenges"}</h2>
              <ul>
                <li>
                  {
                    "The seat reservation flow is convoluted, making it difficult to view availability and secure a preferred seat quickly"
                  }
                </li>

                <li>
                  {
                    "Booked tickets get buried in the menu, preventing users from accessing their passes at a glance."
                  }
                </li>

                <li>
                  {
                    "The app lacks in-trip conveniences like meal ordering and a clear, real-time train status view."
                  }
                </li>
              </ul>
            </Col>
            <Col span={8}>
              <h2>{"Proposed Design Solutions"}</h2>
              <ul>
                <li>
                  {
                    "Simplify the app's navigation with a streamlined menu and quick-access shortcuts."
                  }
                </li>

                <li>
                  {
                    "Integrate meal selection directly into the ticket checkout flow for in-journey ordering."
                  }
                </li>

                <li>
                  {
                    "Provide a live train tracking dashboard, shareable with friends and family."
                  }
                </li>
                <li>
                  {
                    "Feature to conenct with DB authorities for real-time support."
                  }
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <Divider />

        {/* <div className="db__info-arch">
          <p className="project__section-title">
            {"5. INFORMATION ARCHITECTURE"}
          </p>
          <p className="project__section-subtitle">
            {"Structuring content for effortless exploration."}
          </p>
          <img src="/project1/info-arch.png" />
        </div>
        <Divider /> */}

        <div className="db__design-system">
          <p className="project__section-title">{"5. DESIGN SYSTEM"}</p>
          <p className="project__section-subtitle">
            {"Consistent components, cohesive experience."}
          </p>
          <Row gutter={60} align={"center"} justify={"space-around"}>
            <Col span={10}>
              <img src="/project1/color-typo.png" />
            </Col>
            <Col span={14}>
              <img src="/project1/icons.png" />
            </Col>
          </Row>
        </div>
        <Divider />

        <div className="db__low-fed">
          <p className="project__section-title">
            {"6. DESIGN CONCEPT - LOW FIDELITY PROTOTYPE"}
          </p>
          <p className="project__section-subtitle">
            {"Sketching user flows before pixels take shape."}
          </p>
          <Row gutter={30}>
            <Col span={8}>
              <p>{""}</p>
              <img src="/project1/low-fed-1.png" />
            </Col>
            <Col span={8}>
              <p>{""}</p>
              <img src="/project1/low-fed-2.png" />
            </Col>
            <Col span={8}>
              <p>{""}</p>
              <img src="/project1/low-fed-3.png" />
            </Col>
          </Row>
        </div>
        <Divider />

        <div className="db__low-fed-results">
          <p className="project__section-title">
            {"7. LOW FIDELITY PROTOTYPE TESTING"}
          </p>
          <p className="project__section-subtitle">
            {"Early feedback to refine the experience."}
          </p>
          <Row gutter={60} align={"top"} justify={"space-around"}>
            <Col span={8}>
              <h2>{"UT1 Findings"}</h2>
              <ul>
                <li>{"Login compulsion to complete payment process."}</li>

                <li>
                  {"Lack of clear navigation to access purchased ticket."}
                </li>

                <li>{"Endless scrolling for seat selection."}</li>
              </ul>
            </Col>
            <Col span={8}>
              <h2>{"Ideation to Improve Interface"}</h2>
              <ul>
                <li>{"Login to be made optional"}</li>

                <li>
                  {"Change coach feature to be implemented in seat selection"}
                </li>

                <li>{"Check live status feature to be implemented"}</li>
              </ul>
            </Col>
          </Row>
        </div>
        <Divider />

        <div className="db__high-fed">
          <p className="project__section-title">
            {"8. HIGH FIDELITY PROTOTYPE"}
          </p>
          <p className="project__section-subtitle">
            {"Polished screens that mirror real interactions."}
          </p>
          <div className="db__high-fed-section">
            <p>{""}</p>
            <img src="/project1/high-fed-1.png" />
          </div>
          <div className="db__high-fed-section">
            <p>{""}</p>
            <img src="/project1/high-fed-2.png" />
          </div>
          <div className="db__high-fed-section">
            <p>{""}</p>
            <img src="/project1/high-fed-3.png" />
          </div>
        </div>
        <Divider />

        <p className="project__section-description">
          {
            "Note: Only key screens are displayed here to safeguard the full design. Reach out for an in-depth preview."
          }
        </p>
      </div>
    </motion.div>
  );
}
