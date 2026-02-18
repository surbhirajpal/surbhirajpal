import { motion } from "framer-motion";
import { useRef } from "react";
import { Badge, Row, Col } from "antd";

export default function InterventionsSection() {
    const interventionRefs = useRef([]);

    return (
        <section className="interventions-section">
            <div className="section-header">
                <h2 className="section-label">The Interventions</h2>
                <h3 className="section-title">Reducing uncertainty through system-level design</h3>
            </div>

            {/* Intervention 1: Meal Planning */}
            <motion.div
                className="intervention"
                ref={(el) => interventionRefs.current[0] = el}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, margin: "-100px" }}
            >
                <Row gutter={[60, 48]} align="top">
                    <Col xs={24} lg={13}>
                        <div className="intervention-content">
                            <Badge className="intervention-badge" count="Intervention 1" />
                            <h3 className="intervention-title">Meal Planning During Booking</h3>
                            <p className="intervention-description">
                                For long journeys (3–6+ hours), uncertainty about food options creates anxiety. This intervention integrates meal selection directly into the flow.
                            </p>

                            <div className="ux-logic">
                                <h4>UX Logic</h4>
                                <ul>
                                    <li>Only trigger for <strong>eligible long-distance routes</strong></li>
                                    <li>Display meal preview <strong>before payment</strong></li>
                                    <li>Meal confirmation lives <strong>inside the digital ticket</strong></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} lg={11}>
                        <div className="user-flow">
                            <h4 className="flow-title">User Flow</h4>
                            <div className="flow-steps">
                                <div className="flow-step">
                                    <div className="step-header">
                                        <div className="step-number">1</div>
                                        <div className="step-info">
                                            <h5>Trigger Point</h5>
                                            <p>Meal option appears after route selection</p>
                                        </div>
                                    </div>
                                    <div className="step-image">
                                        <img src="/DB-navigator/intervention1-step1.png" alt="Meal trigger" />
                                    </div>
                                </div>

                                <div className="flow-step">
                                    <div className="step-header">
                                        <div className="step-number">2</div>
                                        <div className="step-info">
                                            <h5>Menu Selection</h5>
                                            <p>User browses available meals</p>
                                        </div>
                                    </div>
                                    <div className="step-image">
                                        <img src="/DB-navigator/intervention1-step2.png" alt="Menu selection" />
                                    </div>
                                </div>

                                <div className="flow-step">
                                    <div className="step-header">
                                        <div className="step-number">3</div>
                                        <div className="step-info">
                                            <h5>Confirmation</h5>
                                            <p>Digital ticket shows meal details</p>
                                        </div>
                                    </div>
                                    <div className="step-image">
                                        <img src="/DB-navigator/intervention1-step3.png" alt="Confirmation" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </motion.div>

            {/* Intervention 2: Coach Occupancy */}
            <motion.div
                className="intervention"
                ref={(el) => interventionRefs.current[1] = el}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, margin: "-100px" }}
            >
                <Row gutter={[60, 48]} align="top">
                    <Col xs={24} lg={11}>
                        <div className="user-flow">
                            <h4 className="flow-title">User Flow</h4>
                            <div className="flow-steps">
                                <div className="flow-step">
                                    <div className="step-header">
                                        <div className="step-number">1</div>
                                        <div className="step-info">
                                            <h5>Global View</h5>
                                            <p>All coaches with occupancy levels</p>
                                        </div>
                                    </div>
                                    <div className="step-image">
                                        <img src="/DB-navigator/intervention2-step1.png" alt="Global view" />
                                    </div>
                                </div>

                                <div className="flow-step">
                                    <div className="step-header">
                                        <div className="step-number">2</div>
                                        <div className="step-info">
                                            <h5>Coach selection</h5>
                                            <p>Detailed seat availability</p>
                                        </div>
                                    </div>
                                    <div className="step-image">
                                        <img src="/DB-navigator/intervention2-step2.png" alt="Coach selection" />
                                    </div>
                                </div>

                                <div className="flow-step">
                                    <div className="step-header">
                                        <div className="step-number">3</div>
                                        <div className="step-info">
                                            <h5>Seat Selection</h5>
                                            <p>User selects preferred seat</p>
                                        </div>
                                    </div>
                                    <div className="step-image">
                                        <img src="/DB-navigator/intervention2-step3.png" alt="Seat selection" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} lg={13}>
                        <div className="intervention-content">
                            <Badge className="intervention-badge" count="Intervention 2" />
                            <h3 className="intervention-title">Coach Occupancy Visualization</h3>
                            <p className="intervention-description">
                                Users currently make decisions blindly, scrolling through coaches without context. This intervention introduces a global overview.
                            </p>

                            <div className="ux-logic">
                                <h4>UX Logic</h4>
                                <ul>
                                    <li>Single screen showing <strong>all coaches</strong></li>
                                    <li><strong>Color-coded</strong> occupancy indicators</li>
                                    <li>Reduce cognitive load by <strong>eliminating blind scrolling</strong></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </motion.div>

            {/* Intervention 3: Support Chat */}
            <motion.div
                className="intervention"
                ref={(el) => interventionRefs.current[2] = el}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, margin: "-100px" }}
            >
                <Row gutter={[60, 48]} align="top">
                    <Col xs={24} lg={13}>
                        <div className="intervention-content">
                            <Badge className="intervention-badge" count="Intervention 3" />
                            <h3 className="intervention-title">Validated Support Chat</h3>
                            <p className="intervention-description">
                                Disruptions cause stress. Users need to reach support within the app, but spam must be minimized to keep efficiency high.
                            </p>

                            <div className="ux-logic">
                                <h4>UX Logic</h4>
                                <ul>
                                    <li>Enter Booking Number</li>
                                    <li><strong>System Validates Ticket</strong></li>
                                    <li>Connect to AI Agent</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} lg={11}>
                        <div className="user-flow">
                            <h4 className="flow-title">User Flow</h4>
                            <div className="flow-steps">
                                <div className="flow-step">
                                    <div className="step-header">
                                        <div className="step-number">1</div>
                                        <div className="step-info">
                                            <h5>Entry Point</h5>
                                            <p>User initiates support request</p>
                                        </div>
                                    </div>
                                    <div className="step-image">
                                        <img src="/DB-navigator/intervention3-step1.png" alt="Entry point" />
                                    </div>
                                </div>

                                <div className="flow-step">
                                    <div className="step-header">
                                        <div className="step-number">2</div>
                                        <div className="step-info">
                                            <h5>Validation</h5>
                                            <p>System validates booking</p>
                                        </div>
                                    </div>
                                    <div className="step-image">
                                        <img src="/DB-navigator/intervention3-step2.png" alt="Validation" />
                                    </div>
                                </div>

                                <div className="flow-step">
                                    <div className="step-header">
                                        <div className="step-number">3</div>
                                        <div className="step-info">
                                            <h5>Connected</h5>
                                            <p>Connected to priority support</p>
                                        </div>
                                    </div>
                                    <div className="step-image">
                                        <img src="/DB-navigator/intervention3-step3.png" alt="Connected" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </motion.div>
        </section>
    );
}
