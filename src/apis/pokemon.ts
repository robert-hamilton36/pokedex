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
    .then( res => {
        if(res.body){
            console.log(res.body)
            return res.body
        }
        return
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

//you can add an argument to get the specific generation or leave blank to get list
export const getGenerationList = (generationNumber = '/') => {
    return request.get(rootUrl + 'generation' + generationNumber)
    .then( res => {
        return res.body.results
    })
}


//TODO refactor the two function together
export function getPokedexList () {
    return request.get(rootUrl + 'pokedex/')
    .then( res => {
        return res.body.results
    })
}

export function getPokemonList (number:number) {
    return request.get(rootUrl + 'pokedex/' + number)
    .then( res => {
        return res.body
    })
}