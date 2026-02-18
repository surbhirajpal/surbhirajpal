import { Card, Row, Col } from "antd";

export default function ResearchSection() {
    return (
        <section className="research-section">
            <div className="section-header">
                <h2 className="section-label">Research & Insights</h2>
                <h3 className="section-title">What travelers told us</h3>
            </div>

            <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                    <Card className="insight-card">
                        <div className="insight-image">
                            <img src="/DB-navigator/research1.png" alt="Research insight" />
                        </div>
                        <p className="quote">
                            "When my train was cancelled, I had no idea what to do next, followed the crowd!"
                        </p>
                        <p className="attribution">— First-time ICE traveler</p>
                    </Card>
                </Col>
                <Col xs={24} md={8}>
                    <Card className="insight-card">
                        <div className="insight-image">
                            <img src="/DB-navigator/research2.png" alt="Research insight" />
                        </div>
                        <p className="quote">
                            "Choosing a seat feels like guessing how crowded each coach will be."
                        </p>
                        <p className="attribution">— Regular long-distance commuter</p>
                    </Card>
                </Col>
                <Col xs={24} md={8}>
                    <Card className="insight-card">
                        <div className="insight-image">
                            <img src="/DB-navigator/research3.png" alt="Research insight" />
                        </div>
                        <p className="quote">
                            "I never know if I should bring food or rely on onboard meals."
                        </p>
                        <p className="attribution">— Occasional traveler (4–6 hour routes)</p>
                    </Card>
                </Col>
            </Row>
        </section>
    );
}
