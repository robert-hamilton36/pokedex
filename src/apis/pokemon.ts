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


export function getPokemonList (limit = 50, offset = 0) {
    return request.get(rootUrl + 'pokemon/?limit=' + limit + '&offset=' + offset)
    .then( res => {
        return res.body.results
    })
}