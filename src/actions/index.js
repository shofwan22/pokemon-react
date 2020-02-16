import { FETCH_POKEMON, FETCH_POKEMON_DETAIL } from './types';
import axios from 'axios';

const apiUrl = 'https://pokeapi.co/api/v2';

export const fetchPokemon = (pokemons) => {
    return {
        type: FETCH_POKEMON,
        payload: { pokemons }        
    }
}

export const fetchAllPokemon = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/pokemon`)
            .then(response => {
                dispatch(fetchPokemon(response.data.results))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const fetchPokemonDetail = name => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/pokemon/${name}`)
            .then(response => {
                dispatch(fetchDetail(response.data))
            })
            .catch(error => {
                throw(error);
            })
    }
}

export const fetchDetail = (details) => {
    return {
        type: FETCH_POKEMON_DETAIL,
        payload: { 
            details: {
                id: details.id,
                name: details.name,
                images: details.sprites['front_default'],
                height: details.height,
                weight: details.weight,
                types: details.types,
                stats: details.stats
            }
        }
    }
}