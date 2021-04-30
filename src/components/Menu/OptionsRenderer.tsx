import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    options: ListObjects[]
}

interface ListObjects{
    name:string
    listOptions: string[]
}

export const OptionsRenderer: React.FC<Props> = (props) => {
    return (
        <ul>
            {props.options.map(option => {
                return <li key={option.name}>
                    <div>
                        <h3>{option.name}</h3>
                        <ul>
                            {option.listOptions.map((selector)=>{
                                let link:string = "/pokemonlist:" + selector
                                return <li key={selector}><Link to={link}>{selector}</Link></li>
                            })}
                        </ul>
                    </div></li>
            })}
        </ul>
    )
}
