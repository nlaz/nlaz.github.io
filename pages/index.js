import React from "react";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";
import ProjectItem from "../components/home/ProjectItem";
import TeamItem from "../components/home/TeamItem";

import projectData from "../data/projectSection.json";
import teamData from "../data/teamSection.json";

const HomePage = ({ projects, teams }) => (
  <div className="helvetica relative">
    <Meta
      title="Niko Lazaris"
      description="I build things for the internet. Product Manager at Major League Hacking. Previously Meetup, hackNY, and HubSpot."
    />
    <Navbar />
    <div className="mw9 center w-100 mb3 mb6-ns pv4 ph3 ph5-m ph5-l">
      <div className="ph2 center text-center measure">
        <h1 className="f2 f1-ns ma0">Niko Lazaris</h1>
        <h2 className="f3 mt0 normal">
          building things on the <span className="internet">internet</span>.
        </h2>
      </div>
    </div>

    <div className="mw9 mb5 center">
      <h3 className="ph3 ph2-m ph4-l mb4 courier normal">- Projects</h3>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <div className="w-50-m w-25-l ph3 ph2-m ph4-l mb5" key={index}>
            <ProjectItem project={project} />
          </div>
        ))}
      </div>
    </div>

    <div className="mw9 mb6 center">
      <h3 className="ph3 ph2-m ph4-l mb4 courier normal">- Teams</h3>
      <div className="flex flex-wrap">
        {teams.map((team, index) => (
          <div className="w-50-m w-25-l ph3 ph2-m ph4-l mb5" key={index}>
            <TeamItem team={team} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

HomePage.getInitialProps = async () => {
  return {
    projects: projectData.projects.map(i => i.fields).filter(i => i),
    teams: teamData.teams.map(i => i.fields).filter(i => i)
  };
};

export default HomePage;
