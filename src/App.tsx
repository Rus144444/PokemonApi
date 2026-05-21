import { useState} from "react";
import { PokemonList } from "./components/PokemonList";
import { PokemonDetails } from "./components/PokemonDetails";
import { InputTitle } from "./components/InputTitle";
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
        <InputTitle />
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