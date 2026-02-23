import { useEffect, useMemo } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// 1. Import AOS library and styles
import AOS from "aos";
import "aos/dist/aos.css";
import "./pages/pages.css";

// Sound asset
import transitionSound from "./assets/sound.mp3";

// Layout components
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

// Page components
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";
import FAQsPage from "./pages/FAQsPage";
import PricingPage from "./pages/PricingPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";

function App() {
  const location = useLocation();

  const audio = useMemo(() => {
    const instance = new Audio(transitionSound);
    instance.volume = 0.05;
    return instance;
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 200,
    });
    AOS.refresh();
    window.scrollTo(0, 0);
    audio.currentTime = 0;
    audio.play().catch(() => {});
    const titles = {
      "/": "rana.net.in - Web & App dev services",
      "/about": "About our Services - rana.net.in",
      "/projects": "Previous Projects - rana.net.in",
      "/pricing": "Our Pricing Model - rana.net.in",
      "/blogs": "Read our Blogs - rana.net.in",
      "/contact": "Get in Touch - rana.net.in",
      "/faqs": "Frequently Asked Questions rana.net.in",
    };
    document.title = titles[location.pathname] || "rana.net.in";
  }, [location, audio]);

  return (
    <div>
      <Header />
      <main className="min-h-screen">
        <div className="max-w-screen-xl px-4 pt-10 md:pt-16 mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/contact" element={<ContactPage />} /> //
            <Route path="/faqs" element={<FAQsPage />} /> //
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
