const mapper = require("./country.mapper");

function map(countriesData) {
  return countriesData.map((countryData) => {
    return mapper.map(countryData);
  });
}

module.exports = {
  map,
};
