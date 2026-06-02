import { usePokemonDetails } from "../../BLL/usePokemonDetails";
import { PageTitle } from "../PageTitle/PageTitle";
import type { ApiResults,  } from "../../DAL/api"

type PokemonDetailsProps = {
  pokemon: ApiResults | null
}

export function PokemonDetails ({pokemon}: PokemonDetailsProps) {
    const {pokSel, isLoading, isError} = usePokemonDetails(pokemon)
    
    return(
        <div>
            <PageTitle title="Pokemon details"/>
            <h3>{pokSel?.name}</h3>

            {!pokSel && <div>Pokemon не выбран.</div>}
            {isLoading && <div>Loading...</div>}
            {isError &&   <div>error: {isError}</div>}
            <img
                src={pokSel?.sprites.front_default}
                alt={pokSel?.name}
            />
        </div>
    )
}