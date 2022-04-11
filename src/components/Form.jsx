import React from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
//import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Form() {
  const [value, setValue] = React.useState("");
  const [country, setCountry] = React.useState([]);
  const [clicked, setClicked] = React.useState(false);

  const callApi = () => {
    axios.get(`https://restcountries.com/v3.1/name/${value}`).then((data) => {
      setCountry(data);
      //console.log(data);
      navigate("Home", { state: data.data });
    });
  };

  const navigate = useNavigate();

  return (
    <div className="div1">
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={value}
          placeholder="country name"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          type="submit"
          value="Submit"
          disabled={!value}
          onClick={() => {
            callApi();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
