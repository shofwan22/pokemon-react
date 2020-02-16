import React from 'react';

const Pokemon = (props) => {
    return (
        <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="pokemon-card card flex-row flex-wrap border-success" onClick={() => props.goDetail(props.data.name)}>
                <div className="card-header border-0 bg-success card-list-img">
                    <img src="/pokemon.png" alt="" style={{ width: '50px', height: '50px' }}></img>
                </div>
                <div className="card-block px-2 d-flex align-items-center">
                    <h4 className="card-title">{props.data.name}</h4>
                </div>
                {
                    props.nickname &&
                    <div className="card-footer card-nickname">
                        <p>NickName : {props.nickname}</p>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default Pokemon;