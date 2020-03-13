import React from 'react';
import Player from './Player';
import { render } from 'react-dom';

const PlayerList = props => {
    console.log(props, " is props for PlayerList")
    return (
        <div>
            {props.data.map(playerInfo =>{
                console.log(playerInfo, " playerInfo")
                    return (
                        <Player key={playerInfo.id} name={playerInfo.name} country={playerInfo.country} />
                    )
                })
            })}
        </div>
    )
}

export default PlayerList;