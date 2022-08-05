import React from 'react';
import { Link } from 'react-router-dom'
import displayPokemonID from '../js/displayPokemonID';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import likedBall from '../images/pokeballColor.png';
import dislikedBall from '../images/pokeballB&W.png'
import { useSelector, useDispatch } from "react-redux";
import { slice, getLikedPoke, initialState } from "../js/slice.js";

function PokeCard (props){
    const dispatch = useDispatch();
    const state = useSelector(state=>state.pokeSlice)
    console.log(state)

    const sendLikedPoke = (id,name) =>{
       if(state.find((val)=> val.id === id) === undefined){
            dispatch(getLikedPoke({id, name}))
            
        }else{
            console.log("déjà ajouté")
        }
    }

        return (
            //<Link to={`/pages/Sheet/${props.nb}`}>
                <Card className='pokeCard' sx={{ width: 240 }}>
                    <CardMedia 
                        className='pokeImg'
                        component="img"
                        height="140"
                        image={props.image}
                        alt="pokemon img"
                    />
                    <CardContent className='cardInfos'>
                        <Typography className='pokemonName' gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <div className='cardFooter'>
                            <p>{displayPokemonID(props.nb)}</p> 
                            <Button className='likeBtn' onClick={()=>sendLikedPoke(props.nb, props.name)} size="small">
                                <img width='30' className='ball' src={dislikedBall} alt="pokeball button" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            //</Link>

        );
}

export default PokeCard;