const axios = require("axios");
const { Country, Activity } = require("../db");
const CountriesMapper = require("../mappers/country/countries.mapper");
const { Op } = require("sequelize");

async function fetchAndSaveCountries() {
  try {
    const response = await axios.get("http://localhost:5000/countries");

    await Country.bulkCreate(CountriesMapper.map(response.data));

    return "Countries saved successfully";
  } catch (error) {
    console.error("Error fetching and saving countries:", error);
    throw new Error("Error fetching and saving countries");
  }
}

async function getAllCountries(query) {
  try {
    let whereClause = {};

    if (query.name) {
      whereClause.name = {
        [Op.iLike]: `%${query.name}%`,
      };
    }

    const countries = await Country.findAll({
      where: whereClause,
      include: [
        {
          model: Activity,
          through: { attributes: [] },
          attributes: ["name", "duration", "id", "difficulty", "season"],
        },
      ],
    });

    return countries;
  } catch (error) {
    console.error("Error getting countries:", error);
    throw new Error("Error getting countries");
  }
}

async function getCountryByCountryCode(countryCode) {
  try {
    const country = await Country.findOne({
      where: { countryCode },
      include: [
        {
          model: Activity,
          through: { attributes: [] },
          attributes: ["name", "duration", "id", "difficulty", "season"],
        },
      ],
    });

    if (!country) {
      throw new Error("Country not found");
    }

    return country;
  } catch (error) {
    console.error("Error fetching country:", error);
    throw error;
  }
}

module.exports = {
  fetchAndSaveCountries,
  getAllCountries,
  getCountryByCountryCode,
};
