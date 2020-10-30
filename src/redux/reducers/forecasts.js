import forecastsTypes from "../actionTypes/forecasts";

const {
  FORECASTS_ATTEMPT,
  FORECASTS_SUCCESS,
  FORECASTS_FAILURE,
} = forecastsTypes;

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const currentWeather = (state = initialState, action) => {
  switch (action.type) {
    case FORECASTS_ATTEMPT:
      return {
        ...state,
        loading: true,
      };
    case FORECASTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: Object.assign(state.data, action.payload),
      };
    case FORECASTS_FAILURE:
      return {
        ...state,
        data: {},
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default currentWeather;
