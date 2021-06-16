const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/about", (req, res) => {
  const hi = req.sayHi;
  console.log(hi);
  res.render("about");
});
router.get("/contacts", (req, res) => {
  res.render("contacts");
});

module.exports = router;
