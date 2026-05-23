export type ApiResults = {
  name: string;
  url: string;
};
export type PokemonListType = {
  results: ApiResults[];
};
export type PokSelType = {
    name: string
    sprites: FrontDefaultType
}
export type FrontDefaultType = {
    front_default: string
}

export async function getPokemons():Promise <PokemonListType> {
    return await fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
      .then((res) => res.json())      
}

export async function getPokemon(name: string): Promise<PokSelType> { 
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => res.json())
}