import React from "react";
import Link from "../../components/Link";

const ProjectItem = ({ project }) => (
  <Link to={`/projects/${project.slug}`} className="w-25 mb5 ph4 black link">
    <div className="bg-light-gray" style={{ minHeight: "200px" }} />
    <h2 className="mb0">{project.title}</h2>
    <p className="mt2">{project.tagline}</p>
  </Link>
);

export default ProjectItem;
