const path = require("path");
const express = require("express");
const port = process.env.PORT || 8085;
const cors = require("cors");
const app = express();
const request = require("request");
const bodyParser = require("body-parser");

const downloadRouter = require("./internal/download");
const uploadRouter = require("./internal/upload");
const log4js = require("log4js");
log4js.configure({
  appenders: {
    upload: { type: "file", filename: "./logs/upload.log" },
    download: { type: "file", filename: "./logs/upload.log" },
    startup: { type: "file", filename: "./logs/download.log" },
    crash: { type: "file", filename: "./logs/crash.log" },
  },
  categories: {
    default: { appenders: ["startup"], level: "debug" },
    upload: { appenders: ["upload"], level: "debug" },
    download: { appenders: ["download"], level: "debug" },
    crash: { appenders: ["crash"], level: "debug" },
  },
});
const log = log4js.getLogger("startup");
const crash = log4js.getLogger("crash");

process.on("uncaughtException", function (err) {
  crash.error("Caught exception: " + err);
  console.log("Caught exception: " + err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self' https:;connect-src 'self' https: http:; font-src 'self' https: data:; img-src 'self' https: data:; object-src 'none'; script-src 'self' https: 'unsafe-inline'; style-src 'self' https: 'unsafe-inline'; frame-ancestors 'none';"
  );
  res.setHeader("Strict-Transport-Security", "max-age=631138519");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  next();
});

app.use(express.static(path.join(__dirname, "build")));
app.use(express.static(path.join(__dirname, "internal-app")));
app.use(express.static(path.join(__dirname, "static")));

app.use("/internal/download", downloadRouter);
app.use("/internal/upload", uploadRouter);

app.get("/internal-app/*", (req, res) => {
  res.sendFile(path.join(__dirname, "internal-app", "index.html"));
});

app.get("/test", (req, res) => {
  res.send("working");
});

// app.post("/api", (req, res) => {
//   let option = req.body;
//   if (option.body) {
//     if (typeof option.body !== "string")
//       option.body = JSON.stringify(option.body);
//   }

//   console.log(req.body);
//   request(option, (err, cltresp) => {
//     //console.log(cltresp);
//     if (err) {
//       console.log(err);
//       res.status(404).send("404 not found");
//     } else {
//       if (cltresp.body) {
//         try {
//           cltresp.body = JSON.parse(cltresp.body);
//         } catch {}
//         let value = {
//           ...cltresp.body,
//           status: cltresp.statusCode,
//           statusText: cltresp.statusMessage,
//           data: cltresp.body
//         };

//         console.log(value.data,"Value From Back End");
//         // res.writeHead(cltresp.headers);
//         res.status(200).send(value);
//       }
//     }
//   });
// });
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
app.listen(port, () => {
  console.log(`port running in ${port}`);
  log.info(
    "Express server listening on port ",
    port,
    " with pid ",
    process.pid
  );
});
