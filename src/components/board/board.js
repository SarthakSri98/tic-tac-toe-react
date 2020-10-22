import React from 'react';
import Box from '../box/box';
import Players from '../player/player';
import './board.css';

class Board extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = { gameMatrix : [['-','-','-'],['-','-','-'],['-','-','-']], scoreObj : { Player1:0, Player2:0 }, winningPlayer:null, gameActive:true, currentValue:'X' }
    }

    render()
    {
        return (
            <div>
               <Players score={this.state.scoreObj} currentValue={this.state.currentValue} winningPlayer={this.state.winningPlayer}/> 
               <br></br>
               <div className="box">
                {
                    this.state.gameMatrix.map((row, rowIndex) => {
                        return <div>{row.map((square, colIndex) =>{
                        return <button onClick={ ()=>{this.setPosition(rowIndex,colIndex)} }>{this.state.gameMatrix[rowIndex][colIndex]}</button>
                        })}</div>
                    })
                }
                </div>
                <button id="reset" onClick={()=>{this.reset();}}>Reset</button>
            </div>
        );
    }

    setPosition = (rowIndex,colIndex)=>
    {
        if(this.state.gameActive){
            let { gameMatrix,currentValue } = this.state;
            if(gameMatrix[rowIndex][colIndex]==='-')
            {
                gameMatrix[rowIndex][colIndex] = currentValue;
                currentValue = currentValue === 'X' ? 'O' : 'X';
                this.setState({gameMatrix: gameMatrix,currentValue:currentValue}) 
                this.checkForWin();
            }  
        }  
    }

    checkForWin = ()=>
    {
        const { gameMatrix } = this.state;
        let roundWon = false, winningPlayer = 'Player1', winningPlayerVal='X';
        // game logic
        for (let i = 0; i < 3; ++i)
            if (gameMatrix[i][0]!=='-' && gameMatrix[i][0] === gameMatrix[i][1] && gameMatrix[i][1] === gameMatrix[i][2])
            {
                roundWon = true;
                winningPlayerVal = gameMatrix[i][0];
                break;
            }

        for (let i = 0; i < 3; ++i)
            if (gameMatrix[0][i]!=='-' && gameMatrix[0][i] === gameMatrix[1][i] && gameMatrix[1][i] === gameMatrix[2][i])
            {
                roundWon = true;
                winningPlayerVal = gameMatrix[0][i];
                break;
            }

        if (gameMatrix[0][0]!=='-' && gameMatrix[0][0] === gameMatrix[1][1] && gameMatrix[1][1] === gameMatrix[2][2])
        {
                winningPlayerVal = gameMatrix[0][0];
                roundWon = true;
        }

        if (gameMatrix[0][2]!=='-' && gameMatrix[0][2] === gameMatrix[1][1] && gameMatrix[1][1] === gameMatrix[2][0])
        {
            winningPlayerVal = gameMatrix[0][2];
            roundWon = true;
        }
        if (roundWon) {
                let { scoreObj } = this.state;
                winningPlayer = winningPlayerVal==='X' ? 'Player1' : 'Player2';
                scoreObj[winningPlayer]++;
                this.setState({scoreObj:scoreObj,winningPlayer:winningPlayer,gameActive:false});
                return;
        }
    }

    reset = ()=>
    {
        let gameMatrix = [['-','-','-'],['-','-','-'],['-','-','-']];
        this.setState({gameMatrix:gameMatrix,winningPlayer:null,gameActive:true});
    }
}

export default Board;