import React from "react";
import Heading from "../components/Heading";
import GridSection from "../sections/About/GridSection";
import CodeSection from "../sections/About/CodeSection";
import ProfileCard from "../sections/About/ProfileCard";
import ParallaxSection from "../sections/About/ParallaxSection";
import GlassBox from "../components/GlassBox";
import ServiceCard from "../sections/About/ServiceCard";
import ServiceSection from "../sections/About/ServiceSection";
import Typing from "../sections/About/Typing";

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

      <div className="text-center pt-8 mb-18 new-font bg-black/0 rounded-full shadow-xl border border-black/20">
        <h1 className="animated-header text-center font-architects-daughter">
          <span className="md:text-3xl text-2xl font-medium text-gray-700">
            Empowering your <span className="underline ">online presence</span>{" "}
            with
          </span>
        </h1>
        <div className="mt-2 main-heading text-gray-800 font- new-font mb-8">
          <div className="md:text-4xl flex justify-center items-center text-center text-3xl">
            <Typing />
          </div>
        </div>
      </div>

      <ServiceSection />

      <CodeSection />
      {/* <GridSection /> */}
    </div>
  );
};

export default About;
