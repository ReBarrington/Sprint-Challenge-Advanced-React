import React from "react";


const Player = props => {
    // console.log(props.name, " is props for Player")
    console.log('hello')
    return (
        <div>
            <p>Name: {props.data.name}</p>
        </div>
    )
}

export default Player;