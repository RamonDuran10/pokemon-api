import React, {useState} from 'react';
import {searchPokemon} from "./Api";
import  "./styles.css";


function SearchBar(props) {
    

    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState('');

    const handleSearch =(e) =>{
        
        setSearch(e.target.value);
    }

    const handleclickSearch = async (e) => {
        const data = await searchPokemon(search);
        setPokemon(data)
        console.log(handleclickSearch)
    }

    return (
        <div className="container">
            <div className="search-bar">
                <input 
                placeholder="Search Pokemon"
                onChange={handleSearch}
                />
            </div> 
            <div className="search-btn">
                <button onClick={handleclickSearch}>Search</button>
            </div>
        </div>
    )
}

export default SearchBar
