import { motion } from "framer-motion";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import AboutHero from "./AboutHero";
import "./About.scss";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="aboutMe"
    >
      <Header subtitle="About me" />

      <div className="container">
        <AboutHero />
        <div className="aboutMe__content">
          <p>
            Hi, I'm Surbhi, a designer who can also code (basically a one-person
            design-dev task force).
          </p>
          <br />
          <p>
            I grew up in India, where I bunked classes just to spend
            more time with my art teacher, making anything crafty I could get my
            hands on. Creativity has been in my blood since then, whether it's
            art, craft, or now, digital design.
          </p>
          <br />
          <p>
            I actually started my career as a frontend developer. While working
            closely with Figma files, I found myself “fixing” messy designs so
            they were clean, consistent, and ready to export. That's when it hit
            me, I didn't just enjoy building designs, I loved creating them. Now
            I work at the sweet spot between design and development, making
            products that are both beautiful and buildable.
          </p>
          <br />
          <p>
            What I love most about my work is that every project teaches me
            something new, a skill, a fresh approach, or a completely different
            perspective. My only flaw? I'm never fully satisfied… but that's
            what keeps me improving.
          </p>
          <br />

          <p>
            Outside of work, you'll find me in the gym, cooking (shahi paneer
            when I have energy, feta-on-everything when I don't), cleaning my
            space like it's a sport, or adding another tote bag to my
            ever-growing collection. My friends would call me a good cook,
            always reliable, and maybe a little too obsessed with tidy spaces.
          </p>

          <br />

          <p>
            My life motto?{" "}
            <strong>“Whatever happens, happens for good.”</strong>
          </p>

          <br />

          <p>
            Oh, and did I mention? I just won my first Design Innovation
            Challenge - Innovative Mobility Concepts at the VGI Challenge 2024
            with an amazing team and this is just the beginning. Many more to
            come!
          </p>
        </div>

        <div className="aboutMe__vgi">
          <a
            href="https://www.thi.de/en/university/news/news/innovative-mobilitaetskonzepte-bei-der-vgi-challenge/"
            target="blank"
          >
            <img src="/about/vgi.jpeg" />
          </a>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
