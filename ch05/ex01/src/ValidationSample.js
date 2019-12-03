import React, {Component} from 'react';
import './ValidationSample.css'

class ValidationSample extends Component{
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {  // 2번
        this.setState({
            password: e.target.value
        })
    }

    handleButtonClick = () => {
        this.setState({ // 4번
            clicked: true,
            validated: this.state.password === '0000'
        })
    }

    render() {
        return(
            <div>
                <input
                type="text"
                value={this.state.password}
                onChange={this.handleChange}  // 1번
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failuer') : ''} // 5번
                />
                <button onClick={this.handleButtonClick}>검증하기</button>   {/* 3번 */}
            </div>
        )
    }
}
export default ValidationSample;