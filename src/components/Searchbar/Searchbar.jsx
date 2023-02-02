import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCity } from "../../redux/actions";

function Searchbar() {
  const dispatch = useDispatch();

  const [captureInput, setCaptureInput] = useState("");
  const [viewAlert, setViewAlert] = useState();

  const handleOnChange = (e) => {
    setCaptureInput(e.target.value);
  };

  const handleOnClick = () => {
    if (!captureInput) {
      setViewAlert(<p className="error">Ingresa una ciudad/pais</p>);
      setTimeout(() => {
        setViewAlert();
      }, 2000);
    }
    dispatch(getCity(captureInput));
    setCaptureInput("");
  };

  return (
    <div className="searchbar">
      <div className="searchbar__elements">
        <input
          type="search"
          className="searchbar__input"
          value={captureInput}
          onChange={handleOnChange}
        />
        <button onClick={handleOnClick} className="searchbar__btn">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
      
      <div className="searchbar__alert">{viewAlert && viewAlert}</div>
    </div>
  );
}

export default Searchbar;
