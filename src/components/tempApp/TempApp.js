import React, { useState, useEffect } from "react";
import "./styles.scss";

export const TempApp = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const apiKey = "91c05bf13a4f90b0681fa31bd8db0227";

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);
      const weatherRes = await response.json();
      setData(weatherRes.main);
      // console.log("kbd", res);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            name="search"
            placeholder="Search Country"
            value={search}
            className="inputField"
            onChange={handleChange}
          ></input>
        </div>
        {!data ? (
          <p>No data found</p>
        ) : (
          <div>
            <div className="information">
              <h2 className="heading">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temperature">{data.temp}°C</h1>
              <h3 className="max_temp">
                Min:{data.temp_min}°C | Max:{data.temp_max}°C
              </h3>
            </div>
            <div className="wave-one"></div>
            <div className="wave two"></div>
          </div>
        )}
      </div>
    </>
  );
};
