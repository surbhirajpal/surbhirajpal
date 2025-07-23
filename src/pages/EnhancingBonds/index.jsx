import { motion } from "framer-motion";
import { Divider, Row, Col } from "antd";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./EnhancingBonds.scss";

export default function EnhancingBonds() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="project nui"
    >
      <Header subtitle="Little Links" />

      <div className="container">
        <div className="nui__hero">
          <h1 className="project__hero-title">
            {"Enhancing Bonds Remotely: With Multi-sensory NUI "}
          </h1>

          <p className="project__section-title">{"1. OVERVIEW"}</p>
          <p className="project__section-description">
            {
              "This case study examines how children interact with multi-sensory natural user interfaces, leveraging smell, sound and social presence to uncover insights for enhancing emotional connection in remote communication."
            }
          </p>
          <div className="project__hero-img">
            <img src="/nui/hero.png" />
          </div>
        </div>
        <Divider />

        <div className="nui__problem">
          <p className="project__section-title">{"2. PROBLEM STATEMENT"}</p>
          <p className="project__section-subtitle">
            {"Uncovering the hurdles in children’s sensory-rich interactions."}
          </p>
          <p className="project__section-description">
            {
              "Young children often struggle to stay engaged during remote calls with parents who are away for work, which can weaken the emotional connection between them. Our solution aims to enhance this emotional bond by using multi-sensory natural user interfaces to make remote interactions more engaging and meaningful."
            }
          </p>
        </div>
        <Divider />

        <div className="nui__chi">
          <p className="project__section-title">
            {"3. CHILD COMPUTER INTERACTION :  KEY INSIGHTS"}
          </p>
          <p className="project__section-subtitle">
            {"Discoveries in how children engage with technology."}
          </p>
          <Row gutter={60} align={"middle"} justify={"space-around"}>
            <Col span={8}>
              <h2>{"Tangibility in Learning"}</h2>
              <p className="text">
                {
                  "Tangible interfaces boost children's engagement and comprehension by aligning with natural play behaviours, aiding in the understanding of abstract concepts."
                }
              </p>
              <br />
              <h2>{"Educational Games"}</h2>
              <p className="text">
                {
                  "Successful games blend education with engaging gameplay, offering clear objectives, appropriate challenges, and feedback, grounded in educational theories."
                }
              </p>
            </Col>

            <Col span={8}>
              <img src="/nui/chi.png" />
            </Col>
          </Row>
        </div>
        <Divider />

        <div className="nui__research">
          <p className="project__section-title">{"4. RESEARCH FRAMEWORK"}</p>
          <p className="project__section-subtitle">
            {"Framing our questions to drive meaningful discovery."}
          </p>
          <Row gutter={60} align={"top"} justify={"space-around"}>
            <Col span={8}>
              <div className="project__research">
                <h2>{"Research Question"}</h2>
                <p className="text">
                  {
                    "How can natural user interfaces (NUIs), integrated with specific scents and sounds enhance emotional connectivity in synchronous remote communication between parents and young children?"
                  }
                </p>
              </div>
            </Col>
            <Col span={8}>
              <div className="project__hypothesis">
                <h2>{"Hypothesis"}</h2>
                <p className="text">
                  {
                    "NUIs integrated with specific sounds, body movements and scents will enhance the perceived emotional connectivity between parents and children during synchronous remote communication."
                  }
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <Divider />

        <div className="nui__persona">
          <p className="project__section-title">{"5. PERSONAS"}</p>
          <p className="project__section-subtitle">
            {"Defining our users to guide empathetic design."}
          </p>

          <div className="nui__persona-1">
            <img src="/nui/persona-1.png" />
          </div>
          <div className="nui__persona-2">
            <img src="/nui/persona-2.png" />
          </div>
        </div>
        <Divider />

        <div className="nui__setup">
          <p className="project__section-title">
            {"6. Experiment Setup: Enhancing Remote Interaction"}
          </p>
          <p className="project__section-subtitle">
            {
              "Designing sessions to observe children’s remote engagement across senses."
            }
          </p>

          <div className="nui__setup-content">
            <h2>{"Call Configuration:"}</h2>
            <p className="text">
              {
                "Young children often struggle to stay engaged during remote calls with parents who are away for work, which can weaken the emotional connection between them. Our solution aims to enhance this emotional bond by using multi-sensory natural user interfaces to make remote interactions more engaging and meaningful."
              }
            </p>

            <h2>{"Device Placement:"}</h2>
            <p className="text">
              {
                "The mother wears a headband designed to hold the phone, allowing the father to view the child as if he were physically present, enhancing the sense of closeness."
              }
            </p>

            <h2>{"Immersive Audio:"}</h2>
            <p className="text">
              {
                "Speakers and microphones are arranged to create a high-quality, immersive communication environment."
              }
            </p>

            <h2>{"Engagement Activities:"}</h2>
            <p className="text">
              {
                "The child participates in interactive activities such as singing songs or reciting rhymes to increase engagement during the call."
              }
            </p>

            <h2>{"Smell Enhancement:"}</h2>
            <p className="text">
              {
                "To evoke familiarity and comfort, the father's perfume is sprayed near the child and father keeps the child's blanket, which is kept close to the father during the call."
              }
            </p>

            <h2>{"Heart Rate Monitoring:"}</h2>
            <p className="text">
              {
                "The child wears an Apple Watch to monitor and record heart rate changes, assessing the emotional impact of the interaction."
              }
            </p>
          </div>
        </div>
        <Divider />

        <div className="nui__pretest-results">
          <p className="project__section-title">
            {"7. Pre-Testing Insights: Key Observations and Learnings"}
          </p>
          <p className="project__section-subtitle">
            {"Early observations that shaped our research design."}
          </p>
          <Row gutter={60} align={"top"} justify={"space-around"}>
            <Col span={8}>
              <h2>{"Positive findings:"}</h2>
              <ul>
                <li>
                  {
                    "The child and parent demonstrated strong engagement through singing and hand interactions."
                  }
                </li>

                <li>
                  {
                    "Due to prior experience with video calls, the child remained focused on the task when necessary."
                  }
                </li>
              </ul>
            </Col>
            <Col span={8}>
              <h2>{"Negative findings:"}</h2>
              <ul>
                <li>
                  {
                    "The heart rate tracking device proved ineffective due to its size and design, which were not suitable for children."
                  }
                </li>

                <li>
                  {
                    "The child's extremely short attention span made it difficult to redirect focus to commands and instructions."
                  }
                </li>

                <li>
                  {
                    "Using an extra device, such as a smartphone as a camera, negatively affected the child's engagement."
                  }
                </li>
                <li>
                  {
                    "The testing setup triggered curiosity and skepticism, causing the child to be wary of the people around her."
                  }
                </li>
                <li>
                  {
                    "The child's awareness that her parent might be home led to mistrust regarding the father's absence."
                  }
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <Divider />

        <div className="nui__setup">
          <p className="project__section-title">
            {"8. Optimization and improvements"}
          </p>
          <p className="project__section-subtitle">
            {"Enhancing Experiment Design"}
          </p>

          <div className="nui__setup-content">
            <h2>{"Heart Rate Monitor Adjustment:"}</h2>
            <p className="text">
              {
                "A chest strap heart rate monitor was used instead of a smartwatch, as the child was frequently distracted and removing the watch."
              }
            </p>

            <h2>{"Minimizing Distractions:"}</h2>
            <p className="text">
              {
                "Removed as many distractions as possible, including additional devices like smartphones and cameras, as the child's distractions were affecting the experiment."
              }
            </p>

            <h2>{"Simulated Absence Scenario:"}</h2>
            <p className="text">
              {
                "Conducted a test to simulate a scenario in which the parent leaves the household for a few days on an office trip."
              }
            </p>

            <h2>{"Preventing Familiarization:"}</h2>
            <p className="text">
              {
                "Avoided any prior 'training' sessions to prevent the child from becoming accustomed to the situation and potentially influencing the outcomes of the actual test."
              }
            </p>
          </div>
        </div>
        <Divider />

        <div className="nui__chi">
          <p className="project__section-title">
            {"9. Final Testing and Observations:"}
          </p>
          <p className="project__section-subtitle">
            {"Validating our research through hands-on session"}
          </p>
          <Row gutter={60} align={"middle"} justify={"space-around"}>
            <Col span={8}>
              <img src="/nui/test-result.png" />
            </Col>
            <Col span={8}>
              <h2>{"Heart Rate Monitoring Adjustments:"}</h2>
              <ul>
                <li>
                  {
                    "The planned chest band for heart rate measurement proved ineffective, despite prior use."
                  }
                </li>
                <li>
                  {
                    "An arm band, specifically an Apple Watch, was then utilized for tracking."
                  }
                </li>
                <li>
                  {
                    "The child wore the Apple Watch throughout the day to monitor resting pulse and intermittently during the experiment."
                  }
                </li>
                <li>{"Resting Heart Rate: 87 bpm"}</li>
                <li>{"Heart Rate Before Call: 101 bpm"}</li>
                <li>{"Heart Rate After Call: 147 bpm"}</li>
              </ul>
            </Col>
          </Row>
        </div>
        <Divider />

        <div className="nui__results">
          <img src="/nui/result.png" />
        </div>
        <Divider />

        <div className="nui__setup">
          <p className="project__section-title">
            {"10. Hypothesis Validation"}
          </p>
          <p className="project__section-subtitle">
            {"Confirming our initial assumptions through observed behaviors."}
          </p>

          <p className="text">
            {
              "The hypothesis is supported by the following evidence from the experiment:"
            }
          </p>
          <ul>
            <li className="text">
              {
                "Sounds and Body Movements: The Child's active engagement in singing and her physical interaction with the screen demonstrated improved emotional connectivity and a stronger sense of social presence."
              }
            </li>
            <li className="text">
              {
                "Scents: The use of the baby's blanket for the dad heightened his emotional connection, enhancing the feeling of social presence as if he were truly with her."
              }
            </li>
          </ul>
        </div>
        <Divider />

        <p className="project__section-description">
          {
            "Note: Only key screens are displayed here to safeguard the full design. Reach out for an in-depth preview."
          }
        </p>
      </div>
      <Footer project="littleLinks" />
    </motion.div>
  );
}
