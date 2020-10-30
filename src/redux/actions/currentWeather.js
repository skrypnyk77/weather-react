import axios from "axios";
import devHostUrl from "../../constants/devHostUrl";
import apiKey from "../../constants/apiKey";
import currentWeatherCreators from "../actionCreators/currentWeather";

const {
  getCurrentWeatherAttempt,
  getCurrentWeatherSuccess,
  getCurrentWeatherFailure,
} = currentWeatherCreators;

export const getCurrentWeatherByCity = (city) => {
  return (dispatch) => {
    dispatch(getCurrentWeatherAttempt());
    return axios
      .get(`${devHostUrl}/weather?q=${city}&appid=${apiKey}`)
      .then((res) => {
        dispatch(getCurrentWeatherSuccess(res.data));
        return res.data;
      })
      .catch((err) => {
        dispatch(getCurrentWeatherFailure(err.message));
      });
  };
};

const currentWeatherService = {
  getCurrentWeatherByCity,
};

export default currentWeatherService;
