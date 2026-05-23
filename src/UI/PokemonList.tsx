import { useState, useEffect } from "react";
import { PageTitle } from "./PageTitle";
import { type PokemonListType, type ApiResults, getPokemons } from "../DAL/api";


type PokemonListProps = {
  setSelectedPokemon: (pokemon: ApiResults) => void;
  selectedPokemon: ApiResults | null;
};

export function PokemonList({
  setSelectedPokemon,
  selectedPokemon,
}: PokemonListProps) {
  const [pokemons, setPokemons] = useState<ApiResults[]>([]);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<string|null>(null)

  useEffect(() => {
    setIsLoading(true)

    setTimeout(()=> getPokemons()
      .then((json: PokemonListType) => setPokemons(json.results))
      .catch((error: Error) => setIsError(error.message))
      .finally(()=> setIsLoading(false)), 5000)
  }, []);

  if(isError){
    return (
      <div>
          <PageTitle title="Pomons list"/>
          <div>error: {isError}</div>
      </div>
    )
  }
  if(isLoading){
    return (
            <div>
                <PageTitle title="Pomons list"/>
                <div>Loading...</div>
            </div>
        )
    }

  return (
    <ul style={{ listStyle: "none" }}>
      <PageTitle title="Pomons list"/>
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