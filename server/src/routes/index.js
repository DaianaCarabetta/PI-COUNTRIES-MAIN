const { Router } = require("express");
const countriesRouter = require("./route.countries");
const activitiesRouter = require("./route.activities");

const router = Router();

router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);

module.exports = router;
