import React from 'react';

import { useSelector } from "react-redux";
import PokeCard from './PokeCard';
import likedBall from '../images/pokeballColor.png';

function UserPokedex () {
    let liked = JSON.parse(localStorage.getItem('likedPokemons'));

        return (
            <div className='pokeList'>
              {liked?.map((pokemon)=>{
                  return(
                    <PokeCard key={pokemon.id} name={pokemon.name} 
                    nb = {pokemon.id}
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                    urlBall={likedBall}/>
                  )
                })}
            </div>
        )
}

export default UserPokedex;