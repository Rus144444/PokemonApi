import { useState, useEffect } from "react";

export function PokemonList ({setSelectedPokemon, selectedPokemonUrl, setSelectedPokemonUrl}) {
    const [pokemons, setPokemons] = useState(null);

    useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
      .then((res) => res.json())
      .then((json) => {
        setPokemons(json.results);
      });
    }, []);


    return <ul style={{ listStyle: "none" }}>
      {!pokemons && <div>Loading...</div>}
      {pokemons?.map((pokemon) => (
        <li
          key={pokemon.url}
          onClick={() => {setSelectedPokemon(pokemon); setSelectedPokemonUrl(pokemon.url)}}
          style={
            selectedPokemonUrl === pokemon.url
              ? { border: "2px solid red" }
              : {}
          }
        >
          {pokemon.name}
        </li>
      ))}
    </ul>
}