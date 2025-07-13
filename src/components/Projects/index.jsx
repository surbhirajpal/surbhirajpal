import { Col, Row } from "antd";
import "./Projects.scss";

export default function Projects() {
  return (
    <div className="projects">
      <Row gutter={30} className="projects__row1">
        <Col span={16}>
          <img src="/project-1.png" className="projects__project1" />
        </Col>
        <Col span={8}>
          <img src="/project-2.png" className="projects__project2" />
        </Col>
      </Row>
      <Row gutter={30} className="projects__row2">
        <Col span={11}>
          <div className="projects__project3-wrapper">
            <img src="/project-3.png" className="projects__project3" />
          </div>
          <div>
            <img src="/project-4.png" className="projects__project4" />
          </div>
        </Col>
        <Col span={13}>
          <img src="/project-5.png" className="projects__project5" />
        </Col>
      </Row>
    </div>
  );
}
