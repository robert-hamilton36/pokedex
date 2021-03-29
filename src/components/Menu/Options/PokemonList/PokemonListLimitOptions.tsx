import React from 'react'

interface Props {
    limit: number
    setLimit: (value: number)=> void
}

export const PokemonListLimitOptions: React.FC<Props> = (props) => {

    return (
        <select defaultValue = {props.limit} onChange={(event) => props.setLimit(parseInt(event.target.value))}>
            <option value={25}>25</option>
             <option value={50}>50</option>
             <option value={75}>75</option>
             <option value={100}>100</option>
             <option value={150}>150</option>
             <option value={99999}>All</option>
        </select>
    )
}
