import { Row, Col } from "antd";
import {
    CustomerServiceOutlined,
    TeamOutlined,
    CoffeeOutlined
} from '@ant-design/icons';

export default function ChallengeSection() {
    return (
        <section className="challenge-section">
            <div className="section-header">
                <h2 className="section-label">The Challenge</h2>
                <h3 className="section-title">
                    Long-distance train travel introduces uncertainty before and during the journey.
                </h3>
            </div>

            <Row gutter={[48, 48]} align="middle">
                <Col xs={24} lg={11}>
                    <div className="before-screenshot">
                        <div className="image-wrapper">
                            <img src="/DB-navigator/before.png" alt="Existing interface" />
                            <div className="label-badge">Before</div>
                            <div className="callout-badge callout-badge-1">1</div>
                            <div className="callout-badge callout-badge-2">2</div>
                            <div className="callout-badge callout-badge-3">3</div>
                        </div>
                    </div>
                </Col>
                <Col xs={24} lg={13}>
                    <div className="challenge-content">
                        <div className="highlight-bar">
                            <p>
                                The redesign focuses on reducing uncertainty at three critical touchpoints where users currently lack control/information.
                            </p>
                        </div>

                        <div className="challenge-points">
                            <div className="challenge-point">
                                <div className="icon-wrapper">
                                    <CustomerServiceOutlined />
                                </div>
                                <div className="point-content">
                                    <h4>Reach support during disruptions</h4>
                                    <p>During delays or cancellations, users cannot contact support directly within the app context.</p>
                                </div>
                            </div>

                            <div className="challenge-point">
                                <div className="icon-wrapper">
                                    <TeamOutlined />
                                </div>
                                <div className="point-content">
                                    <h4>Assess seat availability efficiently</h4>
                                    <p>Users cannot compare coach fullness quickly or see a global overview of occupancy.</p>
                                </div>
                            </div>

                            <div className="challenge-point">
                                <div className="icon-wrapper">
                                    <CoffeeOutlined />
                                </div>
                                <div className="point-content">
                                    <h4>Plan food availability</h4>
                                    <p>Users don't know if meals are available, what options exist, or if they suit dietary needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    );
}
