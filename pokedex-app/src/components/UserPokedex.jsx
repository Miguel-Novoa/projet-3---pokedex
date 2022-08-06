import React from 'react';

import { useSelector } from "react-redux";
import PokeCard from './PokeCard';
import likedBall from '../images/pokeballColor.png';

function UserPokedex () {
    const state = useSelector(state=>state.pokeSlice)

        return (
            <div className='pokeList'>
              {state?.map((pokemon)=>{
                  return(
                    <PokeCard key={pokemon.id} name={pokemon.name} 
                    nb = {pokemon.id}
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    urlBall={likedBall}/>
                  )
                })}
            </div>
        )
}

export default UserPokedex;