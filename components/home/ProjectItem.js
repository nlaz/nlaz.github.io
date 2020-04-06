import React from "react";
import Link from "../../components/Link";
import Anchor from "../../components/Anchor";

const getProjectPhotoURL = project => {
  if (project.photo && project.photo.fields) {
    return `${project.photo.fields.file.url}?h=300&fit=fill`;
  }
};

const Card = ({ project }) => (
  <div>
    <div className="bg-light-gray" style={{ height: "200px" }}>
      <img
        className="w-100"
        src={getProjectPhotoURL(project)}
        alt={project.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
    </div>
    <h2 className="f5 courier normal mb0">{project.title}</h2>
  </div>
);

const ProjectItem = ({ project }) =>
  project.externalLink ? (
    <Anchor href={project.link} className="w-100 mb5 pv3 black link">
      <Card project={project} />
    </Anchor>
  ) : (
    <Link to={`/projects/${project.slug}`} className="w-100 mb5 pv3 black link">
      <Card project={project} />
    </Link>
  );

export default ProjectItem;
