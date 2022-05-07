import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Pokemon = () => {

    const [ pokemon, setPokemon ] = useState({});
    const [ weight, setWeight ] = useState(0);
    const [ isHectograms, setIsHectograms] = useState(true);
    const [ height, setHeight ] = useState(0);
    const [ isDecimeter, setIsDecimeter] = useState(true);
    
    const change = () => {
        const random = Math.floor(Math.random() * 809)
        axios.get("https://pokeapi.co/api/v2/pokemon/" + random)
        .then(res => { // Utilizar siempre res.data
            setPokemon(res.data);
            setHeight(res.data.height);
            setWeight(res.data.weight);
        });
    }

    useEffect(() => {
        const random = Math.floor(Math.random() * 809)
        axios.get("https://pokeapi.co/api/v2/pokemon/" + random)
        .then(res => { // Utilizar siempre res.data
            setPokemon(res.data);
            setHeight(res.data.height);
            setWeight(res.data.weight);
        });
    }, []);

    console.log(pokemon) //length

    const changeWeight = () => {
        if(isHectograms) {
            // Convertir a kilogramos
            setWeight(weight / 10);
            setIsHectograms(false);
        } else {
            // Convertir a hectogramos
            setWeight(weight * 10);
            setIsHectograms(true);
        }
    }

    const changeHeight = () => {
        if(isDecimeter) {
            // Convertir a metros
            setHeight(height / 10);
            setIsDecimeter(false);
        } else {
            // Convertir a decimetros
            setHeight(height * 10);
            setIsDecimeter(true);
        }
    }

    return (
        <div className='pokemon'>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.front_shiny} alt="" />
            <p><b>Weight: </b>{weight} {isHectograms ?'Hectograms' : 'Kilograms'}</p>
            <p><b>Height: </b>{height} {isDecimeter ? 'Decimeters' : 'Meters'}</p>
            <p><b>Type: </b>{pokemon.types?.[0].type.name}</p>
            <button onClick={changeWeight}>
                Change Weight Units
            </button>      
            <button onClick={changeHeight}>
                Change Height Units
            </button> 
            <button onClick={change}>
                Change Pokemon Shiny
            </button>       
        </div>
    );
};

export default Pokemon;