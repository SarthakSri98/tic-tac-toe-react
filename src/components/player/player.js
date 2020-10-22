import React from 'react';
import './player.css';

class Player extends React.Component{

    constructor(props)
    {
        super(props);
    }

    renderMessage = ()=>
    {
       if(this.props.winningPlayer){    
        return <p className="message">{this.props.winningPlayer} wins!<br></br>Press Reset button to play again.</p>
       }
    }

    render()
    {
        return (
            <div className="players">
               <div className={(this.props.currentValue === 'X' ? 'chance' : '')} id="player1">
                    Player 1(X)<br></br><hr></hr>
                   {this.props.score.Player1}
               </div>
               { this.renderMessage() }
               <div className={(this.props.currentValue === 'O' ? 'chance' : '')} id="player2">
                    Player 2(O)<br></br><hr></hr>
                    {this.props.score.Player2}
               </div>
            </div>
        );
    }
}

export default Player;