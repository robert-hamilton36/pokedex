import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getPokemon } from '../../apis/pokemon'
import PokemonViewRenderer from './PokemonViewRenderer'

interface Pokemon{
    name: string
    sprites: object
    height: number
    weight: number
    types: Array<Type>
}

interface Type{
    type: {
        name:string
        url:string
    }
}

export const PokemonViewContainer = () => {
    const [pokemonInfo, setPokemonInfo] = useState<Pokemon | null>(null)
    const { pokemonId } = useParams<{ pokemonId: string}>()

    useEffect (()=> {
        getPokemon(pokemonId)
        .then( results => setPokemonInfo(results) )
    }, [pokemonId])

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
