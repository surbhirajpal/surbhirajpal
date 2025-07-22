import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { TiltCard } from "../TiltCard";

import "./Projects.scss";

export default function Projects() {
  return (
    <div className="projects">
      <Row gutter={30} className="projects__row1">
        <Col span={16}>
          <Link to="/db-navigator">
            <TiltCard>
              <img src="/db.png" className="projects__db" />
              <p className="projects__db-text tilt-card-text">DB Navigator App 2.0</p>
            </TiltCard>
          </Link>
        </Col>
        <Col span={8}>
          <Link to="/enhancing-bonds-remotely">
            <TiltCard>
              <img src="/nui.png" className="projects__nui" />
              <p className="projects__nui-text tilt-card-text">Little Links</p>
            </TiltCard>
          </Link>
        </Col>
      </Row>
      <Link to="/siemens-healthineers">
        <TiltCard>
          <img src="/siemens.png" className="projects__siemens" />
          <p className="projects__siemens-text tilt-card-text">Siemens Healthineers</p>
        </TiltCard>
      </Link>
      <Row gutter={30} className="projects__row2">
        <Col span={11}>
          <Link to="/sustain-feed">
            <div className="projects__sustainFeed-wrapper">
              <TiltCard>
                <img src="/sustainFeed.png" className="projects__sustainFeed" />
                <p className="projects__sustainFeed-text tilt-card-text">Sustain Feed</p>
              </TiltCard>
            </div>
          </Link>
          <Link to="/melody-motion">
            <TiltCard>
              <img src="/melodyMotion.png" className="projects__melodyMotion" />
              <p className="projects__melodyMotion-text tilt-card-text">Melody Motion</p>
              <p className="coming-soon ">Coming Soon</p>
            </TiltCard>
          </Link>
        </Col>
        <Col span={13}>
          <Link to="/cyclist-digital-support">
            <TiltCard>
              <img src="/cyclist.png" className="projects__cyclist" />
              <p className="projects__cyclist-text tilt-card-text">PedalPal</p>
            </TiltCard>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
