import { Divider, Row, Col } from "antd";
import { useScreenSize } from "../../hooks/useScreenSize";

import {
  DbProject,
  LittleLinks,
  Siemens,
  SustainFeed,
  PedalPal,
} from "../Projects";
import "./Footer.scss";

export default function Footer({ project }) {
  const screenSize = useScreenSize();

  return (
    <div className="footer">
      <div className="container">
        {project === "db" ? (
          <Row align={"middle"} gutter={screenSize === "xs" ? 10 : 60} className="footer__projects">
            <Col span={12}>
              <PedalPal prev={true} inFooter={true} />
            </Col>
            <Col span={12}>
              <LittleLinks next={true} inFooter={true} />
            </Col>
          </Row>
        ) : null}

        {project === "littleLinks" ? (
          <Row align={"middle"} gutter={screenSize === "xs" ? 10 : 60} className="footer__projects">
            <Col span={12}>
              <DbProject prev={true} inFooter={true} />
            </Col>
            <Col span={12}>
              <Siemens next={true} inFooter={true} />
            </Col>
          </Row>
        ) : null}

        {project === "siemens" ? (
          <Row align={"middle"} gutter={screenSize === "xs" ? 10 : 60} className="footer__projects">
            <Col span={12}>
              <LittleLinks prev={true} inFooter={true} />
            </Col>
            <Col span={12}>
              <SustainFeed next={true} inFooter={true} />
            </Col>
          </Row>
        ) : null}

        {project === "sustainFeed" ? (
          <Row align={"middle"} gutter={screenSize === "xs" ? 10 : 60} className="footer__projects">
            <Col span={12}>
              <Siemens prev={true} inFooter={true} />
            </Col>
            <Col span={12}>
              <PedalPal next={true} inFooter={true} />
            </Col>
          </Row>
        ) : null}

        {project === "pedalPal" ? (
          <Row align={"middle"} gutter={screenSize === "xs" ? 10 : 60} className="footer__projects">
            <Col span={12}>
              <SustainFeed prev={true} inFooter={true} />
            </Col>
            <Col span={12}>
              <DbProject next={true} inFooter={true} />
            </Col>
          </Row>
        ) : null}

        <div className="social-links">
          <a
            className="social-link"
            href={"mailto:surbhirajpal.jobs@gmail.com"}
          >
            <img src="/footer/gmail.png" />
          </a>

          <a
            className="social-link"
            href={"https://www.linkedin.com/in/surbhi-rajpal-a91711184/"}
            target="_blank"
          >
            <img src="/footer/linkedin.png" />
          </a>

          <a
            className="social-link"
            href={"https://www.behance.net/surbhirajpal"}
            target="_blank"
          >
            <img src="/footer/behance.png" />
          </a>

          <a
            className="social-link"
            href={"https://github.com/surbhirajpal"}
            target="_blank"
          >
            <img src="/footer/github.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
