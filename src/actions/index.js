import { FETCH_POKEMON, FETCH_POKEMON_DETAIL, CATCH_POKEMON } from './types';
import axios from 'axios';

const apiUrl = 'https://pokeapi.co/api/v2';

export const fetchAllPokemon = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/pokemon`)
            .then(response => {
                dispatch(fetchPokemon(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const fetchPokemon = (pokemons) => {
    return {
        type: FETCH_POKEMON,
        payload: {
            pokemons: pokemons.results,
            total: pokemons.count
        }
    }
}

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

export const catchPokemon = (id, name, nickname) => {
    return (dispatch) => {
        dispatch(catchPokemonSuccess(id, name, nickname))
    }
}

export const catchPokemonSuccess = (id, name, nickname) => {
    return {
        type: CATCH_POKEMON,
        payload: {
            pokemonCatch: {
                id: id,
                name: name,
                nickname: nickname
            }            
        }
    }
}