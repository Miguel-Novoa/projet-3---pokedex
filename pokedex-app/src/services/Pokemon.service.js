import { useState, useEffect } from 'react';
import axios from 'axios';

export function getPokemons(url) {
    return axios.get(url)
    .then((response) =>{
        return response})
    .then(res =>{
        return res.data;
    })
}

export function usePokemonsAllDatas() {
    const [pokemonsDatas, setPokemonsDatas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
            setPokemonsDatas(data);
        }
        fetchData();
    }, []); 

    return pokemonsDatas;
}

