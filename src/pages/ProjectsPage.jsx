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
        <PhoneSection side={1} />
        <PhoneSection side={2} />
        <PhoneSection side={1} />
        <CodeSection />
      </div>
    </>
  );
};

export default ProjectsPage;
