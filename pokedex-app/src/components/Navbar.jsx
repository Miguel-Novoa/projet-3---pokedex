import React, { Component } from 'react';
import { Badge } from '@mui/material';

import logo from '../images/logo.png';
import linkIcon from '../images/favListIcon.png';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className='logoAndTitle'>
                    <img className='logo' src={ logo } alt="logo" />
                    <h1>Pokedex</h1>
                </div>
                <Badge anchorOrigin={{vertical: 'bottom',horizontal: 'left',}} className='favLink' color="success" badgeContent={120} max={9999}>
                    <img className='linkIcon' src={ linkIcon } alt="favorites link icon" />
                </Badge>
            </nav>
        );
    }
}

export default Navbar;