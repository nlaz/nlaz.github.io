import React from "react";
import Navbar from "../../components/Navbar";
import Meta from "../../components/Meta";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import data from "../../data/projectSection.json";

const ProjectPage = ({ project }) => (
  <div className="helvetica relative">
    <Meta title={project.title} description={project.tagline} />
    <Navbar />
    <div className="mw9 ph6 center">
      <div className="bg-light-gray" style={{ height: "650px" }} />
      <div className="ph6">
        <h1 className="pt6 mt3">{project.title}</h1>
        <div className="mt4 mb6 pb4 f4" style={{ lineHeight: 1.75 }}>
          {documentToReactComponents(project.description)}
        </div>
      </div>

      <div className="flex mb6 bt pt5 mt3 b--light-gray bw1">
        <div className="w-50 pr4">
          <div className="bg-light-gray px4" style={{ height: "400px" }} />
          <h2 className="mb0">Project Project</h2>
          <p className="mt2">Project description</p>
        </div>
        <div className="w-50 pl4">
          <div className="bg-light-gray px4" style={{ height: "400px" }} />
          <h2 className="mb0">Project Project</h2>
          <p className="mt2">Project description</p>
        </div>
      </div>
    </div>
  </div>
);

const fetchProjectBySlug = (projects, slug) => {
  return projects.filter(i => i.slug === slug)[0];
};

ProjectPage.getInitialProps = ({ query }) => {
  const projects = data.projects.map(i => i.fields);
  const project = fetchProjectBySlug(projects, query.id);
  return { project: project };
};

export default ProjectPage;
