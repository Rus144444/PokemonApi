import { usePokemons } from "../BLL/usePokemons"
import { PageTitle } from "./PageTitle";
import type { ApiResults } from "../DAL/api";


type PokemonListProps = {
  setSelectedPokemon: (pokemon: ApiResults) => void;
  selectedPokemon: ApiResults | null;
};

export function PokemonList({setSelectedPokemon, selectedPokemon,}: PokemonListProps) {
  const {isError, isLoading, pokemons} = usePokemons()
  return (
    <ul style={{ listStyle: "none" }}>
      <PageTitle title="Pomons list"/>
      {isLoading && <div>Loading...</div>}
      {isError && <div>error: {isError}</div>}
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