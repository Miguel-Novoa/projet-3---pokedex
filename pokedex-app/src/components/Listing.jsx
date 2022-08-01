import React, { Component } from 'react';
import PokeCard from './PokeCard';

function Listing (){
    return (
        <div className='list'>
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Chercher un pokemon"/>
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <div className='pokemons'>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
            </div>
            <div className='pokemons'>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
            </div>
            <div className='pokemons'>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
            </div>
            <div className='pokemons'>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
            </div>
        </div>
    );
}

export default Listing;