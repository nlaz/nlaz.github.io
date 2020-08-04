import React, { useState } from "react";
import cx from "classnames";

import Meta from "../components/Meta";
import Anchor from "../components/Anchor";
import Emoji from "../components/Emoji";
import ProjectItem from "../components/home/ProjectItem";
import TeamItem from "../components/home/TeamItem";

import articles from "../data/articles.json";
import communities from "../data/communities.json";
import education from "../data/education.json";
import projects from "../data/projects.json";
import volunteer from "../data/volunteer.json";
import work from "../data/work.json";

import badgeFor from "../utils/badgeFor";

const ProjectCard = ({ project }) => (
  <div className="project-wrapper mb4 pb1">
    <Anchor
      className="project-card link-reset flex flex-column h-100 shadow br3 bg-white"
      href={project.link}
    >
      <div className="image-wrapper">
        <img src={project.logo} className="bg-light-gray" alt={project.title} />
      </div>
      <div className="pa3">
        <h5 className="purple f5 fw5 mb1 mt2">{project.title}</h5>
        <p className="f6 gray lh-title mt2 pb1">{project.description}</p>
        <div className="flex flex-wrap mb2 pb1">
          {project.technologies.split(",").map((item, key) => (
            <div className="mr2 mv1" key={key}>
              <span className={cx("badge", badgeFor(item.trim()))}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Anchor>
  </div>
);

const RowItem = ({ logo, title, subtitle, link, period, description }) => (
  <Anchor
    className="row-item link-reset flex items-center pv2 ph3 bb b--light-gray"
    href={link}
  >
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
    <div
      className="w-20 f6 fw5 light-gray mr2"
      dangerouslySetInnerHTML={{ __html: period }}
    />
  </Anchor>
);

const ShowButton = ({ showMore, onClick }) => (
  <button
    onClick={() => onClick(!showMore)}
    className="ba bg-transparent b--moon-gray gray fw5 br2 ph2 lh-solid pv1 pointer"
    style={{ fontSize: "12px" }}
  >
    {showMore ? "Show Less" : "Show More"}
  </button>
);

const HomePage = ({
  articles,
  communities,
  education,
  projects,
  volunteer,
  work,
}) => {
  const [showProjects, setShowProjects] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showCommunities, setShowCommunities] = useState(false);
  const [showArticles, setShowArticles] = useState(false);
  const [showVolunteer, setShowVolunteer] = useState(false);
  const _work = showWork ? work : work.slice(0, 3);
  const _communities = showCommunities ? communities : communities.slice(0, 2);
  const _articles = showArticles ? articles : articles.slice(0, 3);
  const _volunteer = showVolunteer ? volunteer : volunteer.slice(0, 2);
  const _projects = showProjects ? projects : projects.slice(0, 3);
  return (
    <div className="helvetica relative bg-near-white near-black pv5">
      <Meta
        title="Niko Lazaris"
        description="I build things for the internet. Senior Product Manager at Major League Hacking. Previously Meetup, hackNY, and HubSpot."
      />
      <div className="mw8 center mb5 ph3 ph0-l">
        <div className="relative">
          <Emoji
            value="🍕"
            className="absolute"
            style={{ fontSize: "2.5rem", left: "-3.5rem", top: ".5rem" }}
          />
          <h1 className="f1 dark-gray fw6 mv0">Niko Lazaris</h1>
        </div>
        <p className="mt1 light-gray mb5" style={{ fontSize: "18px" }}>
          Building things for the internet. Senior Product Manager at Major
          League Hacking.
        </p>
      </div>
      <div className="mw8 center mb3 ph3 ph0-l">
        <div className="flex items-center mb3 pb1 justify-between">
          <h3 className="prime purple f4 fw4 mv0">Projects</h3>
          <ShowButton showMore={showProjects} onClick={setShowProjects} />
        </div>
        <div className="flex flex-wrap">
          {_projects.map((project, key) => (
            <ProjectCard key={key} project={project} />
          ))}
        </div>
      </div>
      <div className="mw8 center fw4 mb4 ph3 ph0-l">
        <div className="flex items-center mb3 pb1 justify-between">
          <h3 className="prime purple f4 fw4 mv0">Work Experience</h3>
          <ShowButton showMore={showWork} onClick={setShowWork} />
        </div>
        <div className="mt3 br3 bg-white shadow">
          {_work.map((item, key) => (
            <RowItem
              key={key}
              link={item.link}
              logo={item.logo}
              title={item.role}
              subtitle={item.company}
              description={item.description}
              period={item.period}
            />
          ))}
        </div>
      </div>
      <div className="mw8 center mb4 ph3 ph0-l">
        <div className="flex items-center mb3 pb1 justify-between mt4">
          <h3 className="prime purple f4 fw4 mv0">Articles & Talks</h3>
          <ShowButton showMore={showArticles} onClick={setShowArticles} />
        </div>
        <div className="mt3 br3 bg-white shadow">
          {_articles.map((item, key) => (
            <RowItem
              key={key}
              link={item.link}
              logo={item.logo}
              title={item.title}
              subtitle={item.subtitle}
              period={item.period}
            />
          ))}
        </div>
      </div>
      <div className="mw8 center mb4 ph3 ph0-l">
        <div className="flex items-center mb3 pb1 justify-between mt4">
          <h3 className="prime purple f4 fw4 mv0">Communities</h3>
          <ShowButton showMore={showCommunities} onClick={setShowCommunities} />
        </div>
        <div className="mt3 br3 bg-white shadow">
          {_communities.map((item, key) => (
            <RowItem
              key={key}
              link={item.link}
              logo={item.logo}
              title={item.role}
              subtitle={item.company}
              description={item.description}
              period={item.period}
            />
          ))}
        </div>
      </div>
      <div className="mw8 center mb4 ph3 ph0-l">
        <div className="flex items-center mb3 pb1 justify-between mt4">
          <h3 className="prime purple f4 fw4 mv0">Volunteer</h3>
          <ShowButton showMore={showVolunteer} onClick={setShowVolunteer} />
        </div>
        <div className="mt3 br3 bg-white shadow">
          {_volunteer.map((item, key) => (
            <RowItem
              key={key}
              link={item.link}
              logo={item.logo}
              title={item.title}
              subtitle={item.subtitle}
              period={item.period}
            />
          ))}
        </div>
      </div>
      <div className="mw8 center mb4 ph3 ph0-l">
        <h3 className="prime purple f4 fw4">Education</h3>
        <div className="mt3 br3 bg-white shadow">
          {education.map((item, key) => (
            <RowItem
              key={key}
              link={item.link}
              logo={item.logo}
              title={item.degree}
              subtitle={item.school}
              period={item.period}
            />
          ))}
        </div>
      </div>
      <div className="mw8 center mb4 ph3 ph0-l">
        <h3 className="prime purple f4 fw4 mb2">Contact</h3>
        <p className="mt2 dark-gray">
          If you are interested in working together, send me a message or{" "}
          <Anchor href="mailto:nikolazaris@gmail.com" className="color-inherit">
            email me
          </Anchor>
          .
        </p>
        <div className="flex purple justify-center center mt4 pt4 f6">
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

HomePage.getInitialProps = () => ({
  projects: projects,
  articles: articles,
  communities: communities,
  education: education,
  volunteer: volunteer,
  work: work,
});

export default HomePage;
