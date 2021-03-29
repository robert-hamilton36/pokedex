import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getPokemon } from '../../apis/pokemon'
import PokemonViewRenderer from './PokemonViewRenderer'

interface Pokemon{
    name: string
    sprites: object
}

export const PokemonViewContainer = () => {
    const [pokemonInfo, setPokemonInfo] = useState<Pokemon | null>(null)
    const { pokemonId } = useParams<{ pokemonId: string}>()

    useEffect (()=> {
        getPokemon(pokemonId)
        .then( results => setPokemonInfo(results) )
    }, [])

    if(pokemonInfo){
        return (
            <PokemonViewRenderer pokemonInfo={pokemonInfo}/>
        )
    }else{
        return (
            <h1>Loading...</h1>
        )
    }
}
