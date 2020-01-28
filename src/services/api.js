import axios from 'axios'

export const getPeople = (paginate = '') => {
    return axios.get(paginate === '' ? 'https://swapi.co/api/people/' : paginate)
}

export const peopleDetails = (url) => {
    return axios.get(url)
}

export const startShips = (paginate = '') => {

    return axios.get(paginate === '' ? 'https://swapi.co/api/starships/' : paginate)
}

export const startShipDetails = (url) => {
    return axios.get(url)
}

export const filmDetails = (url) => {
    return axios.get(url)
}
