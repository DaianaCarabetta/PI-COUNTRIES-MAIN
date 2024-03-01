import axios from "axios";

const baseURL = "http://localhost:3001/";

const apiService = axios.create({
  baseURL,
});

export const fetchData = async (endpoint, params) => {
  try {
    const response = await apiService.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await apiService.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const updateData = async (endpoint, data) => {
  try {
    const response = await apiService.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

export const removeData = async (endpoint) => {
  try {
    const response = await apiService.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error removing data:", error);
    throw error;
  }
};
