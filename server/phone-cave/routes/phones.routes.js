const router = require("express").Router();
const phoneData = require("../data/phones.json")


router.get("/", (req, res, next) => {
    res.json(phoneData);
});

router.get("/:id", (req, res, next) => {
    const phoneId = req.params.id
    const phone = phoneData.find(phone => phone.id === phoneId)
    res.json(phone);
});

module.exports = router;
