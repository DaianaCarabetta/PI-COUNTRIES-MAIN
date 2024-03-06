import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRY_BY_CODE_REQUEST,
  FETCH_COUNTRY_BY_CODE_SUCCESS,
  FETCH_COUNTRY_BY_CODE_FAILURE,
  FETCH_COUNTRIES_BY_NAME_REQUEST,
  FETCH_COUNTRIES_BY_NAME_SUCCESS,
  FETCH_COUNTRIES_BY_NAME_FAILURE,
  SET_CURRENT_PAGE,
  UPDATE_CURRENT_COUNTRIES,
  UPDATE_TOTAL_FILTERED_COUNTRIES,
  SET_SELECTED_CONTINENT,
  SET_SELECTED_ACTIVITY,
  SET_SELECTED_NAME_ORDER,
  SET_SELECTED_POPULATION_ORDER,
} from "../actions/actions.countries";

const initialState = {
  countries: [],
  loading: false,
  error: null,
  currentPage: 1,
  countriesPerPage: 10,
  totalFilteredCountries: 1,
  currentCountries: [],
  selectedContinent: "",
  selectedActivity: "",
  selectedNameOrder: "",
  selectedPopulationOrder: "",
  name: "",
  capital: "",
  population: 0,
  flagImage: "",
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_BY_NAME_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_COUNTRIES_BY_NAME_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        currentCountries: action.payload,
        currentPage: 1,
      };

    case FETCH_COUNTRIES_BY_NAME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FETCH_COUNTRY_BY_CODE_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_COUNTRY_BY_CODE_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedCountry: action.payload,
        error: null,
      };

    case FETCH_COUNTRY_BY_CODE_FAILURE:
      return {
        ...state,
        loading: false,
        selectedCountry: null,
        error: action.payload,
      };

    case FETCH_COUNTRIES_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        countries: [...action.payload],
      };

    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        countries: null,
        error: action.payload,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case UPDATE_CURRENT_COUNTRIES:
      return {
        ...state,
        currentCountries: action.payload,
      };
    case UPDATE_TOTAL_FILTERED_COUNTRIES:
      return {
        ...state,
        totalFilteredCountries: action.payload,
      };
    case SET_SELECTED_CONTINENT:
      return {
        ...state,
        selectedContinent: action.payload,
      };
    case SET_SELECTED_ACTIVITY:
      return {
        ...state,
        selectedActivity: action.payload,
      };
    case SET_SELECTED_NAME_ORDER:
      return {
        ...state,
        selectedNameOrder: action.payload,
      };
    case SET_SELECTED_POPULATION_ORDER:
      return {
        ...state,
        selectedPopulationOrder: action.payload,
      };
    default:
      return state;
  }
};

export default countriesReducer;
