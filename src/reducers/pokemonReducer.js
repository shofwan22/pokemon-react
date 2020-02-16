import { FETCH_POKEMON, FETCH_POKEMON_DETAIL, CATCH_POKEMON } from '../actions/types';

const globalState = {
    pokemons: [],
    total: '',
    details: [],
    catch: []
}

export default function pokemonReducer(state = globalState, action) {
    switch (action.type) {
        case FETCH_POKEMON:
            return {
                ...state,
                pokemons: state.pokemons.concat(action.payload.pokemons),
                total: action.payload.total
            } 
        case FETCH_POKEMON_DETAIL:
            return{
                ...state,
                details: action.payload.details
            }
        case CATCH_POKEMON:
            return{
                ...state,
                catch: state.catch.concat(action.payload.pokemonCatch)
            }
        default:
            return state;
    }
}