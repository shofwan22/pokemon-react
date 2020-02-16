import React, {Component,Fragment} from 'react';
import { connect } from 'react-redux';
import { fetchAllPokemon } from '../../../actions';
import './PokemonList.css';
import * as $ from 'jquery';
import Pokemon from '../../../components/Pokemon/Pokemon';
import PokemonTotal from '../../../components/PokemonTotal/PokemonTotal';

class PokemonList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            offset: 0 
        }
        this.handleDetail = this.handleDetail.bind(this);
    }

    handleDetail = (namePokemon) => {
        this.props.history.push(`/pokemon-detail/${namePokemon}`)
    }

    componentDidMount() {
        $(window).scroll(function () {
            if ($(window).scrollTop() === $(document).height() - $(window).height()) {
                this.setState({
                    offset: this.state.offset + 20
                })
                this.props.getNextPokemon(this.state.offset)
            }
        }.bind(this));
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

const mapDispatchToProps = (dispatch) => {
    return {
        getNextPokemon: (offset) => dispatch(fetchAllPokemon(offset))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);