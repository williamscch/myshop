const express = require("express");
const routerApi = require("./routes");

const app = express();
const port = 3001;
app.use(express.json())

routerApi(app);

app.listen(port, () => {
  console.log("http://localhost:" + port + "/api/v1");
});
