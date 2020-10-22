import React from 'react';
import Box from '../box/box';
import Players from '../player/player';
import './board.css';

let gameMatrix = [['-','-','-'],['-','-','-'],['-','-','-']]

class Board extends React.Component{
    render()
    {
        return (
            <div>
               <Players/> 
               <br></br>
               <Box matrix={gameMatrix}/>
            </div>
        );
    }
}

export default Board;