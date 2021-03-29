import React from 'react'
import { capitalize } from '../../helperFunctions'

interface Pokemon{
    name: string
    sprites: any
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

interface Props{
    pokemonInfo: Pokemon
}

export default function PokemonViewRenderer(props:Props) {
    console.log(props.pokemonInfo.name)
    return (
        <>
            <h1>{capitalize(props.pokemonInfo.name)}</h1>
            <p>{"Height: " + props.pokemonInfo.height}</p>
            <p>{"Weight: " + props.pokemonInfo.weight}</p>
            <p>{"Type: " + props.pokemonInfo.types.reduce(( string, type) => string + " " + capitalize(type.type.name), "")}</p>
            <img src={props.pokemonInfo.sprites.front_default} alt={"sprite of " + props.pokemonInfo.name || ""}/>
        </>
    )
}
