import { motion } from "framer-motion";
import { Divider, Row, Col, Carousel } from "antd";

import { useScreenSize } from "../../hooks/useScreenSize";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./Siemens.scss";

export default function Siemens() {
  const screenSize = useScreenSize();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="project siemens"
    >
      <Header subtitle="Siemens Healthineers" />

      <div className="container">
        <div className="siemens__hero">
          <h1 className="project__hero-title">
            {"Atellica Connect POC Insights"}
          </h1>

          <p className="project__section-title">{"1. OVERVIEW"}</p>
          <p className="project__section-description">
            Atellica Connect POC Insights is a unified middleware platform that
            consolidates point-of-care testing data from multiple device vendors
            into a single, intuitive dashboard. Designed in close collaboration
            with POC coordinators, it streamlines device monitoring, operator
            management, and quality compliance—so healthcare teams can focus on
            patient care rather than IT complexity
          </p>
          <div className="project__hero-img">
            <img src="/siemens/hero.png" />
          </div>
        </div>
        <Divider />

        <div className="siemens__problem">
          <p className="project__section-title">{"2. PROBLEM STATEMENT"}</p>
          <p className="project__section-subtitle">
            {"Issues faced by Point-of-care managers"}
          </p>
          <Row gutter={60} align={"stretch"} justify={"space-between"}>
            <Col span={screenSize === "xs" ? 24 : 6}>
              <div className="siemens__problem-card">
                <img src="/siemens/technology.png" />
                <p>
                  Fragmented IT Environments: Multiple middleware solutions,
                  each requiring its own training and servers
                </p>
              </div>
            </Col>
            <Col span={screenSize === "xs" ? 24 : 6}>
              <div className="siemens__problem-card">
                <img src="/siemens/info.png" />
                <p>
                  Information Overload: Static reports with no built-in
                  analytics make trend analysis slow and error-prone
                </p>
              </div>
            </Col>
            <Col span={screenSize === "xs" ? 24 : 6}>
              <div className="siemens__problem-card">
                <img src="/siemens/training.png" />
                <p>
                  Operator Certification Burden: Tracking thousands of operator
                  competencies and recertifications manually is time-consuming
                  and risks noncompliance
                </p>
              </div>
            </Col>
            <Col span={screenSize === "xs" ? 24 : 6}>
              <div className="siemens__problem-card">
                <img src="/siemens/service.png" />
                <p>
                  Quality & Compliance Gaps: Manual QC checks and audit trails
                  create delays in identifying and resolving deviations
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <Divider />

        <div className="siemens__solution">
          <p className="project__section-title">{"3. Solution Snapshot"}</p>
          <p className="project__section-subtitle">
            {
              "Interactive dashboards, actionable alerts, and compliance automation."
            }
          </p>

          <Row gutter={60} align={"middle"} justify={"space-around"}>
            <Col span={screenSize === "xs" ? 24 : 12}>
              <img src="/siemens/dashboard.webp" />
            </Col>
            <Col span={screenSize === "xs" ? 24 : 12}>
              <ul>
                <li>
                  <strong>Status Dashboard:</strong> Live QC metrics and device
                  monitoring
                </li>
                <li>
                  <strong>Custom Alerts:</strong> Click-through notifications
                  for rapid issue resolution
                </li>
                <li>
                  <strong>e-Learning Modules:</strong>Built-in operator training
                  and recertification
                </li>
                <li>
                  <strong>Digital Audit Trail:</strong> Automated logs and
                  on-demand compliance reports
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <Divider />

        <div className="siemens__images">
          <Carousel arrows={true} autoplay={true} className="custom-carousel">
            <div>
              <img src="/siemens/siemens-1.webp" />
            </div>
            <div>
              <img src="/siemens/siemens-2.webp" />
            </div>
            <div>
              <img src="/siemens/siemens-3.webp" />
            </div>
            <div>
              <img src="/siemens/siemens-4.webp" />
            </div>
            <div>
              <img src="/siemens/siemens-5.webp" />
            </div>
          </Carousel>
        </div>
        <Divider />

        <p className="project__section-description">
          <i>
            Images and content referred from Siemens Healthineers{" "}
            <a
              href="https://www.siemens-healthineers.com/en-uk/informatics/informatics-solutions/atellica-connect."
              target="blank"
            >
              Atellica Connect.
            </a>
          </i>{" "}
          Please reach out for more details.
        </p>
      </div>
      <Footer project="siemens" />
    </motion.div>
  );
}
