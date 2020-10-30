import React, { useState, useEffect } from "react";

const Forecasts = ({ ...props }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const {
      forecasts: { list },
    } = props;

    setData(list);
  });

  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => {
            return (
              <li key={index}>
                <p>{item.clouds.all}</p>
                <p>{item.wind.speed}</p>
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default Forecasts;
