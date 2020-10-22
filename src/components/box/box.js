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
            <div class="box">
                <div class="row1">
                    <button id='1'>-</button>
                    <button id='2'>-</button>
                    <button id='3'>-</button>
                </div>
                <div class="row2">
                    <button id='4'>-</button>
                    <button id='5'>-</button>
                    <button id='6'>-</button>
                </div>
                <div class="row1">
                    <button id='7'>-</button>
                    <button id='8'>-</button>
                    <button id='9'>-</button>
                </div>
            </div>
            <button id="reset">Reset</button>
            </div>
        );
    }
}

export default Box;