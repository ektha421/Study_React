import React, { Component } from "react";
/*
    TODO
    1. '='누른 후 다시 숫자 누르면 그전 계산 타입이 적용되어잇으므로 리셋해주는 부분 >> 해결
    2. 연산 계속 해도 결과 값 노출된 후 계산 되도록
  */

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //연산 버튼 목록
      btnList: [
        {
          name: "+",
          type: "plus"
        },
        {
          name: "-",
          type: "minus"
        },
        {
          name: "*",
          type: "multiple"
        },
        {
          name: "/",
          type: "divide"
        }
      ],
      //숫자 버튼 목록
      numList: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      //연산 전 값
      beforeNum: 0,
      //연산 전 값과 연산할 입력 값
      inputNum: 0,
      //연산 타입
      type: "",
      //리셋 여부
      isReset: false
    };
  }

  // '='버튼 누를 경우 합계 추출하는 함수

  totalNum = () => {
    if (!this.state.isReset) {
      //합계 추출 후에는 input 값 초기화
      this.setState({
        isReset: true
      });

      //연산
      const { beforeNum, inputNum } = this.state;
      let totalNum = 0;
      switch (this.state.type) {
        case "plus":
          totalNum = beforeNum + inputNum;
          break;
        case "minus":
          totalNum = beforeNum - inputNum;
          break;
        case "multiple":
          totalNum = beforeNum * inputNum;
          break;
        case "divide":
          totalNum = beforeNum / inputNum;
          break;
        case "":
          totalNum = this.state.beforeNum;
        default:
          break;
      }

      //합계 추출후에는 추출 값 표기 / 연산 타입 제거
      this.setState({
        inputNum: totalNum,
        beforeNum: totalNum,
        type: ""
      });
    }
  };

  //숫자 버튼 클릭 할떄 마다 input에 입력 값을 넣어 주는 함수
  clickNumber = num => {
    //연산 전
    if (!this.state.isReset) {
      //누를 때 숫자 string 으로 변환해서 입력 시켜주는 부분
      this.setState({
        inputNum: Number(this.state.inputNum.toString() + num.toString())
      });
    }
    //연산 후
    else {
      //연산버튼을 누른 경우에는 input 값을 리셋 시켜준 후
      // 다시 입력해야하므로 리셋해주는 부분
      this.setState({
        inputNum: num,
        isReset: false
      });
    }
  };

  //연산 버튼을 눌렀을떄 어떤 연산으로 처리할지 지정해주는 부분.
  typeChange = type => {
    this.setState({
      type: type,
      isReset: true
    });
    if (this.state.beforeNum === 0) {
      this.setState({
        beforeNum: this.state.inputNum
      });
    }
  };

  //숫자 버튼 키 array 에서 버튼으로 바꿔주는 부분 (별로 중요한 부분아님)
  parseNumBtn = index => {
    let data;
    switch (index) {
      case 0:
        data = this.state.numList.slice(0, 3);
        break;
      case 1:
        data = this.state.numList.slice(3, 6);
        break;
      case 2:
        data = this.state.numList.slice(6, 10);
        break;

      default:
        break;
    }
    return data.map((item, index) => (
      <td key={index}>
        <button onClick={() => this.clickNumber(item)}>{item}</button>
      </td>
    ));
  };

  //'AC'버튼 누른 경우 리셋 해주는 함수
  resetNum = () => {
    this.setState({
      isReset: true,
      beforeNum: 0,
      inputNum: 0,
      type: ""
    });
  };

  handleChange = () => {};
  render() {
    return (
      <div className="area-calculator">
        <table>
          <colgroup>
            <col width="25%" />
            <col width="25%" />
            <col width="25%" />
            <col width="25%" />
          </colgroup>
          <thead>
            <tr>
              <td colSpan="4">
                <input
                  type="number"
                  value={this.state.inputNum}
                  onChange={() => this.handleChange}
                />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.state.btnList.map((item, index) => (
                <td key={index}>
                  <button
                    className="btn-operator"
                    onClick={() => this.typeChange(item.type)}
                  >
                    {item.name}
                  </button>
                </td>
              ))}
            </tr>
            <tr>
              {this.parseNumBtn(0)}
              <td>
                <button onClick={this.totalNum} className="btn-operator">
                  =
                </button>
              </td>
            </tr>
            <tr>
              {this.parseNumBtn(1)}
              <td>
                <button className="btn-reset" onClick={this.resetNum}>
                  AC
                </button>
              </td>
            </tr>
            <tr>{this.parseNumBtn(2)}</tr>
            <tr>
              <td colSpan="3"></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;
