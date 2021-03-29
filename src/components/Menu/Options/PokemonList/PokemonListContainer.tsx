import React,{ useEffect, useState }  from 'react'

import { getPokemonList } from '../../../../apis/pokemon'
import { PokemonListRenderer } from './PokemonListRenderer'

interface Pokemon {
    entry_number: number
    pokemon_species: {name: string
    url:string}
}

export const PokemonListContainer = () => {
    const [pokeList, setPokeList] = useState<Array<Pokemon>>([])

    useEffect (()=> {
        getPokemonList()
        .then( results => setPokeList(results.pokemon_entries) )
    }, [])
    
    return (
        <PokemonListRenderer pokeList={pokeList}/>
    )
}
