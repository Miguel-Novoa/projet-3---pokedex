import { useState, useEffect } from 'react';

import '../css/pokemonSheet.css'
import PokemonSheet from '../components/PokemonSheet';
import Navbar from '../components/Navbar';

import { useParams } from 'react-router-dom';
import { getPokemons } from '../services/Pokemon.service'

function Sheet() {
    const { pokemonId } = useParams();
    let [pokemonDatas, setPokemonDatas] = useState();
    let [speciesDatas, setSpeciesDatas] = useState();
    let [chainDatas, setChainDatas] = useState();
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    useEffect(()=>{
        getPokemons(url).then(response =>{
            setPokemonDatas(response)
        })
    }, [pokemonId])

    useEffect(()=>{
        getPokemons(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`).then(response =>{
            setSpeciesDatas(response);
            getPokemons(response.evolution_chain.url).then(res=>{
              setChainDatas(res.chain);
            })
        })
    }, [pokemonId])

    

  return (
    <div>
        <Navbar/>
        <PokemonSheet pokemonDatas={pokemonDatas} 
          speciesDatas={speciesDatas} 
          chainDatas={chainDatas}
          />
    </div>
  )
}

export default Sheet;