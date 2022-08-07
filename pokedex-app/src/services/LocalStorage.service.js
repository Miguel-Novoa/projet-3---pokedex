export const addPokedexLocalStorage = ({id, name}) => {
    let pokemonsStorage = [];
    const savedDatas = localStorage.getItem("likedPokemons");
    if (savedDatas !== null) {
        let addPokemon = JSON.parse(savedDatas);
        addPokemon.push({id, name});
        localStorage.setItem("likedPokemons", JSON.stringify(addPokemon));
    } else {
        pokemonsStorage.push({id, name});
        localStorage.setItem("likedPokemons", JSON.stringify(pokemonsStorage));
    }
};


export const deletePokedexLocalStorage = ({id, name}) => {
  const savedDatas = localStorage.getItem("likedPokemons");
    if (savedDatas !== null || savedDatas !== undefined) {
      let pokemonsList = JSON.parse(savedDatas);
      let newSavedPokemons = pokemonsList.filter((element) => {
        return element.name !== name;
      });
      localStorage.setItem("likedPokemons", JSON.stringify(newSavedPokemons));
    }
}