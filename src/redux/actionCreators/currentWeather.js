import currentWeatherTypes from "../actionTypes/currentWeather";

const {
  CURRENT_WEATHER_ATTEMPT,
  CURRENT_WEATHER_SUCCESS,
  CURRENT_WEATHER_FAILURE,
} = currentWeatherTypes;

export const getCurrentWeatherAttempt = () => ({
  type: CURRENT_WEATHER_ATTEMPT,
});

export const getCurrentWeatherSuccess = (data) => ({
  type: CURRENT_WEATHER_SUCCESS,
  payload: {
    ...data,
  },
});

export const getCurrentWeatherFailure = (error) => ({
  type: CURRENT_WEATHER_FAILURE,
  payload: {
    error,
  },
});

const currentWeatherCreators = {
  getCurrentWeatherAttempt,
  getCurrentWeatherSuccess,
  getCurrentWeatherFailure,
};

export default currentWeatherCreators;
