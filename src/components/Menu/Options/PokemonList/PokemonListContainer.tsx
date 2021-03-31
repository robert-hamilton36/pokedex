import React,{ useEffect, useState }  from 'react'

import { getPokemonList, getPokedexList } from '../../../../apis/pokemon'
import { PokedexListRender } from '../PokedexList/PokedexListRender'
import { PokemonListRenderer } from './PokemonListRenderer'

interface Pokemon {
    entry_number: number
    pokemon_species: NameUrl
}

interface NameUrl{
    name: string
    url:string
}

export const PokemonListContainer = () => {
    const [ pokeList, setPokeList ] = useState<Array<Pokemon>>([])
    const [ pokedexVersionList, setPokedexVersionList ] = useState<Array<NameUrl>>([])
    const [ selectedPokedexVersion, setSelectedPokedexVersion ] = useState<number>(2)

    useEffect (() => {
        getPokemonList(selectedPokedexVersion)
        .then(results => setPokeList(results.pokemon_entries))
    }, [selectedPokedexVersion])

    useEffect (() => {
        getPokedexList()
        .then(results => {
            console.log(results)
            let allowedPokedexList = ["national", "kanto", "original-johto", "hoenn", "original-sinnoh", "original-unova"]
            let pokedex: Array<NameUrl> = results.filter((pokedexEntry: NameUrl) => allowedPokedexList.includes(pokedexEntry.name) )
            setPokedexVersionList(pokedex)
        })
    }, [])

    const childSetSelectedPokedexVersion = (number:number) => {
        setSelectedPokedexVersion(number)
    }
    
    return (
        <>
        <PokedexListRender pokedexList={pokedexVersionList} selectedPokedexVersion={selectedPokedexVersion} setSelectedPokedexVersion={childSetSelectedPokedexVersion}/>
        <PokemonListRenderer pokeList={pokeList}/>
        </>
    )
}
