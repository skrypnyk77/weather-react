import { combineReducers } from "redux";
import currentWeather from "./currentWeather";
import forecasts from "./forecasts";

const rootReducer = combineReducers({
  currentWeather,
  forecasts,
});

export default rootReducer;
