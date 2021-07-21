import React from 'react'

function Pokemon(props) {

    const {pokemon}= props;
    
    return (
        <div className="pokeCard">
            <div className="pokemon-img">
               <img 
               className="img"
               src ={pokemon.sprites.front_default}
               alt={pokemon.name}
               />
            </div>
            <div className="card-body">
                <div className="card-top" >
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div>{pokemon.types.map((type, idx) => {
                    return (
                        <div className="poketype" key={idx}>{type.type.name}</div>
                    )
                })}</div>
            </div>
        </div>
    )
}

export default Pokemon
