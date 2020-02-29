import React from "react";
import Navbar from "../../components/Navbar";
import Meta from "../../components/Meta";
import ProjectItem from "../../components/home/ProjectItem";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import shuffleArray from "../../helpers/shuffleArray";

import data from "../../data/projectSection.json";

const ProjectPage = ({ project, relatedProjects }) => (
  <div className="helvetica relative">
    <Meta title={project.title} description={project.tagline} />
    <Navbar />
    <div className="mw9 ph6 center pb6">
      <div className="bg-light-gray" style={{ height: "650px" }} />
      <div className="ph6">
        <h1 className="pt6 mt3">{project.title}</h1>
        <div className="mt4 mb6 pb6 f4" style={{ lineHeight: 1.75 }}>
          {documentToReactComponents(project.description)}
        </div>
      </div>

      <div className="flex mb6 bt pt5 mt3 b--light-gray bw1 mh6">
        {relatedProjects.map((project, index) => (
          <div className="w-third ph3" key={index}>
            <ProjectItem project={project} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const fetchProjectBySlug = (projects, slug) => {
  return projects.filter(i => i.slug === slug)[0];
};

const fetchRelatedProjectsBySlug = (projects, slug) => {
  const otherProjects = projects.filter(i => i.slug !== slug);
  const shuffled = shuffleArray(otherProjects);
  return shuffled.slice(0, 3);
};

ProjectPage.getInitialProps = ({ query }) => {
  const projects = data.projects.map(i => i.fields).filter(i => i);
  const project = fetchProjectBySlug(projects, query.id);
  const relatedProjects = fetchRelatedProjectsBySlug(projects, query.id);
  return { project: project, relatedProjects: relatedProjects };
};

export default ProjectPage;
