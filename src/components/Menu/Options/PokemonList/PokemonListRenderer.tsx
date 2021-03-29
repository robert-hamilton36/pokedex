import React from 'react'
import { Link } from 'react-router-dom'
import { capitalize } from '../../../../helperFunctions'


interface Pokemon {
    name: string
    url:string
}

interface Props {
    pokeList: Array<Pokemon>
}

export const PokemonListRenderer: React.FC<Props> = (props) => {
    return (
        <>
        <ul>
            <Link to="/pokemon/1">To pokemon</Link>
            {props.pokeList.map((pokemon, index) => {
                
                // let link = "/pokemon/" + (index + 1)
                //pokemon.url gives the api address for that pokemon, this removes everything but /pokemon/number
                let link = pokemon.url.replace("https://pokeapi.co/api/v2", "")
            return <li key={index}><Link to={link}><p>{capitalize(pokemon.name)}</p></Link></li>
            })}
        </ul>
        </>
    )
}