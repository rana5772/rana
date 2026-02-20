import React from "react";
import { Helmet } from "react-helmet-async"; // Use react-helmet if you prefer the older lib
import LaptopSection from "../sections/Home/LaptopSection";
import NumberSection from "../sections/Home/NumberSection";
import TechStackSection from "../sections/Home/TechStackSection";
import ContactSection from "../sections/Home/ContactSection";
import CustomerReviews from "../sections/Home/CustomerReviews";
import FeaturesSection from "../sections/Home/FeaturesSection";
import HeroSection from "../sections/Home/HeroSection";
import TimelineSection from "../sections/Home/TimelineSection";
import TabsSection from "../sections/Home/TabsSection";
import ImagesSection from "../sections/Home/ImagesSection";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>rana.net.in - Web & App dev services</title>
        <meta
          name="description"
          content="Offering web and app development services to build modern, responsive, and user-friendly digital solutions tailored to your business needs."
        />
        <link rel="canonical" href="https://rana.net.in" />
      </Helmet>

      <div>
        <LaptopSection />
        <NumberSection />
        <FeaturesSection />
        <HeroSection />
        <TimelineSection />
        <TabsSection />
        <ImagesSection />
        <TechStackSection />
        <CustomerReviews />
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;
