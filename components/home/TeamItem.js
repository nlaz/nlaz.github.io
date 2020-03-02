import React from "react";
import Anchor from "../../components/Anchor";

const getProjectPhotoURL = project => {
  if (project.photo && project.photo.fields) {
    return `${project.photo.fields.file.url}?h=300&fit=fill`;
  }
};

const TeamItem = ({ team }) => (
  <Anchor href={team.link} className="w-100 mb5 pv3 black link">
    <div className="bg-light-gray" style={{ height: "200px" }}>
      <img
        className="w-100"
        src={getProjectPhotoURL(team)}
        alt={team.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
    </div>
    <h2 className="f5 courier normal mb0">{team.name}</h2>
  </Anchor>
);

export default TeamItem;
