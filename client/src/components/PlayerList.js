import React from 'react';
import Player from './Player';
import { render } from 'react-dom';

const PlayerList = props => {
    console.log(props, " is props for PlayerList")
    return (
        <div>
            {props.data.map(number =>{
                console.log(number, " number")
                number.map(playerInfo => {
                    console.log(playerInfo.name, " is playerInfo.name")
                    return (
                        <Player key={playerInfo.id} name={playerInfo.name} country={playerInfo.country} />
                    )
                })
            })}
        </div>
    )
}

export default PlayerList;