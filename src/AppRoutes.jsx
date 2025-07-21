import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import DbNavigator from './pages/DbNavigator';
import EnhancingBonds from './pages/EnhancingBonds';
import SustainFeed from './pages/SustainFeed';
import CyclistSupport from './pages/CyclistSupport';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Primary pages */}
        <Route path="/" element={<Home />} />
        <Route path="/db-navigator" element={<DbNavigator />} />
        <Route path="/enhancing-bonds-remotely" element={<EnhancingBonds />} />
        <Route path="/sustain-feed" element={<SustainFeed />} />
        <Route path="/melody-motion" element={<DbNavigator />} />
        <Route path="/cyclist-digital-support" element={<CyclistSupport />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
