import React from "react";
import Navbar from "../../components/Navbar";
import Meta from "../../components/Meta";
import ProjectItem from "../../components/home/ProjectItem";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import shuffleArray from "../../helpers/shuffleArray";

import data from "../../data/projectSection.json";

const getHeaderPhotoURL = project => {
  if (project.photo && project.photo.fields) {
    return `${project.photo.fields.file.url}?h=650&fit=fill`;
  }
};

const ProjectPage = ({ project, relatedProjects }) => (
  <div className="helvetica relative">
    <Meta
      title={`${project.title} - Niko Lazaris`}
      description={project.description}
    />
    <Navbar />
    <div className="mw9 ph6 center pb6">
      <div className="ph6 pt4">
        <div className="bg-light-gray" style={{ height: "650px" }}>
          <img
            className="w-100"
            src={getHeaderPhotoURL(project)}
            alt={project.title}
            style={{ height: "650px", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="ph6">
        <h1 className="pt5 mt3 internet">{project.title}</h1>
        <div className="mt4 mb6 pb6 f4" style={{ lineHeight: 1.75 }}>
          {documentToReactComponents(project.description)}
        </div>
      </div>

      <div className="bt b--light-gray bw1 mh6" />
      <div
        className="flex mb6 ph6 pt5 mt3"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
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
