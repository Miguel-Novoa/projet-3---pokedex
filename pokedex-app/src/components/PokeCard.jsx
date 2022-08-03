import React, { Component } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import likedBall from '../images/pokeballColor.png';

function PokeCard (props){

    function displayPokemonNumber (number){
        let nbArray = String(number).split('').map((number)=>{
            return Number(number)
        })
        
        if(nbArray.length === 1){
            return '#00' + number
        }else if(nbArray.length === 2){
            return '#0' + number
        }else if(nbArray.length === 3){
            return '#'+number
        }

    }
        return (
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
                    <Button className='likeBtn' size="small">
                        <p>{displayPokemonNumber(props.nb)}</p>
                        <img width='30' className='ball' src={likedBall} alt="pokeball button" />
                    </Button>
                </CardContent>
            </Card>

        );
}

export default PokeCard;