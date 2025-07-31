import React from 'react';
import './Card.css'

function Card(props) {
    return (
        <>
            <div className='card'>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.info.id}.png`} alt={`Imagem de ${props.info.nome}`} />
                <p>{props.info.id}</p>
                <p>{props.info.nome}</p>
                <p>{props.info.tipo}</p>
            </div>
        </>
    )
}

export default Card