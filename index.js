const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");
const { checkApiKey } = require("./middlewares/auth.handler");
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require("./middlewares/error.handler");
const passport = require("passport");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
require("./utils/auth/");

app.get("/", (req, res) => {
  res.send("Hola mi server en express");
});

app.get("/nueva-ruta", checkApiKey, (req, res) => {
  res.send("Hola, soy una nueva ruta");
});
app.use(passport.initialize());
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
app.use(ormErrorHandler);

app.listen(port, () => {
  console.log("Running on http://localhost:" + port);
});
