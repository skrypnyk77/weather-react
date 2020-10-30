import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardContent } from "@material-ui/core";
import CurrentWeather from "./CurrentWeather";
import Forecasts from "./Forecasts";

const WeatherCard = ({ ...props }) => {
  const classes = useStyles({});
  const { data, forecasts } = props;

  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <CurrentWeather data={data} />
          </CardContent>
          <CardContent>
            <Forecasts forecasts={forecasts} />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default WeatherCard;

const useStyles = makeStyles({
  card: {
    width: 600,
  },
});
