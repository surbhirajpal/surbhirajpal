import { motion } from "framer-motion";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import HeroSection from './HeroSection';
import ResearchSection from './ResearchSection';
import ChallengeSection from './ChallengeSection';
import InterventionsSection from './InterventionsSection';
import ValidationSection from './ValidationSection';
import FinalDesignSection from './FinalDesignSection';
import ReflectionSection from './ReflectionSection';

import "./DB-navigator.scss";

export default function DbNavigator() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="project db-navigator"
        >
            <Header subtitle="DB Navigator" />

            <div className="container">
                <HeroSection />
                <ResearchSection />
                <ChallengeSection />
                <InterventionsSection />
                <ValidationSection />
                <FinalDesignSection />
                <ReflectionSection />
            </div>

            <Footer project="db" />
        </motion.div>
    );
}
