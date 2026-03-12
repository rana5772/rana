import React from "react";
import { Helmet } from "react-helmet-async";
import Heading from "../components/Heading";
import PhoneSection from "../components/PhoneSection";
import GlassBox from "../components/GlassBox";
import { ElfsightWidget } from "react-elfsight-widget";
import CodeSection from "../sections/About/CodeSection";

// https://hsjnfiwisdom.com
// https://dainmart.com
// https://upfound.ai
// https://ecommercetank.in
// https://optivue.in
// https://usewave.co
// https://kreativedeals.com

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects | rana.net.in</title>
        <meta
          name="description"
          content="Explore previous web and app development projects delivered by rana.net.in for clients across industries."
        />
        <link rel="canonical" href="https://rana.net.in/projects" />
      </Helmet>

      <div>
        <Heading
          heading={
            <>
              <span className="md:hidden">Our Projects</span>
              <span className="hidden md:inline">Previous Projects</span>
            </>
          }
        />

        <GlassBox text="Success stories, shared." />

        <p className="text-center max-w-5xl mb-10 mx-auto text-lg text-slate-800">
          Every project has a story, and we're proud to have been part of these.
          Here is a look at the work we've done for industry leaders and
          ambitious startups alike.
        </p>

        {/* links */}
        <PhoneSection
          side={1}
          name="Upfound AI"
          link="https://upfound.ai"
          description="AI based hiring platform"
        />
        <PhoneSection
          side={2}
          name="HSJN FinWisdom"
          link="https://hsjnfinwisdom.com"
          description="Online stock market courses"
        />
        <PhoneSection
          side={1}
          name="Optivue"
          link="https://optivue.in"
          description="ERP platform for manufacturers"
        />

        <PhoneSection
          side={2}
          name="Use Wave"
          link="https://usewave.co"
          description="Autopilot Instagram lead generator"
        />

        <PhoneSection
          side={1}
          name="Dain Mart"
          link="https://dainmart.com"
          description="Online clothing store"
        />

        <PhoneSection
          side={2}
          name="E-commerce Tank"
          link="https://ecommercetank.in"
        />

        <PhoneSection
          side={1}
          name="Kreative Deals"
          link="https://kreativedeals.com"
          description="Cooperate gifting solutions"
        />
        <CodeSection />
      </div>
    </>
  );
};

export default ProjectsPage;
