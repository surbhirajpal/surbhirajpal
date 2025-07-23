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
      className="project cycle"
    >
      <Header subtitle="About me" />

      <div className="container">
        <AboutHero />
      </div>

      <Footer/>
    </motion.div>
  );
}
