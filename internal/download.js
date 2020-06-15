const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/redsmart.apk", (req, res) => {
  try {
    const apk = path.join(__dirname, "../", "apps/redsmart.apk");
    if (!fs.existsSync(apk)) {
      res.status(500).send({ errors: { msg: "File Missing" } });
    } else {
      res.setHeader("Content-Type", "application/octet-stream");
      res.status(200).sendFile(apk);
    }
  } catch (err) {
    res.status(422).send({ errors: { msg: err.message } });
  }
});

router.get("/manifest", (req, res) => {
  try {
    const plist = path.join(__dirname, "../", "apps/manifest.plist");
    if (!fs.existsSync(plist)) {
      res.status(500).send({ errors: { msg: "File Missing" } });
    } else {
      res.setHeader("Content-Type", "text/plain");
      res.status(200).sendFile(plist);
    }
  } catch (err) {
    res.status(422).send({ errors: { msg: err.message } });
  }
});

router.get("/redsmart.ipa", (req, res) => {
  try {
    const plist = path.join(__dirname, "../", "apps/redsmart.ipa");
    if (!fs.existsSync(plist)) {
      res.status(500).send({ errors: { msg: "File Missing" } });
    } else {
      res.setHeader("Content-Type", "text/plain");
      res.status(200).sendFile(plist);
    }
  } catch (err) {
    res.status(422).send({ errors: { msg: err.message } });
  }
});

module.exports = router;
