import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import PokeCard from './PokeCard';
import axios from 'axios';

import { getPokemons } from '../services/Pokemon.service'

function Listing (){
  const [pokemons, setPokemons] = useState([]);
  let url = 'https://pokeapi.co/api/v2/pokemon/';
    
    const [windowHeight, setWindowHeight] = useState();
    const [scrollPosition, setScrollPosition] = useState();
    const [nextResult, setNextResult] = useState();
useEffect(()=>{
  getPokemons(url).then(response =>{
    setPokemons(response.results)
    setNextResult(response.next)
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
              return response;
            })
            .then((res) => {
              setNextResult(res.data.next)
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
               nb = {index+1}
               image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}/>
              )
            })}
        </div>
    );

}

export default Listing;