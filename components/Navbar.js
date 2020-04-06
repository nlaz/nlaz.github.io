import React from "react";
import Anchor from "./Anchor";
import Link from "./Link";
import { withRouter } from "next/router";
import { ChevronLeft } from "react-feather";

const Navbar = ({ router }) => (
  <div className="absolute top-0 right-0 left-0 flex justify-between items-center pv4 ph4 ph5-ns">
    <div className="flex items-content mr1">
      <Link to="/" className="f3 link relative">
        {router.pathname !== "/" && (
          <span className="absolute black" style={{ left: "-28px" }}>
            <ChevronLeft stroke="#000000" />
          </span>
        )}
        🍕
      </Link>
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
          <Anchor href="https://github.com/nlaz" className="color-inherit pr3">
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
);

export default withRouter(Navbar);
