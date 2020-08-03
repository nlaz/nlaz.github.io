import React, { useState } from "react";
import cx from "classnames";

import Meta from "../components/Meta";
import Anchor from "../components/Anchor";
import ProjectItem from "../components/home/ProjectItem";
import TeamItem from "../components/home/TeamItem";

import work from "../data/work.json";
import education from "../data/education.json";

const RowItem = ({ logo, title, subtitle, link, period, description }) => (
  <div className="row-item flex items-center pv2 ph3 bb b--light-gray">
    <img
      className="bg-light-gray  br2 mr3 ml2 mv1"
      style={{ height: "48px", width: "48px" }}
      src={logo}
    />
    <div className="flex-auto">
      <div className="f6 fw5 purple" style={{ marginBottom: "1px" }}>
        {title}
      </div>
      <div className="f6 fw4 light-gray">{subtitle}</div>
    </div>
    <div className="w-20 f6 fw5 light-gray mr2">{period}</div>
  </div>
);

const HomePage = ({ projects, work, education }) => {
  const [showTeams, setShowTeams] = useState(true);
  const [showProjects, setShowProjects] = useState(true);
  const [showWork, setShowWork] = useState(false);
  const filteredWork = showWork ? work : work.slice(0, 3);
  return (
    <div className="helvetica relative bg-near-white near-black pv5">
      <Meta
        title="Niko Lazaris"
        description="I build things for the internet. Product Manager at Major League Hacking. Previously Meetup, hackNY, and HubSpot."
      />
      <div className="mw8 center mb5">
        <h1 className="f1 dark-gray fw4 mv0">Niko Lazaris</h1>
        <p className="mt1 light-gray mb5" style={{ fontSize: "18px" }}>
          Building things for the internet. Senior Product Manager at Major
          League Hacking.
        </p>
      </div>
      <div className="mw8 center mb5">
        <h3 className="prime purple f4 fw4">Projects</h3>
      </div>
      <div className={cx("mw8 center fw4", { mb5: showWork })}>
        <h3 className="prime purple f4 fw4 pb1">Work Experience</h3>
        <div className="mt3 br3 bg-white shadow">
          {filteredWork.map((item, key) => (
            <RowItem
              key={key}
              logo={item.logo}
              title={item.role}
              subtitle={item.company}
              description={item.description}
              period={item.period}
            />
          ))}
        </div>
        {!showWork && (
          <div className="mt3 flex justify-center">
            <button
              onClick={() => setShowWork(true)}
              className="ba b--moon-gray purple f6 fw5 br2 ph3 pv1 pointer"
            >
              Show More
            </button>
          </div>
        )}
      </div>
      <div className="mw8 center mb5">
        <h3 className="prime purple f4 fw4">Education</h3>
        <div className="mt3 br3 bg-white shadow">
          {education.map((item, key) => (
            <RowItem
              key={key}
              logo={item.logo}
              title={item.degree}
              subtitle={item.school}
              period={item.period}
            />
          ))}
        </div>
      </div>
      <div className="mw8 center mb5">
        <h3 className="prime purple f4 fw4">Contact</h3>
        <p className="mt2">
          If you are intested in working together, send me a message or{" "}
          <Anchor href="mailto:nikolazaris@gmail.com" className="color-inherit">
            email me
          </Anchor>
          .
        </p>
        <div className="flex justify-center center mt4">
          <Anchor className="color-inherit" href="https://github.com/nlaz">
            GitHub
          </Anchor>
          <span className="mh2"> · </span>
          <Anchor
            className="color-inherit"
            href="https://www.linkedin.com/in/niko-lazaris-88946186/"
          >
            LinkedIn
          </Anchor>
          <span className="mh2"> · </span>
          <Anchor
            className="color-inherit"
            href="https://twitter.com/nikolazaris"
          >
            Twitter
          </Anchor>
        </div>
      </div>
    </div>
  );
};

HomePage.getInitialProps = async () => {
  return {
    projects: [],
    work: work,
    communities: [],
    education: education,
  };
};

export default HomePage;
