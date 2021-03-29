import React,{ useEffect, useState }  from 'react'

import { getPokemonList } from '../../apis/pokemon'
import { PokemonListRenderer } from './PokemonListRenderer'


export const PokemonListContainer = () => {
    const [pokeList, setPokeList] = useState([])

    useEffect (()=> {
        getPokemonList()
        .then( results => setPokeList(results) )
    })
    
    return (
        <PokemonListRenderer pokeList={pokeList}/>
    )
}
