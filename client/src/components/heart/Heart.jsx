import React, { useState } from 'react'
import './heart.scss'

// To do fix the animation

export default function Heart({ isLiked }) {
    const [clicked, setClicked] = useState(false)

    return (
        <div className={`heart ${isLiked ? 'fill-color' : null} `} onClick={() => setClicked(!clicked)}>
            <div className={`animation-heart`} ></div>
        </div>
    )
}