import { Row, Col } from "antd";

export default function FinalDesignSection() {
    return (
        <section className="final-design-section">
            <div className="section-header">
                <h2 className="section-label">Final Design</h2>
                <h3 className="section-title">Polished Interface</h3>
            </div>

            <Row gutter={[24, 32]}>
                <Col xs={24} sm={12} md={6}>
                    <div className="screen-preview">
                        <img src="/DB-navigator/screen1.png" alt="Home Dashboard" />
                        <p className="screen-label">Home Dashboard</p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <div className="screen-preview">
                        <img src="/DB-navigator/screen2.png" alt="Search Results" />
                        <p className="screen-label">Search Results</p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <div className="screen-preview">
                        <img src="/DB-navigator/screen3.png" alt="Seat Map" />
                        <p className="screen-label">Seat Map</p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <div className="screen-preview">
                        <img src="/DB-navigator/screen4.png" alt="Ticket QR" />
                        <p className="screen-label">Ticket QR</p>
                    </div>
                </Col>
            </Row>
        </section>
    );
}
