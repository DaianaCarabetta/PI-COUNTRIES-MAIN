const activitiesService = require("../services/service.activities");

async function createActivity(req, res) {
  try {
    const newActivity = await activitiesService.createActivity(req.body);
    res.status(200).json(newActivity);
  } catch (error) {
    console.error("Error create activity:", error);
    res.status(500).send("Error create activity");
  }
}

async function getActivities(req, res) {
  try {
    const activities = await activitiesService.getActivities(req.query);
    res.status(200).json(activities);
  } catch (error) {
    console.error("Error getting activities:", error);
    res.status(500).send("Error getting activities");
  }
}

module.exports = {
  createActivity,
  getActivities,
};
