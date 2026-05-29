import { useSelectedPokemon } from "./BLL/useSelectedPokemon";
import { PokemonList } from "./UI/PokemonList";
import { PokemonDetails } from "./UI/PokemonDetails";
import { PageTitle } from "./UI/PageTitle";

export function App() {  
  const {selectedPokemon, setSelectedPokemon} = useSelectedPokemon()
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