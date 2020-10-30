import axios from "axios";
import devHostUrl from "../../constants/devHostUrl";
import apiKey from "../../constants/apiKey";
import forecastsCreators from "../actionCreators/forecasts";

const {
  getForecastsAttempt,
  getForecastsSuccess,
  getForecastsFailure,
} = forecastsCreators;

export const getForecastsByCity = (city) => {
  return (dispatch) => {
    dispatch(getForecastsAttempt());
    return axios
      .get(`${devHostUrl}/forecast?q=${city}&appid=${apiKey}`)
      .then((res) => {
        dispatch(getForecastsSuccess(res.data));
        return res.data;
      })
      .catch((err) => {
        dispatch(getForecastsFailure(err.message));
      });
  };
};

const forecastsService = {
  getForecastsByCity,
};

export default forecastsService;
