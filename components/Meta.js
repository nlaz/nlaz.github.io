import React, { Component } from "react";
import { withRouter } from "next/router";
import Head from "next/head";
import { initGA, logPageView } from "../utils/analytics";

const rootUrl = "https://niko.pizza";

const defaults = {
  twitterImage: "https://niko.pizza/images/social-card.jpg",
  facebookImage: "https://niko.pizza/images/social-card.jpg"
};

class Meta extends Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    const canonicalUrl = `${rootUrl}${this.props.router.pathname}`;
    const facebookImage = `${rootUrl}${defaults.facebookImage}`;
    const twitterImage = `${rootUrl}${defaults.twitterImage}`;

    return (
      <Head>
        <title>{this.props.title}</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="description" content={this.props.description} />
        <meta property="fb:app_id" content="1612424139009027" />
        <meta property="og:site_name" content="Major League Hacking" />
        <meta property="og:title" content={this.props.title} />
        <meta property="og:description" content={this.props.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={facebookImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nikolazaris" />
        <meta name="twitter:creator" content="@nikolazaris" />
        <meta name="twitter:title" content={this.props.title} />
        <meta name="twitter:description" content={this.props.description} />
        <meta name="twitter:image" content={twitterImage} />
        <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons@4.8.0/css/tachyons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
        />
        <link rel="stylesheet" href="/styles/index.css" />
        <script src="/js/script.js"></script>
      </Head>
    );
  }
}

export default withRouter(Meta);
