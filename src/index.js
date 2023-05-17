const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const port = process.env.PORT || 3000 ;
const path = require("path");
const route = require("./routes");
const db = require("./config/db");
// const bootstrap = require("bootstrap");
//template engine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resource/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//connect to db
// db.connect();

route(app);

console.log(path.join(__dirname, "views"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});