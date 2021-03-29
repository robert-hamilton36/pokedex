import React from 'react'
import { capitalize } from '../../helperFunctions'

interface Pokemon{
    name: string
    sprites: any
}

interface Props{
    pokemonInfo: Pokemon
}

export default function PokemonViewRenderer(props:Props) {
    return (
        <div>
            <h1>{capitalize(props.pokemonInfo.name)}</h1>
            <img src={props.pokemonInfo.sprites.front_default} />
        </div>
    )
}
