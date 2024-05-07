import React from "react";

function Projects() {
  return (
    <div className="bg-white text-black p-24">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <div className="shadow-lg p-5">
          <h3 className="font-bold">Project One</h3>
        </div>
        <div className="shadow-lg p-5">
          <h3 className="font-bold">Project Two</h3>
        </div>
      </div>
    </div>
  );
}

export default Projects;
