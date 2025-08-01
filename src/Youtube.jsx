import React from 'react';
import './Youtube.css'

function Youtube(props) {
    return (
        <>
            <iframe width="560" height="315"
                src="https://www.youtube.com/embed/mE8E3nT2U70?si=8u5V3HAVCHFkUQNN"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
        </>
    )
}

export default Youtube