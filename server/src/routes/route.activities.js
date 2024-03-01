const { Router } = require("express");
const router = Router();

const activitiesController = require("../controllers/controller.activities");

router.post("/", activitiesController.createActivity);
router.get("/", activitiesController.getActivities);

module.exports = router;
