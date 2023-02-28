const express = require("express");
const cors = require("cors");

const { connect } = require("./src/utils/db.js");

const UserRoutes = require('./src/api/obras/obras.routes.js')

connect();

const dotenv = require('dotenv');
const { configCloudinary } = require("./src/utils/cloudinary.js");
const router = require("./src/api/obras/obras.routes.js");
const routerComponents = require("./src/api/component/component.routes.js");

dotenv.config();
 

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Origin", "*");
  next();
});


app.use(
  cors({
    origin: ["*"],
  })
);


app.use('/api', router)
app.use('/api', routerComponents)

app.use("/public", express.static("public"));

app.use("/api", (req, res, next) => "im alive");

const PORT = process.env.PORT || 8084;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port 🙈: ${PORT}`);
});

configCloudinary()

app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

app.disable('x-powered-by')

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
