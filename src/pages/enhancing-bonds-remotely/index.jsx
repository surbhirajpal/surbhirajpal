import { useRef, useState } from "react";
import { motion } from "framer-motion";
import HTMLFlipBook from "react-pageflip";
import { useScreenSize } from "../../hooks/useScreenSize";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./enhancing-bonds-remotely.scss";

export default function EnhancingBonds() {
    const screenSize = useScreenSize();
    const bookRef = useRef(null);
    const [currentSpread, setCurrentSpread] = useState(0);

    const isPortrait = screenSize === "xs";
    const pageWidth = screenSize === "xs" ? 280 : screenSize === "md" ? 380 : 497;
    const pageHeight = screenSize === "xs" ? 380 : screenSize === "md" ? 417 : 546;

    const onFlip = (e) => {
        setCurrentSpread(Math.floor(e.data / 2));
    };

    const goToSpread = (index) => {
        if (bookRef.current) {
            bookRef.current.pageFlip().turnToPage(index * 2);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="enhancing-bonds-remotely"
        >
            <Header subtitle="Little Links" />

            <div className="page-wrapper">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="heading-container">
                        <h1 className="main-title">Enhancing Bonds Remotely</h1>
                    </div>
                    <p className="subtitle">Little Links</p>
                    <p className="tagline">
                        Exploring Multi-Sensory Natural User Interfaces for Child–Parent Communication
                    </p>
                    <p className="research-question">
                        How can remote communication feel emotionally present for young children?
                    </p>
                </section>

                {/* Divider */}
                <div className="divider" />

                {/* Project Details Section */}
                <section className="project-details">
                    <div className="details-grid">
                        <div className="detail-item">
                            <p className="detail-label">Role</p>
                            <p className="detail-value">UX Researcher</p>
                        </div>
                        <div className="detail-item">
                            <p className="detail-label">Domain</p>
                            <p className="detail-value">
                                Child–Computer Interaction, Natural User Interfaces
                            </p>
                        </div>
                        <div className="detail-item">
                            <p className="detail-label">Methods</p>
                            <p className="detail-value">Qualitative observation, experimental study</p>
                        </div>
                        <div className="detail-item">
                            <p className="detail-label">Context</p>
                            <p className="detail-value">Academic research project</p>
                        </div>
                    </div>
                </section>

                {/* The Challenge Section */}
                <section className="content-section challenge-section">
                    <h2 className="section-heading">The Challenge</h2>
                    <div className="challenge-content">
                        <p className="body-text">
                            Young children often struggle to remain emotionally engaged during remote video
                            calls with parents who are away for work. Traditional video communication
                            prioritizes visual and audio channels, yet overlooks the sensory richness that
                            defines early childhood connection—touch, movement, and scent.
                        </p>

                        <div className="image-container">
                            <img
                                src={'/enhancing-bonds/parent-child-connection.png'}
                                alt="Parent and child connection"
                                className="feature-image"
                            />
                        </div>

                        <div className="sensory-cards">
                            <div className="sensory-card">
                                <h3 className="card-title">Touch</h3>
                                <p className="card-description">Tactile comfort and presence</p>
                            </div>
                            <div className="sensory-card">
                                <h3 className="card-title">Movement</h3>
                                <p className="card-description">Physical gestures and play</p>
                            </div>
                            <div className="sensory-card">
                                <h3 className="card-title">Scent</h3>
                                <p className="card-description">Familiar olfactory cues</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Research Question and Hypothesis Section */}
                <section className="research-section">
                    <div className="research-question-box">
                        <p className="box-label">RESEARCH QUESTION</p>
                        <p className="research-text">
                            How can multi-sensory natural user interfaces enhance emotional connectivity
                            during synchronous remote communication between parents and young children?
                        </p>
                    </div>

                    <div className="hypothesis-box">
                        <p className="box-label">HYPOTHESIS</p>
                        <p className="hypothesis-text">
                            Integrating sound, body movement, and scent will increase perceived emotional
                            connection and social presence.
                        </p>
                    </div>
                </section>

                {/* Study Design Section */}
                <section className="content-section study-section">
                    <h2 className="section-heading">Study Design</h2>
                    <div className="study-content">
                        <p className="body-text">
                            We designed an experimental setup that simulates parental presence through
                            multiple sensory channels. The study aimed to capture both behavioral responses
                            and physiological indicators of emotional engagement.
                        </p>

                        <div className="image-container">
                            <img src={'/enhancing-bonds/imgStudySetup.png'} alt="Study setup" className="feature-image" />
                        </div>

                        <div className="study-details-grid">
                            <div className="study-detail-column">
                                <h3 className="subsection-heading">Sensory Elements</h3>
                                <div className="detail-list">
                                    <div className="detail-list-item">
                                        <p className="list-item-title">Sound</p>
                                        <p className="list-item-description">Parent singing and voice interaction</p>
                                    </div>
                                    <div className="detail-list-item">
                                        <p className="list-item-title">Movement</p>
                                        <p className="list-item-description">
                                            Gestures and physical presence simulation
                                        </p>
                                    </div>
                                    <div className="detail-list-item">
                                        <p className="list-item-title">Scent</p>
                                        <p className="list-item-description">Familiar objects (blanket, perfume)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="study-detail-column">
                                <h3 className="subsection-heading">Technical Setup</h3>
                                <div className="detail-list">
                                    <div className="detail-list-item">
                                        <p className="list-item-title">Head-mounted phone</p>
                                        <p className="list-item-description">To simulate presence and eye level</p>
                                    </div>
                                    <div className="detail-list-item">
                                        <p className="list-item-title">Immersive audio</p>
                                        <p className="list-item-description">
                                            Spatial sound for realistic interaction
                                        </p>
                                    </div>
                                    <div className="detail-list-item">
                                        <p className="list-item-title">Physiological tracking</p>
                                        <p className="list-item-description">
                                            Heart rate monitoring for engagement
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Observed Section */}
                <section className="content-section observations-section">
                    <h2 className="section-heading">What We Observed</h2>
                    <div className="observations-grid">
                        <div className="observation-column">
                            <p className="box-label">WHAT WORKED</p>
                            <div className="observation-cards">
                                <div className="observation-card worked">
                                    <h3 className="card-title">Singing and gestures</h3>
                                    <p className="card-description">
                                        Children showed increased engagement and emotional responsiveness when
                                        parents sang familiar songs and used expressive gestures.
                                    </p>
                                </div>
                                <div className="observation-card worked">
                                    <h3 className="card-title">Familiar sensory cues</h3>
                                    <p className="card-description">
                                        Scent from a parent's blanket or perfume improved emotional comfort and
                                        reduced anxiety during the interaction.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="observation-column">
                            <p className="box-label">WHAT DIDN'T</p>
                            <div className="observation-cards">
                                <div className="observation-card didnt-work">
                                    <h3 className="card-title">Wearables distracted children</h3>
                                    <p className="card-description">
                                        Heart rate monitors and other wearable devices became objects of
                                        curiosity, pulling focus away from the interaction itself.
                                    </p>
                                </div>
                                <div className="observation-card didnt-work">
                                    <h3 className="card-title">Additional devices reduced trust</h3>
                                    <p className="card-description">
                                        Introducing multiple pieces of equipment created friction and diminished
                                        the natural, spontaneous quality of parent-child connection.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Iteration & Adaptation Section */}
                <section className="content-section iteration-section">
                    <h2 className="section-heading">Iteration & Adaptation</h2>
                    <div className="iteration-content">
                        <p className="body-text">
                            Based on initial observations, we refined our approach to minimize friction and
                            better simulate authentic parent-child dynamics.
                        </p>

                        <div className="iteration-steps">
                            <div className="iteration-step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <p className="step-title">Reduced equipment</p>
                                    <p className="step-description">
                                        Removed visible wearables to maintain natural interaction flow
                                    </p>
                                </div>
                            </div>
                            <div className="iteration-step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <p className="step-title">Removed pre-training</p>
                                    <p className="step-description">
                                        Allowed spontaneous responses rather than rehearsed behavior
                                    </p>
                                </div>
                            </div>
                            <div className="iteration-step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <p className="step-title">Simulated real parental absence</p>
                                    <p className="step-description">
                                        Created authentic emotional context for the study
                                    </p>
                                </div>
                            </div>
                            <div className="iteration-step">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <p className="step-title">Adjusted physiological measurement</p>
                                    <p className="step-description">
                                        Used less intrusive methods to capture heart rate data
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Experiment in Action Section */}
                <section className="experiment-section">
                    <h2 className="section-heading">Experiment in Action</h2>
                    <div className="notebook-container">
                        <div className="flipbook-wrapper">
                            <HTMLFlipBook
                                ref={bookRef}
                                width={pageWidth}
                                height={pageHeight}
                                size="fixed"
                                minWidth={pageWidth}
                                maxWidth={pageWidth}
                                minHeight={pageHeight}
                                maxHeight={pageHeight}
                                showCover={false}
                                mobileScrollSupport={false}
                                onFlip={onFlip}
                                flippingTime={800}
                                usePortrait={isPortrait}
                                startPage={0}
                                drawShadow={true}
                                maxShadowOpacity={0.4}
                                className="flipbook"
                            >
                                <div className="image-page">
                                    <div className="image-content">
                                        <img src="/enhancing-bonds/child1.png" alt="Setup Phase" />
                                    </div>
                                </div>
                                <div className="text-page">
                                    <div className="page-content">
                                        <h3 className="page-title">Context</h3>
                                        <p className="page-text">The child had not seen his father for over 24 hours, as he spent the night at his grandparents' house.</p>
                                        <div className="page-accent-line" />
                                    </div>
                                </div>
                                <div className="image-page">
                                    <div className="image-content">
                                        <img src="/enhancing-bonds/child2.png" alt="Interaction Phase" />
                                    </div>
                                </div>
                                <div className="text-page">
                                    <div className="page-content">
                                        <h3 className="page-title">First Interaction</h3>
                                        <p className="page-text">After the first video call, he asked to call his father again, explaining that he wanted to continue singing with him.</p>
                                        <div className="page-accent-line" />
                                    </div>
                                </div>
                                <div className="image-page">
                                    <div className="image-content">
                                        <img src="/enhancing-bonds/child3.png" alt="Observation Phase" />
                                    </div>
                                </div>
                                <div className="text-page">
                                    <div className="page-content">
                                        <h3 className="page-title">Second Interaction</h3>
                                        <p className="page-text">During the second call, his engagement increased. He moved closer to the screen and reached out to touch it - an interaction he had not shown before.</p>
                                        <div className="page-accent-line" />
                                    </div>
                                </div>
                            </HTMLFlipBook>
                            <div className="book-overlay" aria-hidden="true">
                                <div className="page-shadow-left" />
                                <div className="page-shadow-right" />
                                <div className="book-spine" />
                            </div>
                        </div>

                        <div className="pagination-dots">
                            <button className={`dot${currentSpread === 0 ? " active" : ""}`} onClick={() => goToSpread(0)} aria-label="Go to spread 1" />
                            <button className={`dot${currentSpread === 1 ? " active" : ""}`} onClick={() => goToSpread(1)} aria-label="Go to spread 2" />
                            <button className={`dot${currentSpread === 2 ? " active" : ""}`} onClick={() => goToSpread(2)} aria-label="Go to spread 3" />
                        </div>
                    </div>
                </section>

                {/* Core Insight Section */}
                <section className="insight-section">
                    <div className="insight-content">
                        <div className="insight-left">
                            <div className="insight-header">
                                <p className="box-label">CORE INSIGHT</p>
                                <p className="insight-text">
                                    Emotional presence for children depends more on sensory familiarity than
                                    visual fidelity.
                                </p>
                            </div>
                            <div className="insight-divider" />
                            <div className="insight-data">
                                <p className="box-label">PHYSIOLOGICAL RESPONSE</p>
                                <div className="heart-rate-data">
                                    <p className="heart-rate-numbers">101 → 147</p>
                                    <p className="heart-rate-unit">bpm</p>
                                </div>
                                <p className="heart-rate-description">
                                    Heart rate increase observed after multi-sensory interaction, indicating
                                    heightened emotional engagement and excitement.
                                </p>
                            </div>
                        </div>
                        <div className="insight-right">
                            <div className="insight-photo-card">
                                <img src="/enhancing-bonds/measurement.png" alt="Live monitoring session" />
                                <div className="monitoring-badge">Live Monitoring</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reflection Section */}
                <section className="content-section reflection-section">
                    <h2 className="section-heading">Reflection</h2>
                    <div className="reflection-content">
                        <p className="body-text">
                            This research suggests opportunities for multi-sensory interfaces in remote
                            family communication, healthcare, and education. By expanding beyond
                            screen-based interaction, we can design systems that honor the full spectrum of
                            human connection.
                        </p>

                        <div className="quote-box">
                            <p className="quote-text">
                                "Designing for children means removing friction and respecting emotional
                                sensitivity. Technology should fade into the background, letting human
                                connection take center stage."
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer project="littleLinks" />
        </motion.div>
    );
}
