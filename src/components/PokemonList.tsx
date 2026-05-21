import { useState, useEffect } from "react";

type ApiResults = {
  name: string;
  url: string;
};

type PokemonListType = {
  results: ApiResults[];
};

type PokemonListProps = {
  setSelectedPokemon: (pokemon: ApiResults) => void;
  selectedPokemon: ApiResults | null;
};

export function PokemonList({
  setSelectedPokemon,
  selectedPokemon,
}: PokemonListProps) {
  const [pokemons, setPokemons] = useState<ApiResults[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
      .then((res) => res.json())
      .then((json: PokemonListType) => {
        setPokemons(json.results);
      });
  }, []);

  return (
    <ul style={{ listStyle: "none" }}>
      {pokemons.length === 0 && <div>Loading...</div>}

      {pokemons.map((pokemon) => (
        <li
          key={pokemon.url}
          onClick={() => setSelectedPokemon(pokemon)}
          style={
            selectedPokemon?.url === pokemon.url
              ? { border: "2px solid red" }
              : {}
          }
        >
          {pokemon.name}
        </li>
      ))}
    </ul>
  );
}