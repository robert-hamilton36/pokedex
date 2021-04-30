import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { callUrl } from '../../../apis/pokemon'


import { PokemonListOptionsRenderer } from './PokemonListOptionsRenderer'
import { PokemonListRenderer } from './PokemonListRenderer'

interface ReturnObject{
    name: string
    url:string
}

export const PokemonListContainer = () => {

    const { options } = useParams<{ options: string}>()


    const [ pokemonList, setPokemonList ] = useState([])
    const [ listOptions, setListOptions ] = useState<ReturnObject[]> ([])
    const [ selectedOption, setSelectedOption ] = useState<ReturnObject> ({name: "", url: ""})


    useEffect (() => {
        // this calls for the modifier/options list for the chosen pokemon view
        optionsUrlSelector(options, setSelectedOption, setListOptions)
        // if(options === ":Generation"){
        //     callUrl("https://pokeapi.co/api/v2/generation/")
        //     .then(results => {
        //         setSelectedOption(results.results[0])
        //         setListOptions(results.results)
        //     })
        // }else if (options === ":Region"){
        //     callUrl("https://pokeapi.co/api/v2/pokedex/")
        //     .then(results => {
        //         let allowedPokedexList:string[] = ["national", "kanto", "original-johto", "hoenn", "original-sinnoh", "original-unova"]
        //         setSelectedOption(results.results[1])
        //         setListOptions(results.results.filter((pokedexEntry: ReturnObject) => allowedPokedexList.includes(pokedexEntry.name)))
        //     })
        // }
    },[])

    useEffect (() => {
        callUrl(selectedOption.url)
        .then((results) => {
            let array = cleanUpPokemonListData(results)
            setPokemonList(array)
        })
    },[selectedOption])

    const childSetListOptions = (option:any) => {
        let selection: ReturnObject[] = listOptions.filter(listOption => listOption.name === option)
        setSelectedOption(selection[0])
    }

    return (
        <>
        {/* <h1>{selectedOption.url}</h1> */}
        { listOptions && <PokemonListOptionsRenderer listOptions={listOptions} setSelectedOption={childSetListOptions} selectedOption={selectedOption} /> }
        { pokemonList && <PokemonListRenderer pokemonList={pokemonList}/> /* this inline logical&& render is here while i try to sort out why useEffect and the apicall are returning null and then data */}
        
        </>
    )
}


const cleanUpPokemonListData = (results:any) => {
    if(results){
        if(results.hasOwnProperty("pokemon_species")){
            //api/v2/generation/ i  has pokemon array under pokemon_species
            //this creates an array that is the same as api/v2/pokedex
            let pokemonListArray = results.pokemon_species.map((pokemon: ReturnObject) => {
                return {
                    entry_number: pokemon.url.replace("https://pokeapi.co/api/v2/pokemon-species/", "").replace("/", ""),
                    pokemon_species: pokemon
                }
            })

            pokemonListArray.sort((a: { entry_number: number }, b: { entry_number: number }) => a.entry_number - b.entry_number)

            return pokemonListArray
            // setPokemonList(results.pokemon_species)
        }else if(results.hasOwnProperty("pokemon_entries")){
            //api/v2/pokedex/ i  has pokemon array under pokemon_entries
            return results.pokemon_entries
            // setPokemonList(results.pokemon_entries.map((pokemonEntry: { pokemon_species: any }) => pokemonEntry.pokemon_species))
        }else return
    }
}

// const optionsUrlSelector = (options:string) => {
//     if(options == "generation"){
//         return "https://pokeapi.co/api/v2/generation/"
//     }else if (options == "pokedex"){
//         return "https://pokeapi.co/api/v2/pokedex/"
//     }

// }

const optionsUrlSelector = (options:string, setSelectedOption: React.Dispatch<React.SetStateAction<ReturnObject>>, setListOptions: React.Dispatch<React.SetStateAction<ReturnObject[]>>) => {
    if(options === ":Generation"){
        callUrl("https://pokeapi.co/api/v2/generation/")
        .then(results => {
            setSelectedOption(results.results[0])
            setListOptions(results.results)
        })
    }else if (options === ":Region"){
        callUrl("https://pokeapi.co/api/v2/pokedex/")
        .then(results => {
            let allowedPokedexList:string[] = ["national", "kanto", "original-johto", "hoenn", "original-sinnoh", "original-unova"]
            setSelectedOption(results.results[1])
            setListOptions(results.results.filter((pokedexEntry: ReturnObject) => allowedPokedexList.includes(pokedexEntry.name)))
        })
    }
}