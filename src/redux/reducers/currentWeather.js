import currentWeatherTypes from "../actionTypes/currentWeather";

const {
  CURRENT_WEATHER_ATTEMPT,
  CURRENT_WEATHER_SUCCESS,
  CURRENT_WEATHER_FAILURE,
} = currentWeatherTypes;

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const currentWeather = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_WEATHER_ATTEMPT:
      return {
        ...state,
        loading: true,
      };
    case CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: Object.assign(state.data, action.payload),
      };
    case CURRENT_WEATHER_FAILURE:
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
