import React from 'react';
import { Link } from 'react-router-dom'
import displayPokemonID from '../js/displayPokemonID';
import { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

import likedBall from '../images/pokeballColor.png';
import dislikedBall from '../images/pokeballB&W.png'
import { useSelector, useDispatch } from "react-redux";
import { slice, getLikedPoke, deletePoke } from "../js/slice.js";

function PokeCard (props){
    const dispatch = useDispatch();
    const state = useSelector(state=>state.pokeSlice);
    const [alreadyLiked, setAlreadyLiked] = useState(false);

    const sendLikedPoke = (id,name) =>{
       if(state.find((val)=> val.id === id) === undefined){
            dispatch(getLikedPoke({id, name}));           
        }
    }

    const deleteLikedPoke = (id, name) =>{
        if(state.find((val)=> val.id === id) !== undefined){
            dispatch(deletePoke({id, name}));         
        }
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);


        return (
                <Card className='pokeCard' sx={{ width: 240 }}>
                    <Link to={`/pages/Sheet/${props.nb}`}>
                    <CardMedia 
                        className='pokeImg'
                        component="img"
                        height="140"
                        image={props.image}
                        alt="pokemon img"
                    />
                    </Link>
                    <CardContent className='cardInfos'>
                        <Typography className='pokemonName' gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <div className='cardFooter'>
                            <p>{displayPokemonID(props.nb)}</p> 
                            <Button aria-describedby={props.nb} className='likeBtn' onClick={(e)=>{sendLikedPoke(props.nb, props.name); state.find((val)=> val.id === props.nb) !== undefined  ? handleClick(e) : ""; console.log(alreadyLiked)}} size="small">
                                <img  width='30' className='ball' src={props.urlBall} alt="pokeball button" />
                            </Button>
                            <Popper id={props.nb} open={open} anchorEl={anchorEl}>
                                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                                    <p>Retirer ce pokemon des favoris ?</p>
                                    <button onClick={()=>{deleteLikedPoke(props.nb, props.name), setAnchorEl(null)}}>Oui</button>
                                    <button onClick={()=>{setAnchorEl(null)}}>Non</button>
                                </Box>
                            </Popper>
                        </div>
                    </CardContent>
                </Card>

        );
}

export default PokeCard;