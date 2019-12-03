import React, { Component } from "react"
// import Value from "./components/Value"
import Number from "./components/Number"
import Formula from "./components/Formula"
import "./assets/css/reset.css"
import "./assets/css/style.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formula: "",
      formCheck: false,
      viewValue: "0"
    }
  }
  numberCallback = dataFromChild => {
    console.log("numberCallback length", this.state.viewValue)
    if (dataFromChild === "B") {
      if (this.state.viewValue.length > 1) {
        this.setState({
          viewValue: this.state.viewValue.slice(0, -1)
        })
      } else {
        // if (this.state.viewValue.length === undefined) {
        //   alert("연산하고 못지움")
        // } else {
        this.setState({
          viewValue: "0"
        })
        // }
      }
    } else {
      this.setState({
        viewValue:
          this.state.viewValue === "0" ? dataFromChild : this.state.viewValue + dataFromChild
      })
    }
  }
  formCallback = dataFromChild => {
    if (dataFromChild === "=") {
      console.log("formCallback", this.state.viewValue)
      if (this.state.formula === "") {
        alert("연산식을 입력하세요.")
      } else {
        const fNum = this.state.viewValue.indexOf(this.state.formula)
        let formValue1 = this.state.viewValue.substring(0, fNum) * 1
        let formValue2 = this.state.viewValue.substring(fNum + 1) * 1
        switch (this.state.formula) {
          case "+":
            this.setState({
              viewValue: formValue1 + formValue2
            })
            break
          case "-":
            this.setState({
              viewValue: formValue1 - formValue2
            })
            break
          case "x":
            this.setState({
              viewValue: formValue1 * formValue2
            })
            break
          case "/":
            this.setState({
              viewValue: formValue1 / formValue2
            })
            break
          default:
        }
        this.reset()
      }
    } else {
      this.setState({
        formCheck: true,
        formula: dataFromChild,
        viewValue: this.formCheck(dataFromChild)
      })
    }
  }
  formCheck = v => {
    if (this.state.formCheck === false) {
      return this.state.viewValue + v
    } else {
      alert("현재 연산을 수행 후 다음 연산 진행하세요.")
      return this.state.viewValue
    }
  }
  reset = v => {
    this.setState({
      formula: "",
      formCheck: false
    })
    if (v === 0) {
      this.setState({
        viewValue: "0"
      })
    }
  }
  componentDidUpdate() {
    // console.log("componentDidUpdate", this.state.viewValue)
  }
  render() {
    return (
      <div className="calc-wrap">
        <div className="calc-header">
          <div className="value">{this.state.viewValue}</div>
        </div>
        <div className="calc-button">
          <Number callbackFromParent={this.numberCallback} />
          <Formula callbackFromParent={this.formCallback} />
        </div>
        <button onClick={() => this.reset(0)}>초기화 버튼</button>
      </div>
    )
  }
}

export default App
