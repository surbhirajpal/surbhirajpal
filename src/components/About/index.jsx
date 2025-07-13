import { Divider, Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./About.scss";

export default function Hero() {
  return (
    <>
      <Divider />
      <div className="about">
        <div className="about__intro">
          <Row gutter={30}>
            <Col span={6}>
              <h1>{"Hello."}</h1>
            </Col>
            <Col span={18}>
              <h2>
                {
                  "I'm Surbhi, designer-developer based in Germany. I love crafting clean, intuitive experiences that connect with people. With roots in both UX and frontend, I'm always chasing that sweet spot where design makes technology feel simple."
                }
              </h2>
            </Col>
          </Row>
        </div>

        <div className="about__help">
          <Row gutter={30}>
            <Col span={6}>
              <h2>{"How I Can Help"}</h2>
            </Col>
            <Col span={18}>
              <p>
                {"I help teams turn "}
                <strong>
                  {"complex ideas into clear, user-focused digital solutions. "}
                </strong>
                {"From "}
                <strong>{"wireframes and design systems "}</strong>
                {"to "}
                <strong>{"responsive UI and interactive prototypes "}</strong>
                {"and "}
                <strong>{"interactive prototypes "}</strong>
                {
                  "I bridge the gap between design and development. I collaborate closely with "
                }
                <strong>{"stakeholders "}</strong>
                {"to align goals, speed up decision-making, and deliver "}
                <strong>
                  {"thoughtful experiences across web and mobile platforms."}
                </strong>
              </p>
            </Col>
          </Row>
        </div>

        <div className="about__connect">
          <Row gutter={30}>
            <Col span={6}>
              <h2>{"Let's Connect"}</h2>
            </Col>
            <Col span={18}>
              <Divider />
              <a className="about__link" href={""}>
                <p>{"Email"}</p>
                <ArrowRightOutlined />
              </a>

              <Divider />
              <a className="about__link" href={""}>
                <p>{"LinkedIn"}</p>
                <ArrowRightOutlined />
              </a>

              <Divider />
              <a className="about__link" href={""}>
                <p>{"Behance"}</p>
                <ArrowRightOutlined />
              </a>
            </Col>
          </Row>
        </div>
      </div>
      <Divider />
    </>
  );
}
