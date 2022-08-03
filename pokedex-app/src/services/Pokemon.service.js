import { useState, useEffect } from 'react';
import axios from 'axios';

export function getPokemons(url) {
    return axios.get(url)
    .then((response) =>{
        return response})
    .then(res =>{
        return res.data;
    })
}

