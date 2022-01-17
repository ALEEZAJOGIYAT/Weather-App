import React, { useState } from "react";
import "./styles.scss";

export const TempApp = () => {
  const [input, setInput] = useState();
  console.log("nfn", input);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            name="search"
            className="inputField"
            value={input}
            onChange={handleChange}
          ></input>
        </div>
        <div className="information">
          <h2 className="heading">
            <i class="fas fa-street-view"></i>
            Pune
          </h2>
          <h1 className="temperature">52.5</h1>
          <h3 className="max_temp">Min:50 | Max:52</h3>
        </div>
        <div className="wave-one"></div>
        <div className="wave-two"></div>
        <div className="wave-three"></div>
      </div>
    </>
  );
};
