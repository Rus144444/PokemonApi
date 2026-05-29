import { useState, useEffect } from "react";
import { type PokemonListType, type ApiResults, getPokemons } from "../DAL/api";

export function usePokemons(){
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


  return {
    pokemons,
    isLoading,
    isError
  }
}