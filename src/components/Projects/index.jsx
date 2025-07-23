import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { TiltCard } from "../TiltCard";

import "./Projects.scss";

export function DbProject({ prev, next }) {
  return (
    <Link to="/db-navigator">
      <TiltCard>
        <img src="/db.png" className="projects__db" />
        <div className={`projects__db-text tilt-card-text-container ${prev ? "prev" : next ? "next" : ""}`}>
          <p className={`tilt-card-text`}>
            DB Navigator App 2.0
          </p>
          <p className="navigate">
            {prev ? "Previous Project" : next ? "Next Project" : ""}
          </p>
        </div>
      </TiltCard>
    </Link>
  );
}

export function LittleLinks({ prev, next }) {
  return (
    <Link to="/enhancing-bonds-remotely">
      <TiltCard>
        <img src="/nui.png" className="projects__nui" />
        <div className={`projects__nui-text tilt-card-text-container ${prev ? "prev" : next ? "next" : ""}`}>
          <p className={`tilt-card-text`}>
            Little Links
          </p>
          <p className="navigate">
            {prev ? "Previous Project" : next ? "Next Project" : ""}
          </p>
        </div>
      </TiltCard>
    </Link>
  );
}

export function Siemens({ prev, next }) {
  return (
    <Link to="/siemens-healthineers">
      <TiltCard>
        <img src="/siemens.png" className="projects__siemens" />
        <div className={`projects__siemens-text tilt-card-text-container ${prev ? "prev" : next ? "next" : ""}`}>
          <p className={`tilt-card-text ${prev ? "prev" : next ? "next" : ""}`}>
            Siemens Healthineers
          </p>
          <p className="navigate">
            {prev ? "Previous Project" : next ? "Next Project" : ""}
          </p>
        </div>
      </TiltCard>
    </Link>
  );
}

export function SustainFeed({ prev, next }) {
  return (
    <Link to="/sustain-feed">
      <div className="projects__sustainFeed-wrapper">
        <TiltCard>
          <img src="/sustainFeed.png" className="projects__sustainFeed" />
          <div className={`projects__sustainFeed-text tilt-card-text-container ${prev ? "prev" : next ? "next" : ""}`}>
            <p className={`tilt-card-text ${prev ? "prev" : next ? "next" : ""}`}>
              Sustain Feed
            </p>
            <p className="navigate">
              {prev ? "Previous Project" : next ? "Next Project" : ""}
            </p>
          </div>
        </TiltCard>
      </div>
    </Link>
  );
}

export function MelodyMotion({ prev, next }) {
  return (
    <Link to="/">
      <TiltCard>
        <img src="/melodyMotion.png" className="projects__melodyMotion" />
        <div className={`projects__melodyMotion-text tilt-card-text-container ${prev ? "prev" : next ? "next" : ""}`}>
          <p className={`tilt-card-text  ${prev ? "prev" : next ? "next" : ""}`}>
            Melody Motion
          </p>
        </div>
        <p className="coming-soon ">Coming Soon</p>
      </TiltCard>
    </Link>
  );
}

export function PedalPal({ prev, next }) {
  return (
    <Link to="/cyclist-digital-support">
      <TiltCard>
        <img src="/cyclist.png" className="projects__cyclist" />
        <div className={`projects__cyclist-text tilt-card-text-container ${prev ? "prev" : next ? "next" : ""}`}>
          <p className={`tilt-card-text`}>PedalPal</p>
          <p className="navigate">
            {prev ? "Previous Project" : next ? "Next Project" : ""}
          </p>
        </div>
      </TiltCard>
    </Link>
  );
}

export default function Projects() {
  return (
    <div className="projects">
      <Row gutter={30} className="projects__row1">
        <Col span={16}>
          <DbProject />
        </Col>
        <Col span={8}>
          <LittleLinks />
        </Col>
      </Row>
      <Siemens />
      <Row gutter={30} className="projects__row2">
        <Col span={11}>
          <SustainFeed />
          <MelodyMotion />
        </Col>
        <Col span={13}>
          <PedalPal />
        </Col>
      </Row>
    </div>
  );
}
