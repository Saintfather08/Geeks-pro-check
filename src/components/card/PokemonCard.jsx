import React from "react";
import "./Pokemoncard.css";

const PokemonCard = ({ name, imageUrl, types }) => {
  return (
    <div className="pokemon-card">
      <img src={imageUrl} alt={name} className="pokemon-card__image" />
      <h2 className="pokemon-card__name">{name}</h2>
      <div className="pokemon-card__types">
        {types.map((type) => (
          <span
            key={type}
            className={`pokemon-card__type pokemon-card__type--${type}`}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
