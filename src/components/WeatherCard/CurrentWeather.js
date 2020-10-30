import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const CurrentWeather = ({ ...props }) => {
  const classes = useStyles({});
  const { data } = props;

  const convertToDate = (date) => {
    let d = new Date(date);
    return d.toDateString();
  };

  const convertToCelcium = (degree) => {
    return (degree - 273.15).toFixed(2);
  };

  return (
    <>
      {Object.keys(data).length === 0 && data.constructor === Object ? null : (
        <>
          <Box className={classes.title} variant="h1" component="h1">
            <Typography>{data.name},</Typography>
            <Typography>{data.sys.country}</Typography>
          </Box>
          <Box className={classes.shortDescription} component="div">
            <Typography> {convertToDate(data.dt)},</Typography>
            <Typography>{data.weather[0].main}</Typography>
          </Box>
          <Box className={classes.title}>
            <Typography>{convertToCelcium(data.main.temp)}</Typography>
            <Typography>°C</Typography>
          </Box>
          <Box className={classes.wind}>
            <Typography>Wind: </Typography>
            <Typography> {data.wind.speed} km/h</Typography>
          </Box>
          <Box className={classes.humidity}>
            <Typography>Humidity: </Typography>
            <Typography> {data.main.humidity}%</Typography>
          </Box>
          <Box className={classes.mainDescription} component="div">
            {data.weather[0].description}
          </Box>
        </>
      )}
    </>
  );
};

export default CurrentWeather;

const useStyles = makeStyles({
  title: {
    display: "flex",
    alignItems: "center",
    color: "black",
    fontSize: 24,
    fontWeight: 500,
    marginBottom: 10,
  },
  shortDescription: {
    display: "flex",
    alignItems: "center",
    color: "darkgrey",
    fontSize: 16,
    marginBottom: 10,
  },
  mainDescription: {
    display: "flex",
    alignItems: "center",
    color: "black",
    fontSize: 26,
    fontWeight: 500,
    marginBottom: 10,
  },
  wind: {
    display: "flex",
    alignItems: "center",
    color: "red",
  },
  humidity: {
    display: "flex",
    alignItems: "center",
  },
});
