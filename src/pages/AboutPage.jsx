import React from "react";
import Heading from "../components/Heading";
import GridSection from "../sections/About/GridSection";
import CodeSection from "../sections/About/CodeSection";
import ProfileCard from "../sections/About/ProfileCard";
import ParallaxSection from "../sections/About/ParallaxSection";
import GlassBox from "../components/GlassBox";
import ServiceCard from "../sections/About/ServiceCard";
import ServiceSection from "../sections/About/ServiceSection";

const About = () => {
  return (
    <div>
      <Heading
        heading={
          <>
            <span className="md:hidden">About us</span>
            <span className="hidden md:inline">About our Services</span>
          </>
        }
      />

      <GlassBox text="Project goes live within 1 week" />

      <p className="text-center max-w-5xl mb-10 mx-auto">
        We are more than just a service provider; we are your dedicated,
        long-term partner committed to supporting your technology needs and
        helping your business grow every step of the way.
      </p>

      <ProfileCard />

      <ServiceSection />

      {/* <GridSection /> */}

      <CodeSection />

      <div className="my-40"></div>
    </div>
  );
};

export default About;
