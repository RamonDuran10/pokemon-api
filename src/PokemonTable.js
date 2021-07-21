import React from 'react';
import  "./styles.css";
import Pokemon from "./Pokemon";
import Pagination from './Pagination';

function PokemonTable(props) {


    const {pokemons, page, setPage, total, loading} = props;

    const lastPage =(e)=>{
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage)
    }
    const nextPage =(e)=>{

        const nextPage = Math.min(page + 1, total);
        setPage(nextPage)
    }


    return (
        <div >
           <div className="header-table">
               <h1>Pokemons Table</h1> 
               <Pagination
               page={page }
               totalPages={total}
               onLeftClick={lastPage}
               onRightClick={nextPage}
               /> 
           </div> 
           <div className="evolution">
               <h2>ALL YOUR FAVORITE POKEMON</h2>
               
           </div>
           {
               loading ? 
               <div>Cargando Pokemons...</div>
               :
           
           <div className="pokemon-table">
           {
               pokemons.map((pokemon, idx) => {
                   return (
                       <div key={pokemon.name}>
                           <Pokemon pokemon={pokemon} key={pokemon.name}/>
                       </div>
                   )
                  
               })
           }
           </div>
            }
            <div>
                <footer className="footer">
                    <p>copyright by RamonDuran10</p>
                    <a href="https://github.com/RamonDuran10" target="_blank" rel="noreferrer" > Github</a>
                    <a href="https://www.twitch.tv/monship" target="_blank" rel="noreferrer">Twitch</a>
                    <a href="https://www.instagram.com/monship/?hl=es-la" target="_blank"rel="noreferrer">Instagram</a>
                </footer>
                </div>
        </div>
    )
}

export default PokemonTable
