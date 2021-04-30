import React from 'react'
import { Link } from 'react-router-dom'

import { capitalize } from '../../../helperFunctions'

interface Props {
    pokemonList: Pokemon[]
}

interface Pokemon {
    entry_number: number
    pokemon_species: {name: string
    url:string}
}

export const PokemonListRenderer: React.FC<Props> = (props) => {
    console.log(props)
    return (
        <>
        <h1></h1>
        <ul>
            {props.pokemonList.map((pokemon, index) => {
            let link = "/pokemon/" + pokemon.entry_number
            return <li key={index}><Link to={link}>{pokemon.entry_number + " " + capitalize(pokemon.pokemon_species.name)}</Link></li>
            })}
        </ul>
        </>
    )
}
