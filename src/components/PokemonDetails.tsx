import {useState, useEffect } from "react";

type pokSelType = {
    name: string
    sprites: FrontDefaultType
}

type FrontDefaultType = {
    front_default: string
}

type PokemonType = {
    name: string
    url: string
}

type PokemonDetailsProps = {
  pokemon: PokemonType | null
}

export function PokemonDetails ({pokemon}: PokemonDetailsProps) {
    const [pokSel, setPokSel] = useState<pokSelType | null>(null)
    
    useEffect(() => {
    if(!pokemon){
        setPokSel(null)
        return
    }

    setPokSel(null)

      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then((res) => res.json())
        .then((data) => {setPokSel(data)});
    }, [pokemon?.name])

    return(
        <div>
            {!pokSel && <div>Pokemon не выбран.</div>}
            <h3>{pokSel?.name}</h3>
            <img
                src={pokSel?.sprites.front_default}
                alt={pokSel?.name}
            />
        </div>
    )
}