import {useState, useEffect } from "react";
import { PageTitle } from "./PageTitle";
import {getPokemon, type ApiResults, type PokSelType } from "../DAL/api"


type PokemonDetailsProps = {
  pokemon: ApiResults | null
}

export function PokemonDetails ({pokemon}: PokemonDetailsProps) {
    const [pokSel, setPokSel] = useState<PokSelType | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState<string|null>(null)
    
    useEffect(() => {
    if(!pokemon){
        setPokSel(null)
        return
    }

    setIsLoading(true)
    setIsError(null);
    setPokSel(null);


      setTimeout(()=> getPokemon(pokemon.name)
        .then((data) => {setPokSel(data)})
        .catch((error: Error) => setIsError(error.message))
        .finally(()=> setIsLoading(false)), 2000 )
        
    }, [pokemon?.name])
    if(isError){
    return (
            <div>
                <PageTitle title="Pomons details"/>
                <div>error: {isError}</div>
            </div>
        )
    }
    if(isLoading){
    return (
            <div>
                <PageTitle title="Pokemon details"/>
                <div>Loading...</div>
            </div>
        )
    }
    if(!pokSel){
    return (
            <div>
                <PageTitle title="Pokemon details"/>
                <div>Pokemon не выбран.</div>
            </div>
        )
    }
    return(
        <div>
            <PageTitle title="Pokemon details"/>
            <h3>{pokSel?.name}</h3>
            <img
                src={pokSel?.sprites.front_default}
                alt={pokSel?.name}
            />
        </div>
    )
}