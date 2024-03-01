import {
  getCountries,
  getCountryByCode,
} from "../../services/service.countries";

export const FETCH_COUNTRY_BY_CODE_REQUEST = "FETCH_COUNTRY_BY_CODE_REQUEST";
export const FETCH_COUNTRY_BY_CODE_SUCCESS = "FETCH_COUNTRY_BY_CODE_SUCCESS";
export const FETCH_COUNTRY_BY_CODE_FAILURE = "FETCH_COUNTRY_BY_CODE_FAILURE";

export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const UPDATE_CURRENT_COUNTRIES = "UPDATE_CURRENT_COUNTRIES";
export const UPDATE_TOTAL_FILTERED_COUNTRIES =
  "UPDATE_TOTAL_FILTERED_COUNTRIES";

export const FETCH_COUNTRIES_REQUEST = "FETCH_COUNTRIES_REQUEST";
export const FETCH_COUNTRIES_SUCCESS = "FETCH_COUNTRIES_SUCCESS";
export const FETCH_COUNTRIES_FAILURE = "FETCH_COUNTRIES_FAILURE";

export const FETCH_COUNTRY_BY_NAME_REQUEST = "FETCH_COUNTRY_BY_NAME_REQUEST";
export const FETCH_COUNTRY_BY_NAME_SUCCESS = "FETCH_COUNTRY_BY_NAME_SUCCESS";
export const FETCH_COUNTRY_BY_NAME_FAILURE = "FETCH_COUNTRY_BY_NAME_FAILURE";

export const SET_SELECTED_CONTINENT = "SET_SELECTED_CONTINENT";
export const SET_SELECTED_ACTIVITY = "SET_SELECTED_ACTIVITY";
export const SET_SELECTED_NAME_ORDER = "SET_SELECTED_NAME_ORDER";
export const SET_SELECTED_POPULATION_ORDER = "SET_SELECTED_POPULATION_ORDER";

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const fetchCountriesRequest = () => ({
  type: FETCH_COUNTRIES_REQUEST,
});
export const fetchCountriesSuccess = (countries) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countries,
});
export const fetchCountriesFailure = (error) => ({
  type: FETCH_COUNTRIES_FAILURE,
  payload: error,
});

export const fetchCountryByNameRequest = () => ({
  type: FETCH_COUNTRY_BY_NAME_REQUEST,
});
export const fetchCountryByNameSuccess = (country) => ({
  type: FETCH_COUNTRY_BY_NAME_SUCCESS,
  payload: country,
});
export const fetchCountryByNameFailure = (error) => ({
  type: FETCH_COUNTRY_BY_NAME_FAILURE,
  payload: error,
});

export const fetchCountryByCodeRequest = () => ({
  type: FETCH_COUNTRY_BY_CODE_REQUEST,
});
export const fetchCountryByCodeSuccess = (country) => ({
  type: FETCH_COUNTRY_BY_CODE_SUCCESS,
  payload: country,
});
export const fetchCountryByCodeFailure = (error) => ({
  type: FETCH_COUNTRY_BY_CODE_FAILURE,
  payload: error,
});

export const setSelectedActivity = (activity) => ({
  type: SET_SELECTED_ACTIVITY,
  payload: activity,
});
export const setSelectedNameOrder = (nameOrder) => ({
  type: SET_SELECTED_NAME_ORDER,
  payload: nameOrder,
});
export const setSelectedPopulationOrder = (populationOrder) => ({
  type: SET_SELECTED_POPULATION_ORDER,
  payload: populationOrder,
});
export const setSelectedContinent = (continent) => ({
  type: SET_SELECTED_CONTINENT,
  payload: continent,
});

export const searchCountry = (name) => async (dispatch) => {
  dispatch(fetchCountryByNameRequest());
  try {
    const countries = await getCountries({ name });
    dispatch(fetchCountryByNameSuccess(countries));
  } catch (error) {
    dispatch(fetchCountryByNameFailure(error));
  }
};

export const getCountry = (code) => async (dispatch) => {
  dispatch(fetchCountryByCodeRequest());
  try {
    const country = await getCountryByCode(code);
    dispatch(fetchCountryByCodeSuccess(country));
  } catch (error) {
    dispatch(fetchCountryByCodeFailure(error));
  }
};

export const listCountries = (params) => async (dispatch) => {
  try {
    const countries = await getCountries(params);
    dispatch(fetchCountriesSuccess(countries));
  } catch (error) {
    dispatch(fetchCountriesFailure(error));
  }
};

export const calculateCurrentCountries = () => (dispatch, getState) => {
  const state = getState();
  const {
    countries,
    currentPage,
    countriesPerPage,
    selectedContinent,
    selectedActivity,
    selectedNameOrder,
    selectedPopulationOrder,
  } = state.countries;

  let filteredCountries = applyFilters(
    countries,
    selectedContinent,
    selectedActivity
  );

  let sortedCountries = applySort(
    filteredCountries,
    selectedNameOrder,
    selectedPopulationOrder
  );

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = sortedCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  dispatch({
    type: "UPDATE_CURRENT_COUNTRIES",
    payload: currentCountries,
  });

  dispatch({
    type: "UPDATE_TOTAL_FILTERED_COUNTRIES",
    payload: sortedCountries.length,
  });
};

const applyFilters = (countries, selectedContinent, selectedActivity) => {
  let filteredCountries = countries;

  if (selectedContinent) {
    filteredCountries = filteredCountries.filter(
      (country) => country.continent === selectedContinent
    );
  }

  if (selectedActivity) {
    filteredCountries = filteredCountries.filter((country) =>
      country.Activities.some((activity) => activity.name === selectedActivity)
    );
  }

  return filteredCountries;
};

const applySort = (countries, selectedNameOrder, selectedPopulationOrder) => {
  let sortedCountries = [...countries];

  if (selectedNameOrder === "name_asc") {
    sortedCountries.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedNameOrder === "name_desc") {
    sortedCountries.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (selectedPopulationOrder === "population_asc") {
    sortedCountries.sort((a, b) => a.population - b.population);
  } else if (selectedPopulationOrder === "population_desc") {
    sortedCountries.sort((a, b) => b.population - a.population);
  }

  return sortedCountries;
};
