import {useState, useEffect } from "react";

export function PokemonDetails ({pokemon}) {
    const [pokSel, setPokSel] = useState(null)
    
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