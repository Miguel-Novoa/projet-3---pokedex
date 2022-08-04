
export default function displayPokemonID (number){
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