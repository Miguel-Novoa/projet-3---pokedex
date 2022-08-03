import React from 'react';
import '../css/pokemonSheet.css'

import Navbar from './Navbar';

import fleche from '../images/fleche.png'

function PokemonSheet () {

        return (
            <div>
                <Navbar />
                <div className="sheetCard">
                    <section className='nameAndGeneralInfos'>
                        <div className='name'>
                            <h2>name</h2>
                        </div>
                        <div className='generalInfos'>
                            <div className='imgAndTypes'>
                                <div className='img'>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png`} alt="" />
                                </div>
                                <div className='types'>Types</div> 
                            </div>
                            <h5 className='pokemonID'>#389</h5>
                            <p>description</p>
                        </div>
                    </section>

                    <section className='profile'>
                        <div className='profileTitle'>
                            <h2>Profile</h2>
                        </div>
                        <div className='stats'>
                            <div className='columnOne'>
                                <p><span className='black'>Height : </span> 1.7m</p>
                                <p><span className='black'>Weight : </span> 90.5kg</p>
                                <p><span className='black'>Catch Rate : </span> 0%</p>
                                <p><span className='black'>Gender Ratio : </span> 87.5% M 12.5% F</p>
                            </div>
                            <div className='columnTwo'>
                                <p><span className='black'>Egg Groups : </span> Monster, Dragon</p>
                                <p><span className='black'>Hatch Steps : </span> 5100</p>
                                <p><span className='black'>Abilities : </span> Blaze, Solar-power</p>
                                <p><span className='black'>EVs : </span> 3 SP Att</p>
                            </div>
                        </div>
                    </section>

                    <section className="evolutions">
                        <div className='evolutionsTitle'>
                            <h2>Evolutions</h2>
                        </div>
                        <div className='evolutionsInfos'>

                            <div className='evolutionsImg'>
                                <div>
                                    <img className='pokemonImg' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png`} alt="" />
                                </div>
                                <div>
                                    <img className='flecheImg' src={fleche} alt="" />
                                </div>
                                <div>
                                    <img className='pokemonImg' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png`} alt="" />
                                </div>
                                <div>
                                    <img className='flecheImg' src={fleche} alt="" />
                                </div>
                                <div>
                                    <img className='pokemonImg' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png`} alt="" />
                                </div>
                            </div>
                            <div className='evolutionsText'>
                                <p>Turtwig evolve into Grotle <span>at level 18</span></p>
                                <p>Grotle evolve into Torterra <span>at level 36</span></p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );

}

export default PokemonSheet;