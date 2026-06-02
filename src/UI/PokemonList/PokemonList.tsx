import { usePokemons } from "../../BLL/usePokemons"
import { PageTitle } from "../PageTitle/PageTitle";
import type { ApiResults } from "../../DAL/api";
import css from "./PokemonList.module.css"
import clsx from "clsx";

type PokemonListProps ={
  setSelectedPokemon: (pokemon: ApiResults) => void;
  selectedPokemon: ApiResults | null;
};

export function PokemonList({setSelectedPokemon, selectedPokemon,}: PokemonListProps) {
  const {isError, isLoading, pokemons} = usePokemons()
  const classNamePokemonList = clsx({
      [css.list]: true,
  })
  return (
    <ul className={classNamePokemonList}>
      <PageTitle title="Pomons list"/>
      {isLoading && <div>Loading...</div>}
      {isError && <div>error: {isError}</div>}
      {pokemons.map((pokemon) => {
        const classNamePokemonSelected = clsx({
            [css.selectedPokemonBorder]:
            selectedPokemon?.url === pokemon.url,
          })

        return (
          <li
            key={pokemon.url} 
            onClick={() => setSelectedPokemon(pokemon)} 
            className={classNamePokemonSelected}>{pokemon.name}</li>
      )
      })}
    </ul>
  );
}