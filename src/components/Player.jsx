import React from 'react';
import './Player.css'
import BgTema from '../assets/bg-tema.mp3'

function Player(props) {

    return (
        <>
            <audio src={BgTema} loop autoplay controls></audio>

        </>
    )
}

export default Player