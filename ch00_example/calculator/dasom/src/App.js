import React, { Component } from 'react';
import InputButton from './components/InputButton';
import './css/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      result: '',
      numberCheck: false
    }
  }

  handleAddInput = (e) => {
    const display = this.state.display
    if(this.state.numberCheck === false){ 
        if(isNaN(e.target.id) === true){ 
            
        } else {
          this.setState({
            display: display + e.target.id
          })
        }
    } else { 
      this.setState({
        display: display + e.target.id
      })
    }
    this.setState({
      numberCheck : (isNaN(e.target.id) === true) ? false : true 
    })
  }

  handleCalculate = () => {
      this.setState({
        result: eval(this.state.display)
      })
  }

  handleReset = () => {
    this.setState({
      display:'',
      result:''
    })
  }

  handleOnClick = (e) => {
    switch(e.target.id){
        case "=" :
            this.handleCalculate()
            break;
        case "AC" :
            this.handleReset()
            break;
        default:
            this.handleAddInput(e)
            break;
    } 
  }


  render() {
    const { display, result } = this.state;

  return (
      <table>
        <thead>
            <tr>
                <td colSpan="4" className="input_box">
                    <input type="text" defaultValue={display}/>
                </td>
            </tr>
            <tr>
                <td colSpan="4" className="input_box"> 
                    <input type="text" id="result" defaultValue={result}/>
                </td>
            </tr>
        </thead>
        <tbody>
          <InputButton 
              handleOnClick = {this.handleOnClick}
          />
        </tbody>
      </table>
  );
 }
}

export default App;
