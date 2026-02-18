import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import DbNavigator from "./pages/DbNavigator";
import DB_Navigator from "./pages/DB-navigator";

import EnhancingBonds from "./pages/EnhancingBonds";
import SiemensHealthineers from "./pages/SiemensHealthineers";
import SustainFeed from "./pages/SustainFeed";
import CyclistSupport from "./pages/CyclistSupport";
import About from "./pages/About";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This makes sure on every route change (including initial load), we jump to the top instantly
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Primary pages */}
        <Route path="/" element={<Home />} />
        <Route path="/db-navigator" element={<DB_Navigator />} />
        <Route path="/enhancing-bonds-remotely" element={<EnhancingBonds />} />
        <Route path="/siemens-healthineers" element={<SiemensHealthineers />} />
        <Route path="/sustain-feed" element={<SustainFeed />} />
        <Route path="/melody-motion" element={<DbNavigator />} />
        <Route path="/cyclist-digital-support" element={<CyclistSupport />} />

        <Route path="/about" element={<About />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
