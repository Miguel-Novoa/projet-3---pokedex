import React from 'react';
import '../css/pokemonSheet.css';
import displayPokemonID from '../js/displayPokemonID';

import fleche from '../images/fleche.png';

function PokemonSheet ({pokemonDatas, speciesDatas, chainDatas, idFirstPokemonChain}) {
    let array = [];
    let str = chainDatas?.species.url.substr(42);
    console.log(str?.slice(0,-1))

    function checkIfUndefined(){
        if(typeof chainDatas?.evolves_to[0] !== 'undefined'){
            return array = chainDatas?.evolves_to[0].evolves_to
        }else{
            return array
        }
    }

    checkIfUndefined();

        return (
            <div>
                {pokemonDatas && 
                 speciesDatas &&
                 idFirstPokemonChain &&
                 chainDatas &&
                    <div className="sheetCard">
                        <section className='nameAndGeneralInfos'>
                            <div className='name'>
                                <h2>{pokemonDatas.species.name}</h2>
                            </div>
                            <div className='generalInfos'>
                                <div className='imgAndTypes'>
                                    <div className='img'>
                                        <img src={pokemonDatas.sprites.front_default} alt="pokemon sprite" />
                                    </div>
                                    <div className='types'>
                                        {pokemonDatas.types.map((type)=>{
                                            return (<div key={type.type.name} className='type'>{type.type.name}</div>)
                                        })}
                                    </div> 
                                </div>
                                <h5 className='pokemonID'>{displayPokemonID(pokemonDatas.id)}</h5>
                                <p>{speciesDatas.flavor_text_entries[0].flavor_text}</p>
                            </div>
                        </section>

                        <section className='stats'>
                            <div className='title'>
                                <h2>Stats</h2>
                            </div>
                            <div className='statsInfos'>
                                <div className="stat">
                                    <h5>HP : </h5>
                                    <div className="statLevelContainer">
                                        <div className="statLevel" style={{width : pokemonDatas.stats[0].base_stat + '%'}}>
                                            <p>{pokemonDatas.stats[0].base_stat}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="stat">
                                    <h5>Attack : </h5>
                                    <div className="statLevelContainer">
                                        <div className="statLevel" style={{width : pokemonDatas.stats[1].base_stat + '%'}}>
                                            <p>{pokemonDatas.stats[1].base_stat}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="stat">
                                    <h5>Defense : </h5>
                                    <div className="statLevelContainer">
                                        <div className="statLevel" style={{width : pokemonDatas.stats[2].base_stat + '%'}}>
                                            <p>{pokemonDatas.stats[2].base_stat}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="stat">
                                    <h5>Speed : </h5>
                                    <div className="statLevelContainer">
                                        <div className="statLevel" style={{width : pokemonDatas.stats[3].base_stat + '%'}}>
                                            <p>{pokemonDatas.stats[3].base_stat}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="stat">
                                    <h5>Sp Atk : </h5>
                                    <div className="statLevelContainer">
                                        <div className="statLevel" style={{width : pokemonDatas.stats[4].base_stat + '%'}}>
                                            <p>{pokemonDatas.stats[4].base_stat}</p>
                                        </div>
                                    </div>
                                    </div>
                                <div className="stat">
                                    <h5>Sp Def : </h5>
                                    <div className="statLevelContainer">
                                        <div className="statLevel" style={{width : pokemonDatas.stats[5].base_stat + '%'}}>
                                            <p>{pokemonDatas.stats[5].base_stat}</p>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </section>

                        <section className='profile'>
                            <div className='title'>
                                <h2>Profile</h2>
                            </div>
                            <div className='profileInfos'>
                                <div className='columnOne'>
                                    <div><p><span className='black'>Height : </span> {pokemonDatas.height}</p></div>
                                    <div><p><span className='black'>Weight : </span> {pokemonDatas.weight}</p></div>
                                    <div><p><span className='black'>Catch Rate : </span> {speciesDatas.capture_rate}%</p></div>
                                    <div><p><span className='black'>Gender Ratio : </span> {(1-(speciesDatas.gender_rate/8))*100}% M {(speciesDatas.gender_rate/8)*100}% F</p></div>
                                </div>
                                <div className='columnTwo'>
                                    <div className='groups'><span className='black'>Egg Groups : </span> 
                                        {speciesDatas.egg_groups.map((group)=>{
                                            return <p key={group.name}>&nbsp;{group.name} /</p>
                                        })}
                                    </div>
                                    <div><p><span className='black'>Hatch Steps : </span> {255*(speciesDatas.hatch_counter + 1)}</p></div>
                                    <div className='groups'><span className='black'>Abilities : </span> 
                                        {pokemonDatas.abilities.map((ability)=>{
                                            return <p key={ability.ability.name}>&nbsp;{ability.ability.name} /</p>
                                        })}
                                    </div>
                                    <div><p><span className='black'>Base happiness : </span> {speciesDatas.base_happiness}</p></div>
                                </div>
                            </div>
                        </section>

                        <section className="evolutions">
                            <div className='title'>
                                <h2>Evolutions</h2>
                            </div>
                            <div className='evolutionsInfos'>

                                <div className='evolutionsImg'>
                                    <div>
                                        <img className='pokemonImg' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idFirstPokemonChain}.png`} alt="pokemon image" />
                                    </div>
                                    <div>
                                        <img className='flecheImg firstArrow' src={fleche} style={{display: chainDatas.evolves_to.length > 0 ? 'block' : 'none'}} alt="arrow image" />
                                    </div>
                                    <div>
                                        <img className='pokemonImg secondEvo' style={{display: chainDatas.evolves_to.length > 0 ? 'block' : 'none'}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idFirstPokemonChain+1}.png`} alt="pokemon image" />
                                    </div>
                                    <div>
                                        <img className='flecheImg secondArrow' style={{display: array.length > 0 ? 'block' : 'none'}} src={fleche} alt="arrow image" />
                                    </div>
                                    <div>
                                        <img className='pokemonImg thirdEvo' style={{display: array.length > 0 ? 'block' : 'none'}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idFirstPokemonChain+2}.png`} alt="pokemon image" />
                                    </div>
                                </div>
                                <div className='evolutionsText'>
                                    <p style={{display: chainDatas.evolves_to.length > 0 ? 'block' : 'none'}}>
                                        {chainDatas.species.name} evolve into 
                                        {chainDatas.evolves_to.length > 0 ? ' ' + chainDatas.evolves_to[0].species.name : ''} 
                                    </p>
                                    <p style={{display: array.length > 0 ? 'block' : 'none'}}>
                                        {chainDatas.evolves_to.length && array.length > 0 ? chainDatas.evolves_to[0].species.name : ''} evolve into 
                                        {array.length > 0 ? ' ' + array[0].species.name : ''} 
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                }
                
            </div>
        );

}

export default PokemonSheet;