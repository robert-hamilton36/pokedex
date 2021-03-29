import React,{ useEffect, useState }  from 'react'

import { getPokemonList } from '../../../../apis/pokemon'
import { PokemonListButtons } from './PokemonListButtons'
import { PokemonListLimitOptions } from './PokemonListLimitOptions'
import { PokemonListRenderer } from './PokemonListRenderer'

interface Pokemon {
    name: string
    url:string
}

export const PokemonListContainer = () => {
    const [pokeList, setPokeList] = useState<Array<Pokemon>>([])
    const [offset, setOffset] = useState<number>(0)
    const [limit, setLimit] = useState<number>(50)

    const childSetOffset = (value: number) => {
        setOffset(value)
    }

    const childSetLimit = (value:number) => {
        setLimit(value)
    }

    useEffect (()=> {
        getPokemonList(limit, offset)
        .then( results => setPokeList(results) )
    }, [offset, limit])
    
    return (
        <>
        <PokemonListLimitOptions limit={limit} setLimit={childSetLimit}/>
        <PokemonListButtons limit={limit} offset={offset} setOffset={childSetOffset}/>
        <PokemonListRenderer pokeList={pokeList}/>
        </>
    )
}
