import React, { Component } from 'react';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom'

import logo from '../images/logo.png';
import linkIcon from '../images/favListIcon.png';
import { useSelector } from 'react-redux';


function Navbar () {
    const state = useSelector(state=>state.pokeSlice);
    
        return (
            <nav>               
                <div className='logoAndTitle'>
                    <Link to={`/`}>
                        <img className='logo' src={ logo } alt="logo" />
                    </Link>
                    <h1>Pokedex</h1>
                </div>
                <Link to={'/pages/MyPokedex/'}>
                    <Badge anchorOrigin={{vertical: 'bottom',horizontal: 'left',}} className='favLink' color="success" badgeContent={state?.length} max={9999}>
                        <img className='linkIcon' src={ linkIcon } alt="favorites link icon" />
                    </Badge>
                </Link>
            </nav>
        );
}

export default Navbar;