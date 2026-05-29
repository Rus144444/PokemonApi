import {useState, useEffect } from "react";
import {getPokemon, type PokSelType } from "../DAL/api"


export function usePokemonDetails (pokemon){
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

    return{
        pokSel,
        isLoading,
        isError
    }
}