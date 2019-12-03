import React, { useReducer } from "react";

const caculation = (sign, beforeNum, inputNum) => {
  let result = beforeNum;

  console.log(sign, beforeNum, inputNum);

  switch (sign) {
    case "PLUS":
      result = beforeNum + inputNum;
      break;
    case "MINUS":
      result = beforeNum - inputNum;
      break;
    case "MULTIPLE":
      result = beforeNum * inputNum;
      break;
    case "DIVIDE":
      result = beforeNum / inputNum;
      break;
    default:
      break;
  }
  return result;
};

const initValue = {
  beforeNum: 0,
  inputNum: 0,
  resultNum: 0,
  sign: "",
};

const mainReducer = (state, action) => {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case "TYPE_CHANGE": {
      console.log("TYPECHANGE", action.sign);
      return {
        ...state,
        sign: action.sign,
        resultNum: 0,
        beforeNum: state.resultNum,
      };
    }
    case "CACULATION": {
      console.log("CACULATION", state.sign, state.beforeNum, state.resultNum);
      let result = caculation(state.sign, state.beforeNum, state.resultNum);
      console.log(result);

      return {
        ...state,
        resultNum: result,
      };
    }
    case "RESET": {
      return initValue;
    }
    case "NUM_CLICK": {
      console.log("state", state);

      let viewNum = parseInt(
        state.resultNum.toString() + action.inputNum.toString(),
      );

      // console.log()
      // console.log(state);

      // return { ...user, email: action.email }
      return { ...state, resultNum: viewNum };
    }
    default: {
      return { ...state };
    }
  }
};

// const numClick = ()=>{
//     useReducer()
// }

const Main = props => {
  const [main, dispatchMain] = useReducer(mainReducer, initValue);

  const numClick = event => {
    dispatchMain({ type: "NUM_CLICK", inputNum: event.target.value });
  };

  const changeSign = event => {
    dispatchMain({ type: "TYPE_CHANGE", sign: event.target.value });
  };

  const caculation = () => {
    dispatchMain({ type: "CACULATION" });
  };

  const resetClik = () => {
    dispatchMain({ type: "RESET" });
  };

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
              <input type="number" value={main.resultNum} onChange={() => {}} />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button
                className="btn-operator"
                onClick={changeSign}
                value="PLUS"
              >
                +
              </button>
            </td>
            <td>
              <button
                className="btn-operator"
                onClick={changeSign}
                value="MINUS"
              >
                -
              </button>
            </td>
            <td>
              <button
                className="btn-operator"
                onClick={changeSign}
                value="MULTIPLE"
              >
                *
              </button>
            </td>
            <td>
              <button
                className="btn-operator"
                onClick={changeSign}
                value="DIVIDE"
              >
                /
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={numClick} value="7">
                7
              </button>
            </td>
            <td>
              <button onClick={numClick} value="8">
                8
              </button>
            </td>
            <td>
              <button onClick={numClick} value="9">
                9
              </button>
            </td>
            <td>
              {/* <button onClick={this.totalNum} className="btn-operator"> */}
              <button className="btn-operator" onClick={caculation}>
                =
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={numClick} value="4">
                4
              </button>
            </td>
            <td>
              <button onClick={numClick} value="5">
                5
              </button>
            </td>
            <td>
              <button onClick={numClick} value="6">
                6
              </button>
            </td>
            <td>
              <button
                className="btn-reset"
                onClick={resetClik}
                // onClick={this.resetNum}
              >
                AC
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={numClick} value="1">
                1
              </button>
            </td>
            <td>
              <button onClick={numClick} value="2">
                2
              </button>
            </td>
            <td>
              <button onClick={numClick} value="3">
                3
              </button>
            </td>
            <td>
              <button onClick={numClick} value="0">
                0
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan="3"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Main;
