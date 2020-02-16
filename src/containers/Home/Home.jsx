import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PokemonList from '../Pages/PokemonList/PokemonList';
import PokemonDetail from '../Pages/PokemonDetail/PokemonDetail';
import './Home.css';
import MyPokemon from '../Pages/MyPokemon/MyPokemon';

class Home extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <div className="container">
                        <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-success">
                            <Link className="navbar-brand" to="/">
                                <img src="/pokemon_logo.png" width="90" height="30" alt=""></img>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/myPokemon">My Pokemon</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="container-fluid content">
                            <Route path="/" exact component={PokemonList} />
                            <Route path="/pokemon-detail/:namePokemon" component={PokemonDetail} />
                            <Route path="/myPokemon" component={MyPokemon} />
                        </div>
                    </div>
                </Fragment>
            </Router>
        );
    }
}

export default Home;
