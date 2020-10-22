import React from 'react';
import './box.css';

// checkForWin()
// {

// }

class Box extends React.Component{
    render()
    {
        return (
            <div>
                <div className="box">
                {
                    this.props.matrix.map((row, rowIndex) => {
                        return <div>{row.map((square, colIndex) =>{
                        return <button>{this.props.matrix[rowIndex][colIndex]}</button>
                        })}</div>
                    })
                }
                </div>
                <button id="reset">Reset</button>
            </div>
        );
    }
}

export default Box;