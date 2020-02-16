import React, {Component,Fragment} from 'react';
import { connect } from 'react-redux';
import './PokemonList.css';
import Pokemon from '../../../components/Pokemon/Pokemon';
import PokemonTotal from '../../../components/PokemonTotal/PokemonTotal';

class PokemonList extends Component{

    constructor(props) {
        super(props);

        this.handleDetail = this.handleDetail.bind(this);
    }

    handleDetail = (namePokemon) => {
        this.props.history.push(`/pokemon-detail/${namePokemon}`)
    }

    render() {
        return(
            <Fragment>
                <div className="row">                    
                    <PokemonTotal total={this.props.total} />                                    
                    {
                    this.props.pokemons &&
                    this.props.pokemons.map((pokemon, i) => {                        
                        return (
                            <Pokemon key={i} data={pokemon} goDetail={this.handleDetail} nickname=''/> 
                        );
                    })
                    }
                                       
                </div>
                
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        pokemons: state.pokemons.pokemons,
        total: state.pokemons.total
    };
    
};

export default connect(mapStateToProps)(PokemonList);