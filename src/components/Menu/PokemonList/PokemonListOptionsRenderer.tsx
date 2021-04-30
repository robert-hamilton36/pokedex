import React from 'react'

interface Props{
    listOptions:ReturnObject[]
    setSelectedOption: ((option: string) => void)
    selectedOption:ReturnObject
}

interface ReturnObject{
    name: string
    url:string
}

export const PokemonListOptionsRenderer: React.FC<Props> = (props) => {
    return (
        <select value={props.selectedOption.name} onChange={(event) => props.setSelectedOption(event.target.value)}>
            {props.listOptions.map(option => <option key={option.name} value={option.name} >{option.name}</option>)}
        </select>
    )
}
