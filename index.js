const Handlebars = require("handlebars");
const fs = require("fs");

// compile templates

const homeTemplateFile = fs.readFileSync("./templates/index.hbs").toString();
const homeTemplate = Handlebars.compile(homeTemplateFile);

const resumeTemplateFile = fs.readFileSync("./templates/resume.hbs").toString();
const resumeTemplate = Handlebars.compile(resumeTemplateFile);

// load json-resume

const context = fs.readFileSync("./resume.json").toString();
const contextJSON = JSON.parse(context);

// write webpages

fs.writeFileSync("./public/index.html", homeTemplate(contextJSON));
fs.writeFileSync("./public/resume.html", resumeTemplate(contextJSON));
