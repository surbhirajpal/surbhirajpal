import React from "react";
import { motion } from "framer-motion";
import { Row, Col, Progress, Carousel } from "antd";
import {
  MedicineBoxOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  BankOutlined,
  EyeOutlined,
  BellOutlined,
  ThunderboltOutlined,
  FundOutlined,
  SafetyOutlined,
  SearchOutlined,
  BulbOutlined,
  CodeOutlined,
  SendOutlined,
  AlertOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  ScanOutlined,
  ReadOutlined,
  CheckCircleOutlined,
  LockOutlined,
  ExperimentOutlined,
  LeftOutlined,
  RightOutlined,
  DownOutlined,
} from "@ant-design/icons";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./siemens-healthineers.scss";

const stats = [
  { icon: <MedicineBoxOutlined />, value: "500+", label: "Devices Monitored" },
  { icon: <TeamOutlined />, value: "1000+", label: "Daily Users" },
  { icon: <ClockCircleOutlined />, value: "24/7", label: "Critical Operations" },
  { icon: <BankOutlined />, value: "50+", label: "Hospital Sites" },
];

const challenges = [
  { label: "High data density", percent: 90, stroke: { from: "#ff6900", to: "#ff8904" } },
  { label: "Alert fatigue", percent: 85, stroke: "#ff6900" },
  { label: "Poor scannability", percent: 75, stroke: { from: "#ff8904", to: "#ffb86a" } },
  { label: "Steep learning curve", percent: 70, stroke: { from: "#ff6900", to: "#ff8904" } },
  { label: "Missed critical info", percent: 95, stroke: { from: "#f97316", to: "#ff6900" } },
];

const roleSteps = [
  { icon: <SearchOutlined />, title: "Research", desc: "Clinical workflow mapping, user task analysis" },
  { icon: <BulbOutlined />, title: "Design", desc: "Alert systems, data-dense dashboards, visual hierarchy" },
  { icon: <CodeOutlined />, title: "Prototype", desc: "High-fidelity interactive demos with real data" },
  { icon: <SendOutlined />, title: "Deliver", desc: "Engineering handoff, stakeholder alignment" },
];

const contributions = [
  "Alert-driven architecture",
  "Progressive disclosure patterns",
  "Consistent screen system",
  "Data visualization",
];

const principles = [
  { num: "01", icon: <EyeOutlined />, title: "Immediate Visibility", desc: "Critical information surfaces instantly, no hunting required" },
  { num: "02", icon: <BellOutlined />, title: "Zero Missed Alerts", desc: "Visual hierarchy ensures alerts are impossible to overlook" },
  { num: "03", icon: <ThunderboltOutlined />, title: "Fast Decisions", desc: "Interface supports rapid, confident decision-making under pressure" },
  { num: "04", icon: <FundOutlined />, title: "Progressive Learning", desc: "Complexity revealed gradually, not eliminated" },
  { num: "05", icon: <SafetyOutlined />, title: "Clinical Integrity", desc: "Regulatory compliance and accuracy never compromised" },
];

const screenSlides = [
  {
    img: "/siemens-healthineers/screen-1.png",
    title: "Dashboard Overview Screen",
    desc: "Centralized command center for monitoring all critical metrics, alerts, and system status across devices and sites.",
    bullets: [
      "Alert summary cards with visual hierarchy prioritizing critical issues",
      "Device status grid showing real-time health across all connected instruments",
      "Critical notifications surfaced immediately without navigation",
    ],
  },
  {
    img: "/siemens-healthineers/screen-2.png",
    title: "Alert Detail Screen",
    desc: "Deep-dive view for investigating individual alerts with full context and resolution tools.",
    bullets: [
      "Alert severity classification with clear visual indicators",
      "Complete audit trail and timestamp history",
      "One-click resolution workflow with required documentation",
    ],
  },
  {
    img: "/siemens-healthineers/screen-3.png",
    title: "Device Management Screen",
    desc: "Comprehensive view of all connected diagnostic instruments across multiple hospital sites.",
    bullets: [
      "Real-time device health status with connectivity indicators",
      "Scheduled maintenance tracking and QC due dates",
      "Multi-site filtering and location-based grouping",
    ],
  },
  {
    img: "/siemens-healthineers/screen-4.png",
    title: "Quality Control Screen",
    desc: "Structured QC result review with pass/fail indicators and statistical trend analysis.",
    bullets: [
      "Levey-Jennings charts for QC trend visualization",
      "Automated flagging of out-of-range results",
      "Regulatory-compliant reporting and export tools",
    ],
  },
];

const outcomes = [
  { icon: <ThunderboltOutlined />, title: "Faster Responses", desc: <>Critical issues identified <span className="highlight">60% faster</span> with new alert hierarchy</> },
  { icon: <BellOutlined />, title: "Zero Missed Alerts", desc: <>Visual prioritization <span className="highlight">eliminates</span> overlooked critical information</> },
  { icon: <ScanOutlined />, title: "Improved Scannability", desc: <>Dense dashboards become <span className="highlight">easy to navigate</span> under pressure</> },
  { icon: <ReadOutlined />, title: "Better Learnability", desc: <>Consistent patterns reduce <span className="highlight">training time by 50%</span></> },
  { icon: <CheckCircleOutlined />, title: "Confident Decisions", desc: "Time-critical workflows supported with clarity and speed" },
  { icon: <ExperimentOutlined />, title: "Clinical Integrity", desc: "Regulatory compliance and accuracy fully maintained" },
];

const PrevArrow = ({ onClick }) => (
  <button className="carousel-arrow carousel-arrow-prev" onClick={onClick}>
    <LeftOutlined />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="carousel-arrow carousel-arrow-next" onClick={onClick}>
    <RightOutlined />
  </button>
);

export default function SiemensHealthineers() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="project siemens-healthineers"
    >
      <Header subtitle="Siemens Healthineers" />

      <div className="sh-container">

        {/* ── Hero ── */}
        <section className="hero-section">
          <Row gutter={[64, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div className="hero-content">
                <span className="case-study-badge">
                  <ExperimentOutlined /> Siemens Healthineers
                </span>
                <h1 className="main-title">
                  Atellica Connect<br />
                  <span className="title-orange">POC Insights</span>
                </h1>
                <p className="description">
                  Designing an alert-driven, data-dense clinical management system for high-pressure hospital environments
                </p>
                <div className="tag-row">
                  <span className="hero-tag">Enterprise Healthcare</span>
                  <span className="hero-tag">Point-of-Care</span>
                  <span className="hero-tag">Safety-Critical</span>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="hero-image-card">
                <img src="/siemens-healthineers/hero.png" alt="Atellica Connect POC Insights" />
              </div>
            </Col>
          </Row>
        </section>

        {/* ── Platform ── */}
        <section className="platform-section">
          <div className="section-heading">
            <span className="heading-accent" />
            <h2>The Platform</h2>
          </div>
          <div className="section-card">
          <Row gutter={[64, 48]}>
            <Col xs={24} lg={12}>
              <p className="body-text">
                Atellica Connect POC Insights is a browser-based point-of-care (POC) data management platform used in hospitals to monitor diagnostic devices, quality control processes, operators, and patient results across multiple sites.
              </p>
              <p className="body-text">
                The system operates in{" "}
                <span className="text-orange">high-pressure, time-critical clinical environments</span>
                {" "}where missed information can have serious consequences.
              </p>
            </Col>
            <Col xs={24} lg={12}>
              <div className="stats-grid">
                {stats.map((s) => (
                  <div className="stat-card" key={s.label}>
                    <div className="stat-icon">{s.icon}</div>
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
          </div>
        </section>

        {/* ── Challenge ── */}
        <section className="challenge-section">
          <div className="section-heading">
            <span className="heading-accent" />
            <h2>The Challenge</h2>
          </div>
          <div className="challenge-card">
          <p className="body-text section-intro">
            The problem wasn't <span className="text-orange">data availability</span> — it was{" "}
            <span className="text-orange">data usability</span>
          </p>
          <div className="challenge-inner">
            <Row gutter={[48, 32]}>
              <Col xs={24} lg={12}>
                <h3 className="sub-heading">Critical Issues Identified</h3>
                <div className="progress-list">
                  {challenges.map((c) => (
                    <div className="progress-item" key={c.label}>
                      <div className="progress-label">
                        <span>{c.label}</span>
                        <span className="progress-pct">{c.percent}%</span>
                      </div>
                      <Progress
                        percent={c.percent}
                        showInfo={false}
                        strokeColor={c.stroke}
                        trailColor="#e2e8f0"
                        strokeWidth={10}
                      />
                    </div>
                  ))}
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <div className="impact-card">
                  <div className="impact-card-header">
                    <span className="impact-dot" />
                    <span className="impact-title">Critical Impact</span>
                  </div>
                  <p className="impact-desc">
                    Dense, unstructured data creates cognitive overload for clinical staff
                  </p>
                  <div className="impact-stats">
                    <div className="impact-stat">
                      <div className="impact-stat-value">2.5x</div>
                      <div className="impact-stat-label">longer task time</div>
                    </div>
                    <div className="impact-stat">
                      <div className="impact-stat-value">40%</div>
                      <div className="impact-stat-label">error rate</div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          </div>
        </section>

        {/* ── My Role ── */}
        <section className="role-section">
          <div className="section-heading">
            <span className="heading-accent" />
            <h2>My Role</h2>
          </div>
          <div className="section-card role-card">
            <p className="body-text role-intro">
              UX Designer —{" "}
              <span className="text-orange">Complete platform redesign</span>
              {" "}from research through delivery
            </p>
            <div className="role-steps">
              {roleSteps.map((step) => (
                <div className="role-step" key={step.title}>
                  <div className="role-step-icon">{step.icon}</div>
                  <h4 className="role-step-title">{step.title}</h4>
                  <p className="role-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="contributions">
              <p className="contributions-label">Key Contributions</p>
              <div className="contributions-tags">
                {contributions.map((c) => (
                  <span className="contrib-tag" key={c}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Design Principles ── */}
        <section className="principles-section">
          <div className="section-heading">
            <span className="heading-accent" />
            <h2>Design Principles</h2>
          </div>
          <div className="section-card">
          <Row gutter={[16, 16]}>
            {principles.map((p) => (
              <Col xs={24} md={12} key={p.num}>
                <div className="principle-card">
                  <div className="principle-num">{p.num}</div>
                  <div className="principle-icon">{p.icon}</div>
                  <div className="principle-body">
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          </div>
        </section>

        {/* ── Design Approach ── */}
        <section className="approach-section">
          <div className="section-heading">
            <span className="heading-accent" />
            <h2>Design Approach</h2>
          </div>

          {/* Alert-Driven */}
          <div className="approach-block">
            <div className="approach-block-header">
              <div className="approach-icon"><AlertOutlined /></div>
              <div>
                <h3>Alert-Driven Interaction Model</h3>
                <p>
                  Instead of forcing users to navigate menus and hunt for problems, the system embraces{" "}
                  <span className="text-orange">"managing by exception"</span>. Alerts act as primary entry points, guiding users directly to what needs attention.
                </p>
              </div>
            </div>
            <div className="flow-diagram">
              {[
                { img: "/siemens-healthineers/flow1.png", label: "Alert" },
                { img: "/siemens-healthineers/flow2.png", label: "Investigation" },
                { img: "/siemens-healthineers/flow3.png", label: "Detail" },
                { img: "/siemens-healthineers/flow4.png", label: "Resolution" },
              ].map((step, i, arr) => (
                <React.Fragment key={step.label}>
                  <div className="flow-step">
                    <img src={step.img} alt={step.label} />
                    <span className="flow-step-label">{step.label}</span>
                  </div>
                  {i < arr.length - 1 && <span className="flow-arrow">→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Consistent Screen System */}
          <div className="approach-block">
            <div className="approach-block-header">
              <div className="approach-icon"><AppstoreOutlined /></div>
              <div>
                <h3>Consistent Screen System</h3>
                <p>
                  Five core screen types provide{" "}
                  <span className="text-orange">consistent patterns</span>
                  {" "}across all modules. Once learned in one area, that knowledge transfers everywhere — reducing cognitive load and accelerating onboarding.
                </p>
              </div>
            </div>
            <Carousel
              className="screen-carousel"
              dots
              arrows
              prevArrow={<PrevArrow />}
              nextArrow={<NextArrow />}
            >
              {screenSlides.map((slide) => (
                <div key={slide.title}>
                  <div className="carousel-slide">
                  <Row gutter={[32, 32]} align="middle">
                    <Col xs={24} lg={12}>
                      <div className="approach-image">
                        <img src={slide.img} alt={slide.title} />
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <h3 className="sub-heading-white">{slide.title}</h3>
                      <p className="body-text">{slide.desc}</p>
                      <ul className="approach-bullets">
                        {slide.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </Col>
                  </Row>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          {/* High Data Density */}
          <div className="approach-block">
            <div className="approach-block-header">
              <div className="approach-icon"><BarChartOutlined /></div>
              <div>
                <h3>Designing for High Data Density</h3>
                <p>
                  Clinical users need comprehensive information at a glance. Our approach:{" "}
                  <span className="text-orange">organize intelligently, don't simplify arbitrarily</span>.
                </p>
              </div>
            </div>
            <Row gutter={[24, 24]}>
              {/* Visual Hierarchy */}
              <Col xs={24} md={8}>
                <div className="density-card">
                  <h4 className="density-card-title">Visual Hierarchy</h4>
                  <div className="density-levels">
                    <div className="density-level level-critical">CRITICAL</div>
                    <div className="density-level level-warning">Warning</div>
                    <div className="density-level level-info">Info</div>
                    <div className="density-level level-normal">Normal</div>
                  </div>
                  <p className="density-card-desc">Size, color, and position guide attention to what matters most</p>
                </div>
              </Col>
              {/* Progressive Disclosure */}
              <Col xs={24} md={8}>
                <div className="density-card">
                  <h4 className="density-card-title">Progressive Disclosure</h4>
                  <div className="disclosure-box">
                    <div className="disclosure-row">
                      <span className="disclosure-label">Overview</span>
                      <DownOutlined className="disclosure-icon" />
                    </div>
                    <div className="disclosure-children">
                      <div>→ Details</div>
                      <div className="disclosure-indent">→ Full Data</div>
                    </div>
                  </div>
                  <p className="density-card-desc">Start simple, reveal complexity on demand</p>
                </div>
              </Col>
              {/* Dual Representation */}
              <Col xs={24} md={8}>
                <div className="density-card">
                  <h4 className="density-card-title">Dual Representation</h4>
                  <div className="dual-views">
                    <div className="dual-view table-view">
                      <div className="table-rows">
                        <div className="table-row" />
                        <div className="table-row" />
                        <div className="table-row" />
                      </div>
                      <span>Table</span>
                    </div>
                    <div className="dual-view graph-view">
                      <div className="bars">
                        <div className="bar" style={{ height: "24px", background: "#51a2ff" }} />
                        <div className="bar" style={{ height: "32px", background: "#ff8904" }} />
                        <div className="bar" style={{ height: "20px", background: "#51a2ff" }} />
                        <div className="bar" style={{ height: "36px", background: "#ff6467" }} />
                      </div>
                      <span>Graph</span>
                    </div>
                  </div>
                  <p className="density-card-desc">Same data, different views reveal patterns and details</p>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* ── Impact & Outcomes ── */}
        <section className="outcomes-section">
          <div className="section-heading">
            <span className="heading-accent" />
            <h2>Impact &amp; Outcomes</h2>
          </div>
          <div className="section-card outcomes-grid">
          <Row gutter={[24, 24]}>
            {outcomes.map((o) => (
              <Col xs={24} md={8} key={o.title}>
                <div className="outcome-card">
                  <div className="outcome-icon">{o.icon}</div>
                  <h4>{o.title}</h4>
                  <p>{o.desc}</p>
                </div>
              </Col>
            ))}
          </Row>          </div>        </section>

        {/* ── Confidentiality Note ── */}
        <section className="confidentiality-note">
          <LockOutlined className="lock-icon" />
          <div>
            <h4>Confidentiality Note</h4>
            <p>
              All visuals in this case study are abstracted and anonymized representations. Actual product designs, data, and proprietary information remain confidential per NDA.
            </p>
          </div>
        </section>

      </div>
      <Footer project="siemens" />
    </motion.div>
  );
}
