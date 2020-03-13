import React from "react";


const Player = props => {
    // console.log(props, " is props for Player")
    let className = `${props.country}`.replace(/\s/g, '');
    className += ' player-card'
    console.log(className)
    return (
        <div className={className}>
            <h1>Name: {props.name}</h1>
            <h2>Country: {props.country}</h2>
        </div>
    )
}

export default Player;