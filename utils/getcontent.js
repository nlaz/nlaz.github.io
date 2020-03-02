const fs = require("fs");
const path = require("path");
const stringify = require("json-stringify-safe");

// TODO: Move to environment variables
const client = require("contentful").createClient({
  space: "k95aa6f1rwx5",
  accessToken: "nCltJermKuEzJrVHiehQdcbqj7ygKIda1QfAv0Keu7o"
});

const types = ["projectSection", "teamSection"];

const getcontent = async () => {
  console.log("> Starting import...");
  for (const type of types) {
    console.log("> Getting content for", type);
    try {
      const entries = await client.getEntries({
        content_type: type,
        include: 2
      });
      if (entries.total === 1) {
        const { fields } = entries.items[0];
        fs.writeFileSync(
          path.join(__dirname, "..", "data", `${type}.json`),
          stringify(fields)
        );
        console.log("> Content gotten and written for", type);
      }
    } catch (error) {
      console.error("error", error);
    }
  }
  return true;
};

if (process.argv[2] === "install") {
  getcontent();
}

module.exports = { getcontent };
