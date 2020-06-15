const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const AdmZip = require("adm-zip");
const log = require("log4js").getLogger("upload");
const appDir = path.join(__dirname, "../", "apps/");

const Storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, appDir);
  },
  filename: function (req, file, callback) {
    if (!file.originalname.match(/\.(apk|ipa|plist)$/)) {
      return callback(new Error("Please upload an valid file"));
    }
    if (file.originalname.match(/\.(apk)$/)) {
      return callback(null, "redsmart.apk");
    }
    if (file.originalname.match(/\.(ipa)$/)) {
      return callback(null, "redsmart.ipa");
    }
    if (file.originalname.match(/\.(plist)$/)) {
      return callback(null, "manifest.plist");
    }
    callback(null, file.originalname);
  },
});

const webAppStorage = multer.diskStorage({
  destination: function (req, file, callback) {
    const dir = path.join(__dirname, "../");
    callback(null, dir);
  },
  filename: function (req, file, callback) {
    if (!file.originalname.match(/\.(zip)$/)) {
      return callback(new Error("Please upload an valid file"));
    }

    callback(null, "build.zip");
  },
});

const upload = multer({ storage: Storage }).single("apps");
const webAppupload = multer({ storage: webAppStorage }).single("apps");

router.post("/redsmart.apk", (req, res) => {
  try {
    if (!fs.existsSync(appDir)) {
      fs.mkdirSync(appDir);
    }
    upload(req, res, function (err) {
      if (err) {
        log.error({ errors: { msg: "Error uploading file (apk)." } });
        return res
          .status(422)
          .send({ errors: { msg: "Error uploading file." } });
      }
      log.info({ data: "apk file uploaded" });
      return res.status(200).send({ msg: "File Uploaded." });
    });
  } catch (err) {
    log.error({ errors: { msg: err.message } });
    res.status(422).send({ errors: { msg: err.message } });
  }
});

router.post("/manifest", (req, res) => {
  try {
    if (!fs.existsSync(appDir)) {
      fs.mkdirSync(appDir);
    }
    upload(req, res, function (err) {
      if (err) {
        log.error({ errors: { msg: "Error uploading file (manifest)." } });
        return res
          .status(422)
          .send({ errors: { msg: "Error uploading file." } });
      }
      log.info({ data: "manifest file uploaded" });
      return res.status(200).send({ msg: "File Uploaded." });
    });
  } catch (err) {
    log.error({ errors: { msg: err.message } });
    res.status(422).send({ errors: { msg: err.message } });
  }
});

router.post("/redsmart.ipa", (req, res) => {
  try {
    if (!fs.existsSync(appDir)) {
      fs.mkdirSync(appDir);
    }
    upload(req, res, function (err) {
      if (err) {
        log.error({ errors: { msg: "Error uploading file (ipa)." } });
        return res
          .status(422)
          .send({ errors: { msg: "Error uploading file." } });
      }
      log.info({ data: "ipa file uploaded" });
      return res.status(200).send({ msg: "File Uploaded." });
    });
  } catch (err) {
    log.error({ errors: { msg: err.message } });
    res.status(422).send({ errors: { msg: err.message } });
  }
});

router.post("/build.zip", (req, res) => {
  try {
    const dir = path.join(__dirname, "../");
    webAppupload(req, res, function (err) {
      if (err) {
        return res
          .status(422)
          .send({ errors: { msg: "Error uploading file." } });
      }
      var zip = new AdmZip(path.join(dir, "build.zip"));
      zip.extractAllTo(dir, true);
      log.info({ data: "webapp uploaded" });

      return res.status(200).send({ msg: "File Uploaded." });
    });
  } catch (err) {
    log.error({ errors: { msg: err.message } });
    res.status(422).send({ errors: { msg: err.message } });
  }
});

module.exports = router;
