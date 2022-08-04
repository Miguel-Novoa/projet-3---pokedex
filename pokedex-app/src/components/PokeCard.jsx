import React from 'react';
import { Link } from 'react-router-dom'
import displayPokemonID from '../js/displayPokemonID';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import likedBall from '../images/pokeballColor.png';

function PokeCard (props){

        return (
            <Link to={`/pages/Sheet/${props.nb}`}>
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
                            <Button className='likeBtn' size="small">
                                <img width='30' className='ball' src={likedBall} alt="pokeball button" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Link>

        );
}

export default PokeCard;