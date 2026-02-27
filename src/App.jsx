import { useEffect, useMemo } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// 1. Import AOS library and styles
import AOS from "aos";
import "aos/dist/aos.css";
import "./pages/pages.css";
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
import ChatBot from "./layouts/ChatBot";

function App() {
  const location = useLocation();

  const audio = useMemo(() => {
    const instance = new Audio(transitionSound);
    instance.volume = 0.05;
    return instance;
  }, []);

  useEffect(() => {
    // Re-initialize animations on route change
    AOS.init({
      duration: 500,
      offset: 200,
    });
    AOS.refresh();

    window.scrollTo(0, 0);

    // Keep document title in sync with current route
    const { pathname } = location;
    let title = "rana.net.in";

    switch (pathname) {
      case "/":
        title = "rana.net.in - Web & App dev services";
        break;
      case "/about":
        title = "About Us | rana.net.in";
        break;
      case "/projects":
        title = "Projects | rana.net.in";
        break;
      case "/pricing":
        title = "Pricing | rana.net.in";
        break;
      case "/blogs":
        title = "Blogs | rana.net.in";
        break;
      case "/contact":
        title = "Contact Us | rana.net.in";
        break;
      case "/faqs":
        title = "FAQs | rana.net.in";
        break;
      default:
        title = "rana.net.in";
        break;
    }

    document.title = title;

    // Play transition sound on route change
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Browsers often block autoplay until user interaction
      console.log("Audio playback delayed until user interaction.");
    });
  }, [location, audio]);

  return (
    <div>
      <Header />
      <ChatBot />
      <main className="min-h-screen">
        <div className="max-w-screen-xl px-4 pt-10 md:pt-16 mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;