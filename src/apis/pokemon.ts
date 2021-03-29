import request from 'superagent'

const rootUrl = 'https://pokeapi.co/api/v2/'

export const callApi = () => {
    return request.get(rootUrl)
    .then ( res => {
        return res.body
    })
}

export const getPokemon = (id:string) => {
    return request.get(rootUrl+ 'pokemon/' + id)
    .then ( res => {
        console.log(res.body)
        return res.body
    })
}


export function getPokemonList () {
    return request.get(rootUrl + 'pokemon')
    .then( res => {
        return res.body.results
    })
}