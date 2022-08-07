import React, { Component } from 'react';
import { useEffect, useState, useRef } from 'react';
import PokeCard from './PokeCard';
import axios from 'axios';

import { getPokemons } from '../services/Pokemon.service';
import likedBall from '../images/pokeballColor.png'
import dislikedBall from '../images/pokeballB&W.png'
import { useSelector } from "react-redux";

function Listing (){
  const [pokemons, setPokemons] = useState([]);
  let url = 'https://pokeapi.co/api/v2/pokemon?&limit=30';
  let urlBall = dislikedBall;
  const searchValue = useRef(null);
    
  const [windowHeight, setWindowHeight] = useState();
  const [scrollPosition, setScrollPosition] = useState();
  const [nextResult, setNextResult] = useState();
  const [filtred, setFiltred] = useState([]);

  let liked = JSON.parse(localStorage.getItem('likedPokemons'));
    
  const displayBall = (cardId) =>{
    if(liked.find((val)=> val.id === cardId) === undefined){
        return urlBall = dislikedBall
    }else{
        return urlBall = likedBall
    }
  }

  const searchFilter = () => {
    if (searchValue.current !== null) {
      let filtredPokemons = filtred.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchValue.current.value)
      });
      setPokemons(filtredPokemons)
    }
    if (searchValue.current.value === "") {
      setPokemons(filtred);
    }
  }
    

    useEffect(()=>{
      getPokemons(url).then(response =>{
        setPokemons(response.results)
        setNextResult(response.next)
        setFiltred(response.results)
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
                setFiltred((prevState) => [...prevState,...res.data.results]);
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
        <div className='listAndSearch'>
           <div className="wrap">
              <div className="search">
                  <input onChange={searchFilter} type="text" className="searchTerm" ref={searchValue} placeholder="Chercher un pokemon"/>
                  <button className="searchButton">
                      <i className="fa fa-search"></i>
                  </button>
              </div>
            </div>
            <div className='pokeList'>
              {pokemons?.map((pokemon, index)=>{
                  return(
                    <PokeCard key={index} name={pokemon.name} 
                    nb = {pokemon.url.substr(34).slice(0, -1)}
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.substr(34).slice(0, -1)}.png`}
                    urlBall={displayBall(pokemon.url.substr(34).slice(0, -1))}/>
                  )
                })}
            </div>
        </div>
    );

}

export default Listing;