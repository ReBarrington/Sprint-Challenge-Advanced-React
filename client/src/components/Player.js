import React from "react";


const Player = props => {
    // console.log(props, " is props for Player")
    let className = `${props.country}`.replace(/\s/g, '');
    className += ' player-card'
    console.log(className)
    return (
        <div className={className}>
            <h1>{props.name}</h1>
        </div>
    )
}

export default Player;