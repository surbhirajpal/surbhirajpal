import { motion } from "framer-motion";
import { Divider, Row, Col } from "antd";

import Header from "../../components/Header";

import "./SustainFeed.scss";

export default function SustainFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="project sustainFeed"
    >
      <div className="container">
        <Header />

        <div className="sustainFeed__hero">
          <h1 className="project__hero-title">
            Sustain Feed: Turning surplus meals into nourishment for children in
            need
          </h1>

          <p className="project__section-title">{"1. OVERVIEW"}</p>
          <p className="project__section-description">
            Sustain Feed is a mobile app that connects restaurants and cafés
            with NGOs and volunteers to collect surplus food and distribute it
            safely to under-resourced schoolchildren in Bavaria. This case study
            walks through the end-to-end process—from identifying key pain
            points and defining user journeys to crafting intuitive screens,
            testing with real users, and measuring impact.
          </p>
          <div className="project__hero-img">
            <img src="/sustainFeed/hero.png" />
          </div>
        </div>
        <Divider />

        <div className="sustainFeed__problem">
          <p className="project__section-title">{"2. PROBLEM STATEMENT"}</p>
          <p className="project__section-subtitle">
            {"Highlighting barriers to efficient meal redistribution."}
          </p>
          <Row gutter={60} align={"stretch"} justify={"space-around"}>
            <Col span={8}>
              <div className="sustainFeed__problem-content">
                <h2>{"Hungry students:"}</h2>
                <p className="text">
                  A recent study of 646 tenth-graders in Witten, Germany, found
                  that only 49.4% ate breakfast before school, with skipping
                  more likely among students with a migration background or in
                  lower-track schools
                </p>
              </div>
            </Col>
            <Col span={8}>
              <div className="sustainFeed__problem-content">
                <h2>{"Fragmented donations:"}</h2>
                <p className="text">
                  Although Germany's Tafel network relies on 60,000+ volunteers
                  and depends on irregular food donations, the unpredictable
                  supply means dietary needs like pork-free or halal meals can't
                  be consistently accommodated, highlighting a key operational
                  challenge.
                </p>
              </div>
            </Col>
            <Col span={8}>
              <div className="sustainFeed__problem-content">
                <h2>{"Safety concerns"}</h2>
                <p className="text">
                  Although Germany's 960+ Tafeln rescue around 265,000 tons of
                  food annually through 60,000 volunteers, they lack
                  standardized, transparent protocols for tracking food quality
                  and origins—relying instead on simplified delivery
                  slips—raising safety concerns that undermine client trust.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <Divider />

        <div className="sustainFeed__design-thinking">
          <p className="project__section-title">
            {"3. DESIGN THINKING PROCESS"}
          </p>
          <p className="project__section-subtitle">
            {"From user empathy to impactful solutions."}
          </p>
          <Row gutter={60} align={"middle"} justify={"space-around"}>
            <Col span={10}>
              <p className="text">
                In our Design Thinking process for Sustain Feed, we began by{" "}
                <strong>empathizing</strong> with stakeholders—conducting
                interviews and field observations to uncover the real challenges
                faced by donors, NGOs, and volunteers. From those insights, we{" "}
                <strong>defined</strong> our core problem: “How might we make
                food donation fast, safe, and culturally inclusive?” At the
                heart of this inquiry was the question,{" "}
                <strong>
                  “Why would someone donate? What truly motivates people to give
                  surplus meals?”
                </strong>{" "}
                With that guiding question in mind, we <strong>ideated</strong>{" "}
                potential solutions—brainstorming features like a one-tap
                listing flow, mandatory safety checks, and gamified incentives
                for volunteers. We then <strong>tested</strong> these ideas by
                building low-fidelity wireframes and running usability sessions
                to validate our key flows. Finally, we <strong>assessed</strong>{" "}
                our prototypes by analyzing quantitative task metrics alongside
                qualitative feedback, using those learnings to refine the design
                and prioritize our next steps.
              </p>
            </Col>
            <Col span={10}>
              <img src="/sustainFeed/design-process.png" />
            </Col>
          </Row>
        </div>
        <Divider />

        <div className="sustainFeed__research">
          <p className="project__section-title">{"4. Research & Insights"}</p>
          <p className="project__section-subtitle">
            {
              "Grounding our design in real-world behaviors and motivational incentives"
            }
          </p>
          <Row gutter={0} align={"stretch"} justify={"space-around"}>
            <Col span={10}>
              <div className="sustainFeed__research-content">
                <ul>
                  <li className="text">
                    At Technische Hochschule Ingolstadt canteen, staff freeze
                    surplus meals for the next day—but when quantities exceed
                    capacity, they still end up in the bin.
                  </li>
                  <li className="text">
                    Local restaurant owners confirmed that leftover food is
                    typically discarded rather than donated, due to the extra
                    effort required to track, package, and safely transfer hot
                    meals.
                  </li>
                  <li className="text">
                    Households often cook in bulk and, without a simple
                    redistribution channel, end up throwing away perfectly good
                    food.
                  </li>
                  <li className="text">
                    There are apps like “Too Good To Go” that sell surplus at a
                    discount—but they don't facilitate direct donations to NGOs
                    or school feeding programs.
                  </li>
                </ul>
              </div>
            </Col>

            <Col span={10}>
              <div className="sustainFeed__research-content">
                <ul>
                  <li className="text">
                    In Germany, donations of surplus food to recognized
                    non-profits (e.g., Die Tafel) qualify as{" "}
                    <strong>Sonderausgabe</strong>, allowing donors to deduct up
                    to 20% of their annual income.
                  </li>
                  <li className="text">
                    Donations valued at €300 or less require only a simple
                    payment confirmation; larger gifts need a formal donation
                    certificate <em>(Zuwendungsbestätigung).</em>
                  </li>
                  <li className="text">
                    Donors can recoup approximately 30–45% of the food’s market
                    value through reduced taxable income, depending on their tax
                    bracket.
                  </li>
                  <li className="text">
                    Only contributions made to certified public-benefit
                    organizations are tax-deductible; direct handouts to private
                    individuals do not qualify.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <Divider />

        <div className="sustainFeed__prototype">
          <p className="project__section-title">{"5. Prototype Screens"}</p>
          <p className="project__section-subtitle">
            {"Visualizing key flows through high-fidelity mockups."}
          </p>
          <Row gutter={0} align={"top"} justify={"space-around"}>
            <Col span={4}>
              <img src="/sustainFeed/screen-1.png" />
              <p className="sustainFeed__prototype-text">
                Our food donation app seamlessly connects donors with those in
                need, providing a user-friendly platform to share surplus food.
              </p>
            </Col>
            <Col span={4}>
              <img src="/sustainFeed/screen-2.png" />
              <p className="sustainFeed__prototype-text">
                Empower generosity in seconds! Our intuitive donation screen
                allows users to effortlessly add and contribute items they wish
                to donate.
              </p>
            </Col>
            <Col span={4}>
              <img src="/sustainFeed/screen-3.png" />
              <p className="sustainFeed__prototype-text">
                Review your impact at a glance! Our Donation Overview screen
                provides a comprehensive view of the items you're about to
                contribute with all the details.
              </p>
            </Col>
            <Col span={4}>
              <img src="/sustainFeed/screen-4.png" />
              <p className="sustainFeed__prototype-text">
                Review your total donations and their social impact, then
                effortlessly download your tax redemption certificate to reap
                financial benefits.
              </p>
            </Col>
            <Col span={4}>
              <img src="/sustainFeed/screen-4.png" />
              <p className="sustainFeed__prototype-text">
                Students can reserve donated meals for the next day and pick
                them up from the school canteen, ensuring convenient access to
                nutritious food.
              </p>
            </Col>
          </Row>
        </div>
        <Divider />

        <div className="sustainFeed__result">
          <p className="project__section-title">{"6. Outcomes & Impact"}</p>
          <p className="project__section-subtitle">
            {"Measuring success through user feedback and key metrics."}
          </p>
          <p className="project__section-description">
            Prototype testing was conducted with seven participants, gathering
            both quantitative task metrics and qualitative feedback to validate
            and refine our designs.
          </p>

          <Row gutter={60} align={"stretch"} justify={"space-around"}>
            <Col span={8}>
              <div className="sustainFeed__result-text">
                <img src="/sustainFeed/result-1.png" />
                <p className="text">
                  <strong>“SustainFeed”</strong> created awareness for child
                  hunger among <strong>38.5%</strong> of user group.
                </p>
              </div>
            </Col>
            <Col span={8}>
              <div className="sustainFeed__result-text center">
                <p className="text">
                  The motivation to make donations through{" "}
                  <strong>“Sustain Feed”</strong>
                  stemmed from awareness of child hunger, a{" "}
                  <strong>strong desire</strong> to make a positive impact on
                  children's lives, a <strong>general aspiration</strong> to
                  help those in need, the <strong>convenience</strong> offered
                  by the app, and the potential <strong>tax benefits</strong> or
                  incentives.
                </p>
              </div>
            </Col>
            <Col span={8}>
              <div className="sustainFeed__result-text">
                <img src="/sustainFeed/result-2.png" />
                <p className="text">
                  <strong>46.2%</strong> of users felt more motivated to donate
                  specifically to address child hunger after using{" "}
                  <strong>“SustainFeed”.</strong>
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <Divider />

        <p className="project__section-description">
          {
            "Note: Only key screens are displayed here to safeguard the full design. Reach out for an in-depth preview."
          }
        </p>
      </div>
    </motion.div>
  );
}
