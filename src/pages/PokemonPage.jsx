import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../components/card/PokemonCard";


const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        const pokemonResults = response.data.results;

        const pokemonDataPromises = pokemonResults.map((pokemon) =>
          axios.get(pokemon.url).then((res) => res.data)
        );

        const pokemonsData = await Promise.all(pokemonDataPromises);
        setPokemons(pokemonsData);
      } catch (err) {
        setError("Error fetching pokemons");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) {
    return <p>Wait bro i dont understand ("-.-")</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="pokemon-page">
      <h1>Pokémon List</h1>
      <h2>come on bro wait!</h2>
      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            imageUrl={pokemon.sprites.front_default}
            types={pokemon.types.map((type) => type.type.name)}
            
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonPage;
