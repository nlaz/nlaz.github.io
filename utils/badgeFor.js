const badgeFor = (technology) => {
  switch (technology) {
    case "Hardware":
      return "badge-red";

    case "Node.js":
    case "Android":
    case "Shopify":
    case "Gulp":
      return "badge-green";

    case "Flask":
    case "Heroku":
    case "Sketch":
    case "Myo":
    case "Eclipse":
      return "badge-purple";

    case "Express":
    case "SQLAlchemy":
    case "Illustrator":
    case "CSS":
    case "Sass":
      return "badge-orange";

    case "Puppeteer":
    case "AWS S3":
    case "Tessel":
    case "Terminal":
    case "JavaScript":
    case "GitHub Pages":
    case "Next.js":
    case "Blueprints":
    case "PostgresSQL":
      return "badge-blue";

    case "HTML":
    case "Bash":
    case "Git":
    case "React":
    default:
      return "badge-default";
  }
};

export default badgeFor;
