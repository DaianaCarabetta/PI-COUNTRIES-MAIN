import {
  createActivity,
  getActivities,
} from "../../services/service.activities";

export const CREATE_ACTIVITY_REQUEST = "CREATE_ACTIVITY_REQUEST";
export const CREATE_ACTIVITY_SUCCESS = "CREATE_ACTIVITY_SUCCESS";
export const CREATE_ACTIVITY_FAILURE = "CREATE_ACTIVITY_FAILURE";

export const FETCH_ACTIVITIES_REQUEST = "FETCH_ACTIVITIES_REQUEST";
export const FETCH_ACTIVITIES_SUCCESS = "FETCH_ACTIVITIES_SUCCESS";
export const FETCH_ACTIVITIES_FAILURE = "FETCH_ACTIVITIES_FAILURE";

export const createActivityRequest = () => ({
  type: CREATE_ACTIVITY_REQUEST,
});
export const createActivitySuccess = (activity) => ({
  type: CREATE_ACTIVITY_SUCCESS,
  payload: activity,
});
export const createActivityFailure = (error) => ({
  type: CREATE_ACTIVITY_FAILURE,
  payload: error,
});

export const fetchActivitiesRequest = () => ({
  type: FETCH_ACTIVITIES_REQUEST,
});
export const fetchActivitiesSuccess = (activity) => ({
  type: FETCH_ACTIVITIES_SUCCESS,
  payload: activity,
});
export const fetchActivitiesFailure = (error) => ({
  type: FETCH_ACTIVITIES_FAILURE,
  payload: error,
});

export const addActivity = (data) => async (dispatch) => {
  dispatch(createActivityRequest());
  try {
    const activity = await createActivity(data);
    dispatch(createActivitySuccess(activity));
  } catch (error) {
    dispatch(createActivityFailure(error));
  }
};

export const listActivities = (params) => async (dispatch) => {
  dispatch(fetchActivitiesRequest());
  try {
    const activities = await getActivities(params);
    dispatch(fetchActivitiesSuccess(activities));
  } catch (error) {
    dispatch(fetchActivitiesFailure(error));
  }
};
