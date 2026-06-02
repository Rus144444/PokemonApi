import { useSelectedPokemon } from "../../BLL/useSelectedPokemon";
import { PokemonList } from "../PokemonList/PokemonList";
import { PokemonDetails } from "../PokemonDetails/PokemonDetails";
import { PageTitle } from "../PageTitle/PageTitle";
import  css from "./MainPage.module.css"
import clsx from "clsx";

export function MainPage (){
    const classNameMainPage = clsx({
      [css.block]: true
    })
    const {selectedPokemon, setSelectedPokemon} = useSelectedPokemon()
    return (
        <div className={classNameMainPage}>
              <div>
                <PageTitle title="Pokemons API" />
              </div>
              <div className={css.wrapper}>
                <PokemonDetails pokemon={selectedPokemon} />
                <PokemonList
                  setSelectedPokemon={setSelectedPokemon}
                  selectedPokemon={selectedPokemon}
                />
              </div>
        </div>
    )
}