import React from "react";
import Link from "../../components/Link";

const getProjectPhotoURL = project => {
  if (project.photo && project.photo.fields) {
    return `${project.photo.fields.file.url}?h=300&fit=fill`;
  }
};

const ProjectItem = ({ project }) => (
  <Link to={`/projects/${project.slug}`} className="w-100 mb5 pv3 black link">
    <div className="bg-light-gray" style={{ height: "200px" }}>
      <img
        src={getProjectPhotoURL(project)}
        alt={project.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
    </div>
    <h2 className="f5 courier normal mb0">{project.title}</h2>
  </Link>
);

export default ProjectItem;
