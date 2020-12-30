const Handlebars = require("handlebars");
const fs = require("fs");

// compile templates

const homeTemplateFile = fs.readFileSync("./src/templates/index.hbs").toString();
const homeTemplate = Handlebars.compile(homeTemplateFile);

// Register Partials

const headerTemplate = fs.readFileSync("./src/templates/header.hbs").toString();
Handlebars.registerPartial("header", headerTemplate);

// load json-resume

const context = fs.readFileSync("./resume.json").toString();
const contextJSON = JSON.parse(context);

// write webpages

fs.writeFileSync("./public/index.html", homeTemplate(contextJSON));
