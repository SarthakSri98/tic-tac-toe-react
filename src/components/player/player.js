import React from 'react';
import './player.css';

class Player extends React.Component{

    state = { player1:{name:"Naruto",score:0},player2:{name:"Sasuke",score:0} }
    render()
    {
        return (
            <div class="players">
               <div id="player1">
                   {this.state.player1.name}<br></br><hr></hr>
                   {this.state.player1.score}
               </div>
               <div id="player2">
                    {this.state.player2.name}<br></br><hr></hr>
                    {this.state.player2.score}
               </div>
            </div>
        );
    }
}

export default Player;