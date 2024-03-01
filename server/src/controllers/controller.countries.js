const countriesService = require("../services/service.countries");

async function fetchAndSaveCountries(req, res) {
  try {
    const message = await countriesService.fetchAndSaveCountries();
    res.status(200).send(message);
  } catch (error) {
    console.error("Error fetching and saving countries:", error);
    res.status(500).send("Error fetching and saving countries");
  }
}

async function getAllCountries(req, res) {
  try {
    const countries = await countriesService.getAllCountries(req.query);
    res.status(200).json(countries);
  } catch (error) {
    console.error("Error getting countries:", error);
    res.status(500).send("Error getting countries");
  }
}

async function getCountryByCountryCode(req, res) {
  try {
    const countryCode = req.params.idPais;
    const country = await countriesService.getCountryByCountryCode(countryCode);

    res.status(200).json(country);
  } catch (error) {
    console.error("Error getting country by country code:", error);
    if (error.message === "Country not found") {
      res.status(404).send("Country not found");
    } else {
      res.status(500).send("Error getting country by country code");
    }
  }
}

module.exports = {
  fetchAndSaveCountries,
  getAllCountries,
  getCountryByCountryCode,
};
