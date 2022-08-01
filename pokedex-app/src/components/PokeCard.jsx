import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import imagePoke from '../images/389.png';
import likedBall from '../images/pokeballColor.png';

class PokeCard extends Component {
    render() {
        return (
            <Card className='pokeCard' sx={{ width: 240 }}>
                <CardMedia 
                    className='pokeImg'
                    component="img"
                    height="140"
                    image={imagePoke}
                    alt="pokemon img"
                />
                <CardContent className='cardInfos'>
                    <Typography className='pokemonName' gutterBottom variant="h5" component="div">
                    Torterra
                    </Typography>
                    <Button className='likeBtn' size="small">
                        <img width='30' className='ball' src={likedBall} alt="pokeball button" />
                    </Button>
                </CardContent>
            </Card>
        );
    }
}

export default PokeCard;