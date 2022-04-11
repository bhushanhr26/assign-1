import React from "react";
import { useLocation } from "react-router-dom";
import "./Form.css";
import axios from "axios";
import { Button } from "@mui/material";

export default function Main() {
  const history = useLocation();
  const [data, setData] = React.useState([]);
  const [country, setCountry] = React.useState({});
  const [clicked, setClicked] = React.useState(false);

  React.useEffect(() => {
    setData(history);
    console.log(history);
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=e431814ca15079babab991a7d593d577&query=new delhi`
      )
      .then((data) => {
        setCountry(data.data.current);
        console.log(data.data.current);
      });
  }, []);
  React.useEffect(() => {}, []);
  return (
    <div className="div1">
      <div>
        {data.state?.map((x, i) => {
          return (
            <div key={i}>
              <div className="div2">Capital:{x.capital}</div>
              <div className="div2">Population:{x.population}</div>
              <div className="div2">
                Lating:
                {x.latlng.map((y, index) => {
                  return (
                    <div key={index}>
                      <div>{y}</div>
                    </div>
                  );
                })}
              </div>
              <div className="div2">Flag:{x.flag}</div>
              <div className="div2">URL:{x.coatOfArms.png}</div>
            </div>
          );
        })}
      </div>
      <Button variant="contained" onClick={()=>{
        setClicked(true)
      }}> Capital</Button>
     {clicked? <div className="div1 div2">
        <p>{country.temperature}</p>
        <p>{country.weather_icons}</p>
        <p>{country.wind_speed}</p>
      </div>:''}
    </div>
  );
}
