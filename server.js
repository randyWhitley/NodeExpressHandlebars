let express = require("express");
let app = express();
// port
let PORT = process.env.PORT || 5000;

//
app.use(express.static("public"));
//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// the handlebars
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import route and give the server acces to them.
let routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start server for listening.
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
