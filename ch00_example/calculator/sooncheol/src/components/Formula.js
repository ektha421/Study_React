import React, { Component } from "react"

class Formula extends Component {
  constructor(props) {
    super(props)
    this.state = {
      forms: ["+", "-", "x", "/", "="]
    }
  }
  formula = e => {
    this.props.callbackFromParent(e.target.value)
  }
  render() {
    const numList = this.state.forms.map((form, index) => (
      <div className="btn" key={index}>
        <button onClick={this.formula} value={form}>
          {form}
        </button>
      </div>
    ))
    return <div className="calc-form">{numList}</div>
  }
}

export default Formula
