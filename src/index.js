import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Board from './components/board/board';

class App extends React.Component {


    render()
    {
        return (
        <div><h3> Tic Tac Toe </h3>
        <div className="board">
            <Board/>
        </div>
        </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('root'));