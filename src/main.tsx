import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/HeroPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import SkillsPage from "./pages/SkillsPage.tsx";
import PortfolioPage from "./pages/PortfolioPage.tsx";
import ExperiencePage from "./pages/ExperiencePage.tsx";
import TestimonialPage from "./pages/TestimonialPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/skills" element={<SkillsPage />}></Route>
        <Route path="/portfolio" element={<PortfolioPage />}></Route>
        <Route path="/experience" element={<ExperiencePage />}></Route>
        <Route path="/testimonials" element={<TestimonialPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
