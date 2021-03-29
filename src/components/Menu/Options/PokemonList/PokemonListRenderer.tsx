import React from 'react'
import { Link } from 'react-router-dom'
import { capitalize } from '../../../../helperFunctions'


interface Pokemon {
    entry_number: number
    pokemon_species: {name: string
    url:string}
}

interface Props {
    pokeList: Array<Pokemon>
}

export const PokemonListRenderer: React.FC<Props> = (props) => {
    return (
        <>
        <ul>
            {props.pokeList.map((pokemon, index) => {
                
                // let link = "/pokemon/" + (index + 1)
                //pokemon.url gives the api address for that pokemon, this removes everything but /pokemon/number
                let link = "/pokemon/" + pokemon.entry_number
            return <li key={index}><Link to={link}>{pokemon.entry_number + " " + capitalize(pokemon.pokemon_species.name)}</Link></li>
            })}
        </ul>
        </>
    )
}