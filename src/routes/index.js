const newsRouter = require("./news");
const siteRouter = require("./site");
const postRouter = require("./post");

function route(app) {

  app.post("/api/login", (req, res) => {
    res.json("it work ");
  });
  app.use("/news", newsRouter);
  app.use("/posts", postRouter);
  app.use("/", siteRouter);
  
}

module.exports = route;
