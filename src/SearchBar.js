import React, {useState} from 'react';

import  "./styles.css";


function SearchBar(props) {
    const {pokemonTable, setPokemos} = props;

    const [search, setSearch] = useState('');

    const handleSearch =(e) =>{
        filtrar(e.target.value)
        setSearch(e.target.value);
    }
    const filtrar = (terminoBusqueda) => {
     const resultBusqueda = pokemonTable.filter((pokemon) => {
         if(pokemon.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
             return pokemon;
         }
     })
     setPokemos(resultBusqueda)
    }
   

    return (
        <div className="container">
            <div className="search-bar">
                <input 
                placeholder="Search Pokemon"
                onChange={handleSearch}
                value={search}
                />
            </div> 
        </div>
    )
}

export default SearchBar
