import React from 'react'

interface Props {
    limit: number
    offset: number  
    setOffset: (value: number)=> void
}

export const PokemonListButtons: React.FC<Props> = (props) => {

    const handleClick = (direction: string) => {
        direction === "previous" && props.setOffset(props.offset - props.limit)
        direction === "next" && props.setOffset(props.offset + props.limit)

    }

    return (
        <div>
            {props.offset !== 0 && <button onClick={() => handleClick("previous")}>Previous</button>}
            <button onClick={() => handleClick("next")}>Next</button>
        </div>
    )
}
