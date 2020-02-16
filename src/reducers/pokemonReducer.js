import { FETCH_POKEMON, FETCH_POKEMON_DETAIL } from '../actions/types';

const globalState = {
    pokemons: [],
    details: []
}

export default function pokemonReducer(state = globalState, action) {
    switch (action.type) {
        case FETCH_POKEMON:
            return {
                ...state,
                pokemons: action.payload.pokemons
            } 
        case FETCH_POKEMON_DETAIL:
            return{
                ...state,
                details: action.payload.details
            }
        default:
            return state;
    }
}