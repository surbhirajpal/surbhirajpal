import { motion } from "framer-motion";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

export default function App() {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Header />

      <div className="container">
        <Hero />
        <Projects />
        <About />
      </div>
    </motion.div>
  );
}
