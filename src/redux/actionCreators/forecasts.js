import forecastsType from "../actionTypes/forecasts";

const {
  FORECASTS_ATTEMPT,
  FORECASTS_SUCCESS,
  FORECASTS_FAILURE,
} = forecastsType;

export const getForecastsAttempt = () => ({
  type: FORECASTS_ATTEMPT,
});

export const getForecastsSuccess = (data) => ({
  type: FORECASTS_SUCCESS,
  payload: {
    ...data,
  },
});

export const getForecastsFailure = (error) => ({
  type: FORECASTS_FAILURE,
  payload: {
    error,
  },
});

const forecastsCreators = {
  getForecastsAttempt,
  getForecastsSuccess,
  getForecastsFailure,
};

export default forecastsCreators;
