import { fetchData } from "./service.api";

export const getCountryByCode = async (code) => {
  return await fetchData(`/countries/${code}`);
};

export const getCountries = async (params) => {
  return await fetchData(`/countries`, params);
};
