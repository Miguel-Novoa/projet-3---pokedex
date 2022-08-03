import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import PokeCard from './PokeCard';
import axios from 'axios';

import {getPokemons, usePokemonsAllDatas} from '../services/Pokemon.service'

function Listing (){
  const [pokemons, setPokemons] = useState([]);
    let pokemonsList = [];
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    let pokemonsDatas = usePokemonsAllDatas();
    
    const [windowHeight, setWindowHeight] = useState();
    const [scrollPosition, setScrollPosition] = useState();
    const [nextResult, setNextResult] = useState();
useEffect(()=>{
  getPokemons(url).then(response =>{
    setPokemons(response.results)

  })
}, [])
    

    function getScrollPosition(e) {
        e.preventDefault();
        e.stopPropagation();
        const documentHeigth = Math.ceil(document.documentElement.scrollHeight);
        const windowHeight = Math.ceil(window.innerHeight);
        const scroll = Math.ceil(window.scrollY);
        setWindowHeight(scroll);
        setScrollPosition(documentHeigth - windowHeight);
    }


    useEffect(()=>{
        setNextResult(pokemonsDatas.next)
    },[pokemons])

    useEffect(() => {
        window.addEventListener("scroll", getScrollPosition);
        if (
          scrollPosition !== undefined &&
          nextResult !== undefined &&
          windowHeight !== undefined &&
          windowHeight >= scrollPosition
        ) {
          axios
            .get(nextResult)
            .then((response) => {
              console.log('scroll')
              return response;
            })
            .then((res) => {
              setNextResult(res.data.next);

            
                setPokemons((prevState)=>[...prevState, ...res.data.results])
            
            })
            .catch((error) => {
              console.log(error);
            });
        }
        return () => {
          window.removeEventListener("scroll", getScrollPosition);
        };
      }, [windowHeight]);
      


    return (
        <div className='pokeList'>
            {pokemons.map((pokemon, index)=>{
              return(
                <PokeCard key={index} name={pokemon.name} 
               nb = {pokemons[index+1]}
               image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}/>
              )
            })}
        </div>
    );

}

export default Listing;