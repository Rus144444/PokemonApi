import { useState} from "react";
import { PokemonList } from "./UI/PokemonList";
import { PokemonDetails } from "./UI/PokemonDetails";
import { PageTitle } from "./UI/PageTitle";
import './App.css'

type Pokemon = {
  name: string
  url: string
}

export function App() {  
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon|null>(null);
  return (
    <div style={{display: "flex", alignItems: "left", flexDirection: "column"}}>
      <div>
        <PageTitle title="Pokemons API" />
      </div>
      <div style={{ display: "flex", gap: "40px" }}>
        <PokemonDetails pokemon={selectedPokemon} />
        <PokemonList
          setSelectedPokemon={setSelectedPokemon}
          selectedPokemon={selectedPokemon}
        />
      </div>
    </div>
  );
}