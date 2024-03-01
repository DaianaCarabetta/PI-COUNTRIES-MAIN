import { combineReducers } from "redux";

import countriesReducer from "./reducer.countries";
import activitiesReducer from "./reducer.activities";

const rootReducer = combineReducers({
  countries: countriesReducer,
  activities: activitiesReducer,
});

export default rootReducer;
