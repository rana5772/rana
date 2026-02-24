import React from "react";
import { Helmet } from "react-helmet-async";
import Heading from "../components/Heading";

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
      </div>
    </>
  );
};

export default ProjectsPage;
