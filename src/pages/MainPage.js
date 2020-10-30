import React, { useState } from "react";
import { connect } from "react-redux";
import currentWeatherActions from "../redux/actions/currentWeather";
import forecastsActions from "../redux/actions/forecasts";
import { Box } from "@material-ui/core";
import SearchForm from "../components/SearchForm";
import WeatherCard from "../components/WeatherCard";

const MainPage = ({ ...props }) => {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [forecasts, setForecasts] = useState({});

  const handleChangeInput = (e) => {
    setCity(e.target.value);
  };

  const getCityData = () => {
    const { getCurrentWeatherByCity } = props;
    return getCurrentWeatherByCity(city)
      .then((res) => {
        setData(() => {
          let newState = Object.assign({}, res);
          return newState;
        });
      })
      .catch((err) => console.log(err));
  };

  const getForecastsData = () => {
    const { getForecastsByCity } = props;
    return getForecastsByCity(city)
      .then((res) => {
        setForecasts(() => {
          let newState = Object.assign({}, res);
          return newState;
        });
      })
      .catch((err) => console.log(err));
  };

  const compareFunctions = () => {
    getForecastsData();
    getCityData();
  };

  return (
    <Box p={5} display="flex" alignItems="center" flexDirection="column">
      <SearchForm
        handleChangeInput={handleChangeInput}
        compareFunctions={compareFunctions}
      />
      <WeatherCard data={data} forecasts={forecasts} />
    </Box>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  forecasts: state.forecasts,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentWeatherByCity: (data) =>
    dispatch(currentWeatherActions.getCurrentWeatherByCity(data)),
  getForecastsByCity: (forecasts) =>
    dispatch(forecastsActions.getForecastsByCity(forecasts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
