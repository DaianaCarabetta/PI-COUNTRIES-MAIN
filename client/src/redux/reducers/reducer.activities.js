import {
  CREATE_ACTIVITY_REQUEST,
  CREATE_ACTIVITY_SUCCESS,
  CREATE_ACTIVITY_FAILURE,
  FETCH_ACTIVITIES_REQUEST,
  FETCH_ACTIVITIES_SUCCESS,
  FETCH_ACTIVITIES_FAILURE,
} from "../actions/actions.activities";

const initialState = {
  activities: [],
};

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACTIVITY_REQUEST:
      return { ...state, loading: true, error: null };

    case CREATE_ACTIVITY_SUCCESS:
      return {
        ...state,
        loading: false,
        activities: [...state.activities, action.payload],
      };

    case CREATE_ACTIVITY_FAILURE:
      return {
        ...state,
        loading: false,
        activities: null,
        error: action.payload,
      };

    case FETCH_ACTIVITIES_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: [...state.activities, ...action.payload],
      };

    case FETCH_ACTIVITIES_FAILURE:
      return {
        ...state,
        loading: false,
        activities: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default activitiesReducer;
