const { Router } = require("express");
const router = Router();

const countriesController = require("../controllers/controller.countries");

router.get("/fetch-countries", countriesController.fetchAndSaveCountries);
router.get("/", countriesController.getAllCountries);
router.get("/:idPais", countriesController.getCountryByCountryCode);
router.get("/name?=", countriesController.getAllCountries);

module.exports = router;
