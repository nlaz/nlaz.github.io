import React from "react";
import Meta from "../components/Meta";
import Anchor from "../components/Anchor";

const items = Array(8).fill(0);

const HomePage = () => (
  <div className="helvetica">
    <Meta
      title="Niko Lazaris"
      description="I build things for the internet. Product Manager at Major League Hacking. Previously Meetup, hackNY, and HubSpot."
    />
    <div class="mw9 center w-100 mb3 mb6-ns pv4 ph3 ph5-m ph5-l">
      <div class="ph2 center text-center measure">
        <h1 class="f2 f1-ns  ma0">Niko Lazaris</h1>
        <h2 class="f3 mt0 normal">
          building things on the <span class="internet">internet</span>.
        </h2>
      </div>
    </div>

    <div class="absolute top-0 right-0 left-0 flex justify-between items-center pv4 ph4 ph5-ns">
      <div class="flex items-content mr1">
        <span class="f3">🍕</span>
        <div class="relative ml3">
          <input
            class="absolute z-5 w-100 h-100 o-0 pointer checkbox"
            type="checkbox"
          />
          <div class="relative bg-mid-gray overflow-hidden v-mid bg-animate checkbox-wrapper ba b--light-gray">
            <div class="absolute left-0 bg-white shadow-4 checkbox-toggle"></div>
          </div>
        </div>
      </div>

      <div>
        <ul class="list flex mid-gray">
          <li>
            <Anchor
              href="https://github.com/nlaz"
              className="color-inherit pr3"
            >
              <i class="fab fa-lg fa-github-alt"></i>
            </Anchor>
          </li>
          <li>
            <Anchor
              href="https://twitter.com/nikolazaris"
              className="color-inherit pr3"
            >
              <i class="fab fa-lg fa-twitter"></i>
            </Anchor>
          </li>
          <li>
            <Anchor
              href="mailto:nikolazaris@gmail.com"
              className="color-inherit pr3"
            >
              <i class="fas fa-lg fa-envelope"></i>
            </Anchor>
          </li>
        </ul>
      </div>
    </div>
    <div className="mw9 center flex flex-wrap debug">
      {items.map(item => (
        <div className="w-25 mb5 ph4">
          <div className="bg-light-gray" style={{ minHeight: "200px" }} />
          <h2 className="mb0">Matchstick</h2>
          <p className="mt2">A design tool built on StartupBus</p>
        </div>
      ))}
    </div>
  </div>
);

export default HomePage;
