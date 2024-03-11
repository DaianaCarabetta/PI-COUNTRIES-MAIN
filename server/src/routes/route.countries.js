const { Router } = require("express");
const router = Router();

const countriesController = require("../controllers/controller.countries");

router.get("/fetch-countries", countriesController.fetchAndSaveCountries);
router.get("/", countriesController.getAllCountries);
router.get("/:idPais", countriesController.getCountryByCountryCode);

module.exports = router;
