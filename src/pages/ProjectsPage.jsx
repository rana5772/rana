import React from "react";
import Heading from "../components/Heading";

const ProjectsPage = () => {
  return (
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
  );
};

export default ProjectsPage;
