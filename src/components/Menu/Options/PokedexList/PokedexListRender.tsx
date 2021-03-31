import React from 'react'
import { capitalize } from '../../../../helperFunctions'

interface Props {
    pokedexList: Array<NameUrl>
    selectedPokedexVersion: number
    setSelectedPokedexVersion: (number:number) => void
}

interface NameUrl{
    name: string
    url:string
}

export const PokedexListRender: React.FC<Props> = (props) => {

    return (
        <select value={props.selectedPokedexVersion} onChange={(event) => props.setSelectedPokedexVersion(parseInt(event.target.value))}>
            {props.pokedexList.map((pokedex) => {
                let value:string = pokedex.url.replace("https://pokeapi.co/api/v2/pokedex/", "").replace("/", "")
                let name:string = capitalize(pokedex.name.replace("original-", ""))
                return <option key={pokedex.name} value={value}>{name}</option>
            })}
        </select>
    )
}
