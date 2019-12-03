import React, { Component } from "react"

class Key extends Component {
  render() {
    const { value } = this.props
    return <div className="key">{value}</div>
  }
}

export default Key
