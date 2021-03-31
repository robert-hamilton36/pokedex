import React, { useEffect, useState } from 'react'
import { getGenerationList } from '../../../../apis/pokemon'
import { capitalize } from '../../../../helperFunctions'

// interface Props {
//     pokeList: Array<Generation>
// }

interface Generation {
    name:string
    url:string
}

export const GenerationPokemonListContainer = () => {
    const [ generationList, setGenerationList ] = useState<Array<Generation>>([])


    useEffect (() => {
        getGenerationList()
        .then(results => {
            setGenerationList(results)
        })
    
    }, [])

    return (
        <ul>
            {generationList.map(generation => {
                return <li key={generation.name}>{capitalize(generation.name)}</li>
            })}
        </ul>
    )
}
