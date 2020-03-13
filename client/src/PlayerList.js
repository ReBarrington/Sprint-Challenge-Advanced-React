import React from 'react';
import Player from './Player';
import Athlete from './Athlete';

const PlayerList = props => {
    console.log(props, " is props for PlayerList")
    // if (props.data.length > 0) {
    return (
        <div>
            {props.data.map(number =>{
                console.log(number, " number")
                number.map(playerInfo =>(
                    // console.log(playerInfo.name, " playerInfo")
                    <div>
                    <h1>Name: {playerInfo.name}</h1>
                    </div>
                ))
            })}
        </div>
    )
}

export default PlayerList;