import React from 'react';
import { Link } from 'react-router-dom'
import displayPokemonID from '../js/displayPokemonID';
import { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import likedBall from '../images/pokeballColor.png';
import dislikedBall from '../images/pokeballB&W.png'
import { useSelector, useDispatch } from "react-redux";
import { slice, getLikedPoke, deletePoke } from "../js/slice.js";

function PokeCard (props){
    const dispatch = useDispatch();
    const state = useSelector(state=>state.pokeSlice)

    const sendLikedPoke = (id,name) =>{
       if(state.find((val)=> val.id === id) === undefined){
            dispatch(getLikedPoke({id, name}))
            console.log(alreadyLiked)
        }else{
            console.log("déjà ajouté")
            dispatch(deletePoke({id, name}))
            console.log(alreadyLiked)
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
                                <img  width='30' className='ball' src={props.urlBall} alt="pokeball button" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            //</Link>

        );
}

export default PokeCard;