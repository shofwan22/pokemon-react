import React from 'react';

const PokemonTotal = (props) => {
    return (
        <div className="col-md-12">
            <div class="alert alert-success">
                <strong>Total Pokemon : </strong> {props.total}
            </div>
        </div>
    )
}

export default PokemonTotal;