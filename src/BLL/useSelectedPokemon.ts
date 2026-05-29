import { useState} from "react";

type Pokemon = {
  name: string
  url: string
}

export function useSelectedPokemon(){
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon|null>(null);
  return {
    selectedPokemon,
    setSelectedPokemon
  }
}
