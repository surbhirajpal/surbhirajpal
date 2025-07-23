import { Divider, Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./Connect.scss";

export default function Connect() {
  return (
    <div className="connect">
      <Row gutter={30}>
        <Col span={6}>
          <h2>{"Let's Connect"}</h2>
        </Col>
        <Col span={18}>
          <a
            className="connect__link"
            href={"mailto:surbhirajpal.jobs@gmail.com"}
          >
            <p>{"Email"}</p>
            <ArrowRightOutlined />
          </a>

          <Divider />
          <a
            className="connect__link"
            href={"https://www.linkedin.com/in/surbhi-rajpal-a91711184/"}
            target="_blank"
          >
            <p>{"LinkedIn"}</p>
            <ArrowRightOutlined />
          </a>

          <Divider />
          <a
            className="connect__link"
            href={"https://www.behance.net/surbhirajpal"}
            target="_blank"
          >
            <p>{"Behance"}</p>
            <ArrowRightOutlined />
          </a>

          <Divider />
          <a
            className="connect__link"
            href={"https://github.com/surbhirajpal"}
            target="_blank"
          >
            <p>{"Github"}</p>
            <ArrowRightOutlined />
          </a>
        </Col>
      </Row>
    </div>
  );
}
