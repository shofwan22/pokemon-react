import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPokemonDetail, catchPokemon } from '../../../actions';
import './PokemonDetail.css';
import Loader from 'react-loader-spinner';

class PokemonDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            catch: false,
            caught: false,
            nickname: ''
        }

        this.addDefaultImage = this.addDefaultImage.bind(this);
    }

    addDefaultImage = (e) => {
        e.target.src = 'https://via.placeholder.com/200/FFFFFF/000000/?text=No Image'
    }

    handleCatch = (e) => {
        this.setState({
            catch: true
        })
    }

    handleInput = (e) => {
        this.setState({
            nickname: e.target.value
        })
    }

    handleAdd = (e) => {
        if(this.state.nickname !== ''){
            this.props.handleSave(this.props.details.id, this.props.details.name, this.state.nickname);
            this.setState({
                caught: true,
                nickname: this.state.nickname
            })
            alert('Catch Pokemon Success');            
        }else{
            alert('Nickname cannot be empty')
        }
    }

    handleCancel = () => {
        this.setState({
            catch: false
        })
    }

    checkCatch = () => {
        this.props.catchPokemon.map((c) => {
            if (c.name === this.props.match.params.namePokemon) {
                this.setState({
                    caught: true,
                    nickname: c.nickname
                })
            }
        })
    }
   
    componentDidMount(){
        this.props.getDetail(this.props.match.params.namePokemon);
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2000)
        this.checkCatch();
    }

    render() {
        const {details} = this.props;
        return(
            <Fragment>
                {this.state.isLoading ? (
                <div
                    style={{
                        width: "100%",
                        height: "100",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
                </div>
                ) : (
                <div className="row row-detail">
                    <div className="col-md-3 card-left">
                        <div className="card border-success">
                            <img className="card-img-top image-pokemon bg-light" src={details.images} alt="Card image" onError={this.addDefaultImage}></img>
                            <div className="card-body bg-success">
                                <h4 className="card-title card-name">{details.name}</h4>                                
                            </div>
                                                            
                                {
                                    !this.state.caught ? (
                                        <div className="card-footer">
                                        {
                                            !this.state.catch && 
                                            <button type="button" className="btn btn-danger btn-block" onClick={this.handleCatch}>Catch</button>
                                        }
                                        {
                                            this.state.catch &&
                                            <div>
                                                <div className="form-group">
                                                    <input type="text" name="nickname" className="form-control" placeholder="Nickname Pokemon" onChange={this.handleInput}/>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-success" style={{marginRight: '5px'}} onClick={this.handleAdd}>Add Pokemon</button>
                                                    <button type="submit" className="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
                                                </div>
                                            </div>
                                        }   
                                        </div>
                                    ) : (
                                        <div className="card-footer">
                                            <h4 className="card-title">Nickname : </h4>
                                            <p>{this.state.nickname}</p>
                                        </div> 
                                    )                               
                                 
                                 }                                                                 
                            
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card border-success">
                            <div className="card-header bg-success text-white">
                                <h4 className="card-title">Detail Information</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4 card-detail">
                                        <div className="card text-center">
                                            <div className="card-header">
                                                <h5 className="card-title">Height</h5>
                                            </div>
                                            <div className="card-body d-flex justify-content-center align-items-center">
                                                <p>{details.height}</p>
                                            </div>
                                        </div>                                        
                                    </div>
                                    <div className="col-md-4 card-detail">
                                        <div className="card text-center">
                                            <div className="card-header">
                                                <h5 className="card-title">Weight</h5>
                                            </div>
                                            <div className="card-body d-flex justify-content-center align-items-center">
                                                <p>{details.weight}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 card-detail">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="card-title text-center">Types</h5>
                                            </div>
                                            <div className="card-body">
                                            {
                                                details.types.map((t, i) => {
                                                    return <p className="content-body" key={i}>- {t.type['name']}</p>
                                                })
                                            }
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="card-title">Statistic</h5>
                                            </div>
                                            <div className="card-body">
                                               {
                                                   details.stats.map((s, i) => {
                                                       var progress = `${s.base_stat}%`;

                                                       return (
                                                           <Fragment key={i}>
                                                               <p className="mb-1 body-stat">{s.stat['name']}</p>
                                                               <div className="progress">
                                                                   <div className="progress-bar" role="progressbar" style={{ width: progress }}>{s.base_stat}</div>
                                                               </div>
                                                           </Fragment>
                                                       )
                                                   })
                                               }
                                            </div>
                                        </div>     
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                )
                }
                
               
            </Fragment>
        )
    }
}

PokemonDetail.propTypes = {
    details: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    console.log(state)
    return {
        details: state.pokemons.details,
        catchPokemon: state.pokemons.catch
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getDetail: () => dispatch(fetchPokemonDetail(ownProps.match.params.namePokemon)),
        handleSave: (id, name, nickname) => dispatch(catchPokemon(id, name, nickname)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PokemonDetail);