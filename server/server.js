const configureExpress = require("./config/config-express");

let port = 5800;
let hostname = "localhost";
let app = configureExpress();

app.listen(port, hostname, () => {
  console.log("server created");
});

module.exports = app;
