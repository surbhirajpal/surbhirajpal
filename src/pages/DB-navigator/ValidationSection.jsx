import { Card, Row, Col } from "antd";
import {
    UserOutlined,
    ClockCircleOutlined,
    CustomerServiceOutlined,
    CheckCircleOutlined,
    ThunderboltOutlined,
    TrophyOutlined
} from '@ant-design/icons';

export default function ValidationSection() {
    return (
        <section className="validation-section">
            <div className="section-header">
                <h2 className="section-label">Validation & Impact</h2>
                <h3 className="section-title">
                    Moderated usability testing with 12 long-distance travelers
                </h3>
            </div>

            {/* Metrics Cards */}
            <Row gutter={[32, 24]} className="metrics-row">
                <Col xs={24} md={8}>
                    <Card className="metric-card">
                        <div className="metric-header">
                            <div className="metric-icon">
                                <CheckCircleOutlined />
                            </div>
                            <h4>Task Success Rate</h4>
                        </div>
                        <div className="metric-value">
                            <span className="number">11/12</span>
                            <span className="label">92% success</span>
                        </div>
                        <p>Participants successfully completed booking with meal planning and seat selection without assistance.</p>
                    </Card>
                </Col>

                <Col xs={24} md={8}>
                    <Card className="metric-card">
                        <div className="metric-header">
                            <div className="metric-icon">
                                <TrophyOutlined />
                            </div>
                            <h4>SUS Score</h4>
                        </div>
                        <div className="metric-value">
                            <span className="number">78</span>
                            <span className="label">Good</span>
                        </div>
                        <p>System Usability Scale indicates users found the redesigned experience intuitive and learnable.</p>
                    </Card>
                </Col>

                <Col xs={24} md={8}>
                    <Card className="metric-card">
                        <div className="metric-header">
                            <div className="metric-icon">
                                <ThunderboltOutlined />
                            </div>
                            <h4>Avg. Task Time</h4>
                        </div>
                        <div className="metric-value">
                            <span className="number">2m 45s</span>
                            <span className="label">-38% faster</span>
                        </div>
                        <p>Complete booking flow including meal and seat selection, down from estimated 4m 25s in current app.</p>
                    </Card>
                </Col>
            </Row>

            {/* Methodology Section */}
            <div className="methodology-section">
                <Row gutter={[24, 24]} className="methodology-cards">
                    <Col xs={24} sm={12} md={6}>
                        <div className="method-card">
                            <div className="method-header">
                                <div className="method-icon">
                                    <UserOutlined />
                                </div>
                                <h5>12 Users</h5>
                            </div>
                            <p>Frequent travelers, ages 24–58</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <div className="method-card">
                            <div className="method-header">
                                <div className="method-icon">
                                    <ClockCircleOutlined />
                                </div>
                                <h5>30–45 min</h5>
                            </div>
                            <p>Moderated sessions, mobile prototype</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <div className="method-card">
                            <div className="method-header">
                                <div className="method-icon">
                                    <CheckCircleOutlined />
                                </div>
                                <h5>4 Tasks</h5>
                            </div>
                            <p>Find coach, select meal, contact support</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <div className="method-card">
                            <div className="method-header">
                                <div className="method-icon">
                                    <CustomerServiceOutlined />
                                </div>
                                <h5>Think-Aloud</h5>
                            </div>
                            <p>Post-task interviews for insights</p>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* Key Findings */}
            <div className="key-findings-section">
                <h4>Key Findings</h4>

                {/* Finding 1: Meal Planning */}
                <Card className="finding-card finding-1">
                    <div className="finding-wrapper">
                        <div className="finding-visual">
                            <div className="journey-grid">
                                <div className="journey-item">
                                    <div className="step-icon">🎫</div>
                                    <p className="step-label">Booking<br />screen</p>
                                </div>
                                <div className="step-divider"></div>
                                <div className="journey-item active">
                                    <div className="step-icon meal">🍽️</div>
                                    <p className="step-label"><strong>Sees meal<br />12s</strong></p>
                                </div>
                                <div className="step-divider"></div>
                                <div className="journey-item">
                                    <div className="step-icon checked">✓</div>
                                    <p className="step-label">Selected</p>
                                </div>
                            </div>
                            <div className="finding-insight">
                                <strong>Zero hesitation</strong> — users understood context immediately
                            </div>
                        </div>
                        <div className="finding-content">
                            <div className="finding-badge success">
                                ✓ SUCCESS
                            </div>
                            <h5>Meal planning felt natural</h5>
                            <p>11/12 users found meal selection immediately. Average selection time: <strong>12 seconds</strong>.</p>
                            <blockquote>"I can just add this now? Usually I forget about food until I'm on the train."</blockquote>
                        </div>
                    </div>
                </Card>

                {/* Finding 2: Coach View */}
                <Card className="finding-card finding-2">
                    <div className="finding-wrapper">
                        <div className="finding-content">
                            <div className="finding-badge success">
                                ✓ SUCCESS
                            </div>
                            <h5>Coach view eliminated guesswork</h5>
                            <p>10/12 users clicked the coach with most "places left" without scrolling. Decision time: <strong>8 seconds</strong>.</p>
                            <blockquote>"I can see exactly how full each coach is. This makes it obvious where to sit."</blockquote>
                        </div>
                        <div className="finding-visual">
                            <div className="coach-selection">
                                <div className="coach-row">
                                    <div className="coach-label"><strong>Coach 1</strong></div>
                                    <div className="coach-value">26 seats left</div>
                                </div>
                                <div className="coach-row selected">
                                    <div className="coach-label"><strong>Coach 2</strong></div>
                                    <div className="coach-value"><strong>30 seats left</strong></div>
                                    <div className="coach-pointer">👆</div>
                                </div>
                                <div className="coach-row">
                                    <div className="coach-label"><strong>Coach 3</strong></div>
                                    <div className="coach-value">19 seats left</div>
                                </div>
                            </div>
                            <div className="finding-insight">
                                <strong>Instant decision</strong> — users scanned "seats left" and clicked highest number
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Finding 3: Meal Confirmation */}
                <Card className="finding-card finding-3">
                    <div className="finding-wrapper">
                        <div className="finding-visual">
                            <div className="journey-steps">
                                <div className="step-item">User checks ticket summary</div>
                                <div className="step-item error">"Where's my meal?"</div>
                                <div className="step-item">Scrolls down... finds it at bottom</div>
                            </div>
                            <div className="finding-insight error">
                                <strong>3/12 users</strong> struggled to locate meal confirmation
                            </div>
                        </div>
                        <div className="finding-content">
                            <div className="finding-badge friction">
                                ⚠ FRICTION
                            </div>
                            <h5>Meal confirmation needs prominence</h5>
                            <p>3/12 users couldn't find meal details in ticket summary. Expected it alongside seat number.</p>
                            <div className="next-iteration">
                                <strong>Next iteration:</strong> Elevate meal confirmation to same hierarchy as seat details.
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}
