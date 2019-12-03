import React, { Component, Fragment } from 'react';
import '../css/style.css';

class InputButton extends Component {
    constructor(props){
        super(props)
        this.state = {
             inputbutton : [
                ["AC", "/"],
                [7, 8, 9, "*"],
                [4, 5, 6, "-"],
                [1, 2, 3, "+"],
                [0, ".", "="]
            ]
        }
    }

    render() {
        const colMaxSize = 4;
        const inputValue = this.state.inputbutton.map(
            (value,index) =>{
            return (
                <tr key={index}>
                    {value.map(
                        (val, idx) =>{
                            const colSize = (idx === 0) ? colMaxSize - value.length + 1 : 1
                            return (
                                <td 
                                key = {idx} 
                                colSpan = {colSize} 
                                id = {val}
                                className = "btn_item" 
                                onClick = {this.props.handleOnClick}
                                >
                                    {val}
                                </td>
                            )
                        }
                    )}
                </tr>
            )
        })

        return (
            <Fragment>{inputValue}</Fragment>
        );
    }
}

export default InputButton;