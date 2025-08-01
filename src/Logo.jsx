import React from 'react';
import './Logo.css'
import logo from './assets/pokemon-logo.jpg'

function Logo(props) {
    return (
        <>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </>
    )
}

export default Logo