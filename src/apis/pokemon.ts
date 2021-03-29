import request from 'superagent'

const rootUrl = 'https://pokeapi.co/api/v2/'

export const callApi = () => {
    return request.get(rootUrl)
    .then ( res => {
        return res.body
    })
}

export const callUrl = (url = rootUrl) => {
    return request.get(url)
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

export const getGenerations = () => {
    return request.get(rootUrl+ 'generation/')
    .then ( res => {
        console.log(res.body)
        return res.body
    })
}

export function getPokemonList () {
    return request.get(rootUrl + 'pokedex/1/')
    .then( res => {
        return res.body
    })
}