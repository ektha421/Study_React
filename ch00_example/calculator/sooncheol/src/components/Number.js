import React, { Component } from "react"
// import num from "./num"

class Number extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "B"]
    }
  }
  numberInput = e => {
    this.props.callbackFromParent(e.target.value)
  }
  render() {
    const numList = this.state.nums.map((num, index) => (
      <div className="btn" key={index}>
        <button onClick={this.numberInput} value={num}>
          {num}
        </button>
      </div>
    ))
    return <div className="calc-number">{numList}</div>
  }
}

export default Number
