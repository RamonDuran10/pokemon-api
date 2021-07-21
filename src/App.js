import React, {useState, useEffect} from 'react';
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import PokemonTable from "./PokemonTable";
import {getPokemons, getPokemosData} from "./Api";


function App() {
  const [pokemons, setPokemos] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState (0);
  const [loading, setLoading] = useState(true)


  const fetchPokemons = async () =>{
    try{
      setLoading(true)
      const data = await getPokemons(27, 27 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemosData(pokemon.url)
      });
      const results = await Promise.all(promises)
      setPokemos(results);
      setLoading(false)
      setTotal(Math.ceil(data.count /27))
    }catch(err){}
  }
  
  useEffect(() => {
      fetchPokemons();
  }, [page])

  return (
    <div >
      <Navbar/>
      <div>
        <SearchBar/>
        <PokemonTable
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default App;
