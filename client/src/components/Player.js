import React from "react";


const Player = props => {
    // console.log(props, " is props for Player")
    return (
        <div className="player-card">
            <p>Name: {props.name}</p>
            <p>Country: {props.country}</p>
        </div>
    )
}

export default Player;