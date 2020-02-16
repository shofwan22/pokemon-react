import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import Pokemon from '../../../components/Pokemon/Pokemon';
import PokemonTotal from '../../../components/PokemonTotal/PokemonTotal';
import './MyPokemon.css';

class MyPokemon extends Component {

    handleDetail = (namePokemon) => {
        this.props.history.push(`/pokemon-detail/${namePokemon}`)
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-12 card-mypokemon">
                        <div class="card bg-success text-white">
                            <div class="card-body">
                                <h4>My Pokemon</h4>
                            </div>
                        </div>
                    </div>
                    <PokemonTotal total={this.props.catchPokemon.length} />
                    {
                        this.props.catchPokemon &&
                        this.props.catchPokemon.map((c, i) => {
                            return (
                                <Pokemon key={i} data={c} goDetail={this.handleDetail} nickname={c.nickname}/>
                            )
                        })
                    }    
                </div>      
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        catchPokemon: state.pokemons.catch
    }
}

export default connect(mapStateToProps)(MyPokemon);