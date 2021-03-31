import React from 'react'

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
                                return <li key={selector}>{selector}</li>
                            })}
                        </ul>
                    </div></li>
            })}
        </ul>
    )
}
