import React from "react";
import Meta from "../components/Meta";
import Anchor from "../components/Anchor";

import data from "../data/projectSection.json";

const HomePage = ({ projects }) => (
  <div className="helvetica relative">
    <Meta
      title="Niko Lazaris"
      description="I build things for the internet. Product Manager at Major League Hacking. Previously Meetup, hackNY, and HubSpot."
    />
    <div className="mw9 center w-100 mb3 mb6-ns pv4 ph3 ph5-m ph5-l">
      <div className="ph2 center text-center measure">
        <h1 className="f2 f1-ns ma0">Niko Lazaris</h1>
        <h2 className="f3 mt0 normal">
          building things on the <span className="internet">internet</span>.
        </h2>
      </div>
    </div>

    <div className="absolute top-0 right-0 left-0 flex justify-between items-center pv4 ph4 ph5-ns">
      <div className="flex items-content mr1">
        <span className="f3">🍕</span>
        <div className="relative ml3">
          <input
            className="absolute z-5 w-100 h-100 o-0 pointer checkbox"
            type="checkbox"
          />
          <div className="relative bg-mid-gray overflow-hidden v-mid bg-animate checkbox-wrapper ba b--light-gray">
            <div className="absolute left-0 bg-white shadow-4 checkbox-toggle"></div>
          </div>
        </div>
      </div>

      <div>
        <ul className="list flex mid-gray">
          <li>
            <Anchor
              href="https://github.com/nlaz"
              className="color-inherit pr3"
            >
              <i className="fab fa-lg fa-github-alt"></i>
            </Anchor>
          </li>
          <li>
            <Anchor
              href="https://twitter.com/nikolazaris"
              className="color-inherit pr3"
            >
              <i className="fab fa-lg fa-twitter"></i>
            </Anchor>
          </li>
          <li>
            <Anchor
              href="mailto:nikolazaris@gmail.com"
              className="color-inherit pr3"
            >
              <i className="fas fa-lg fa-envelope"></i>
            </Anchor>
          </li>
        </ul>
      </div>
    </div>
    <div className="mw9 center flex flex-wrap debug">
      {projects.map(project => (
        <div className="w-25 mb5 ph4" key={project.title}>
          <div className="bg-light-gray" style={{ minHeight: "200px" }} />
          <h2 className="mb0">{project.title}</h2>
          <p className="mt2">{project.tagline}</p>
        </div>
      ))}
    </div>
  </div>
);

HomePage.getInitialProps = async () => {
  return { projects: data.projects.map(i => i.fields) };
};

export default HomePage;
