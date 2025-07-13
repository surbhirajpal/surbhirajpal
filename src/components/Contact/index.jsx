import { motion } from "framer-motion";
import "./Hero.scss";

export default function Hero() {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="hero__title">Hi, I’m Your Name.</h1>
      <p className="hero__subtitle">I build web experiences with React.</p>
    </motion.div>
  );
}
