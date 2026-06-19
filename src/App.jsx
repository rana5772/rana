import { useEffect, useMemo, lazy, Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// 1. Import AOS library and styles
import AOS from "aos";
import "aos/dist/aos.css";
import "./pages/pages.css";
import transitionSound from "./assets/sound.mp3";

// Layout components
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import ChatBot from "./layouts/ChatBot";

// Page components
const HomePage = lazy(() => import("./pages/HomePage"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FAQsPage = lazy(() => import("./pages/FAQsPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TnC = lazy(() => import("./pages/TnC"));
const BlogDetailsPage = lazy(() => import("./pages/BlogDetailsPage"));

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
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/pricing" element={<PricingPage />} />

              <Route
                path="/blogs"
                element={<Navigate to="/blogs/page/1" replace />}
              />

              <Route
                path="/blogs/page/:pageNumber"
                element={<BlogsPage />}
              />

              <Route
                path="/blog/:slug"
                element={<BlogDetailsPage />}
              />

              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faqs" element={<FAQsPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-&-conditions" element={<TnC />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
