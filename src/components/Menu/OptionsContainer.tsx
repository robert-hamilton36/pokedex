import React from 'react'
import { OptionsRenderer } from './OptionsRenderer'

export const OptionsContainer = () => {

    interface ListObject{
        name:string
        listOptions: string[]
    }

    const options: ListObject[] = [{name: "Pokemon", listOptions: ["Region", "Generation"]}, {name: "Moves", listOptions: ["Generation"]}]

    return (
        <OptionsRenderer options={options} />
    )
}
