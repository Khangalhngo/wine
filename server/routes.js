const express = require("express");
const router = express.Router();

const jsson = require("../json/wine.json");
router.get("/all", (req, res) => {
  res.json(jsson);
});

router.get("/search", (req, res) => {
  const filters = req.query;
  console.log({ filters });
  const filteredUsers = jsson.filter((e) => {
    let isValid = true;
    for (key in filters) {
      // console.log(key, e[key], filters[key]);
      isValid =
        isValid &&
        (e[key] || " ").toString().replace(" ", "_").toLowerCase() ==
          $filters[key].toString().replace(" ", "_").toLowerCase();
    }
    return isValid;
  });
  res.json(filteredUsers);
});

router.get("/country", (req, res) => {
  const winesCountries = jsson.map((e) => e.country);
  res.json(winesCountries);
});
router.get("/regions", (req, res) => {
  const winesRegions = jsson.map((e) => e.region_1);
  res.json(winesRegions);
});
module.exports = router;
