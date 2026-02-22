import React from "react";
import Heading from "../components/Heading";
import GridSection from "../sections/About/GridSection";
import CodeSection from "../sections/About/CodeSection";
import ServicesSection from "../sections/About/ServicesSection";
import ProfileCard from "../sections/About/ProfileCard";
import ParallaxSection from "../sections/About/ParallaxSection";

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

      {/* <GridSection /> */}

      {/* <CodeSection /> */}

      <ProfileCard />

      <div className="my-40"></div>
    </div>
  );
};

export default About;
