const express = require('express');
const cors = require('cors');
const passport = require('passport');
const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3050;

app.use(express.json());
app.use(cors());
require('./utils/auth');

app.use(passport.initialize());
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
app.use(ormErrorHandler);

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
