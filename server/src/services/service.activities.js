const { Country, Activity } = require("../db");
const { literal } = require("sequelize");

const createActivity = async function (activityData) {
  const { countries = [], ...activityDetails } = activityData;
  const newActivity = await Activity.create(activityDetails);

  if (countries.length > 0) {
    const countryInstances = await Country.findAll({
      where: {
        countryCode: countries,
      },
    });

    if (countryInstances.length > 0) {
      await newActivity.addCountries(countryInstances);
    }
  }

  return newActivity;
};

const getActivities = async function () {
  const activities = await Activity.findAll({
    attributes: [[literal('DISTINCT "name"'), "name"]],
  });
  return activities;
};

module.exports = {
  createActivity,
  getActivities,
};
