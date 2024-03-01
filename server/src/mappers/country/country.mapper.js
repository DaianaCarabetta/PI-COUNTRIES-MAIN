function map(countryData) {
  try {
    return {
      countryCode: countryData.cca3,
      name: countryData.name.common,
      flagImage: countryData.flags.png,
      continent: (countryData.continents && countryData.continents[0]) || null,
      capital: (countryData.capital && countryData.capital[0]) || null,
      subregion: countryData.subregion,
      area: countryData.area,
      population: countryData.population,
    };
  } catch (error) {}
}

module.exports = {
  map,
};
