import React from "react";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";
import ProjectItem from "../components/home/ProjectItem";

import data from "../data/projectSection.json";

const HomePage = ({ projects }) => (
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

    <div className="mw9 center flex flex-wrap">
      {projects.map((project, index) => (
        <div className="w-25 ph4 mb5" key={index}>
          <ProjectItem project={project} />
        </div>
      ))}
    </div>
  </div>
);

HomePage.getInitialProps = async () => {
  return { projects: data.projects.map(i => i.fields).filter(i => i) };
};

export default HomePage;
