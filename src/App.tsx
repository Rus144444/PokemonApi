import { useState} from "react";
import { PokemonList } from "./components/PokemonList";
import { PokemonDetails } from "./components/PokemonDetails";
import { InputTitle } from "./components/InputTitle";
import './App.css'

export function App() {  
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState(null);


  return (
    <div style={{display: "flex", alignItems: "left", flexDirection: "column"}}>
      <div>
        <InputTitle />
      </div>
      <div style={{ display: "flex", gap: "40px" }}>
        <PokemonDetails pokemon={selectedPokemon} />
        <PokemonList
          setSelectedPokemon={setSelectedPokemon}
          selectedPokemonUrl={selectedPokemonUrl}
          setSelectedPokemonUrl={setSelectedPokemonUrl}
        />
      </div>
    </div>

  );
}
 
