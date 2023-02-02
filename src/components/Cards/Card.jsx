import React from "react";
import { useDispatch } from "react-redux";
import { removeCity } from "../../redux/actions";

function Card({ id, name, temp_min, temp_max, icon }) {
  const dispatch = useDispatch();

  const handleOnClickRemove = () => {
    dispatch(removeCity(id));
  };

  return (
    <div className="card">
      <figure className="card__picture">
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt=""
          className="card__img"
        />
      </figure>

      <h2 className="card__title">{name}</h2>

      <section className="card__info">
        <h3 className="card__temp">Temp. min: {temp_min}</h3>
        <h3 className="card__temp">Temp. max: {temp_max}</h3>
      </section>

      <button className="card__close" onClick={handleOnClickRemove}>
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
}

export default Card;
