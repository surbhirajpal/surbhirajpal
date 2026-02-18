import { Badge, Row, Col } from "antd";
import {
    UserOutlined,
    ClockCircleOutlined,
    ToolOutlined,
    MobileOutlined
} from '@ant-design/icons';

export default function HeroSection() {
    return (
        <section className="hero-section">
            <Row gutter={[64, 48]} align="middle">
                <Col xs={24} lg={10}>
                    <div className="hero-mockup">
                        <div className="mockup-bg"></div>
                        <div className="mockup-frame">
                            <img src="/DB-navigator/mockup.png" alt="DB Navigator 2.0" />
                        </div>
                        <div className="satisfaction-badge">
                            <p className="label">Satisfaction</p>
                            <div className="stats">
                                <span className="value">4.8</span>
                                <span className="growth">▲ 12%</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={24} lg={14}>
                    <div className="hero-content">
                        <Badge className="case-study-badge" count="Product Design Case Study" />
                        <h1 className="main-title">
                            DB Navigator <span className="highlight">2.0</span>
                        </h1>
                        <p className="description">
                            Reimagining the travel experience for millions of Deutsche Bahn passengers through a simplified booking flow and intelligent journey assistance.
                        </p>

                        <div className="project-meta">
                            <Row gutter={[32, 24]}>
                                <Col xs={12} sm={12}>
                                    <div className="meta-item">
                                        <div className="meta-header">
                                            <UserOutlined />
                                            <span>Role</span>
                                        </div>
                                        <p>UI/UX Researcher and Designer</p>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12}>
                                    <div className="meta-item">
                                        <div className="meta-header">
                                            <ClockCircleOutlined />
                                            <span>Duration</span>
                                        </div>
                                        <p>4 Weeks (Concept)</p>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12}>
                                    <div className="meta-item">
                                        <div className="meta-header">
                                            <ToolOutlined />
                                            <span>Tools</span>
                                        </div>
                                        <p>Miro, Sketch, Figma, Adobe Illustrator, Adobe After Effects</p>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12}>
                                    <div className="meta-item">
                                        <div className="meta-header">
                                            <MobileOutlined />
                                            <span>Platform</span>
                                        </div>
                                        <p>iOS & Android</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    );
}
