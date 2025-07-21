import { Col, Row } from "antd";
import { Link } from "react-router-dom";

import "./Projects.scss";

export default function Projects() {
  return (
    <div className="projects">
      <Row gutter={30} className="projects__row1">
        <Col span={16}>
          <Link to="/db-navigator">
            <div>
              <img src="/project-1.png" className="projects__project1" />
            </div>
          </Link>
        </Col>
        <Col span={8}>
          <Link to="/enhancing-bonds-remotely">
            <div>
              <img src="/project-2.png" className="projects__project2" />
            </div>
          </Link>
        </Col>
      </Row>
      <Row gutter={30} className="projects__row2">
        <Col span={11}>
          <Link to="/sustain-feed">
            <div className="projects__project3-wrapper">
              <img src="/project-3.png" className="projects__project3" />
            </div>
          </Link>
          <Link to="/melody-motion">
            <div>
              <img src="/project-4.png" className="projects__project4" />
            </div>
          </Link>
        </Col>
        <Col span={13}>
          <Link to="/cyclist-digital-support">
            <div>
              <img src="/project-5.png" className="projects__project5" />
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
