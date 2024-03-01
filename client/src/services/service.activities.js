import { postData, fetchData } from "./service.api";

export const createActivity = async (data) => {
  try {
    const response = await postData(`/activities`, data);
    return response;
  } catch (error) {
    console.error("Error creating activity:", error);
    throw error;
  }
};

export const getActivities = async (params) => {
  try {
    const response = await fetchData(`/activities`, params);
    return response;
  } catch (error) {
    console.error("Error listing activities:", error);
    throw error;
  }
};
