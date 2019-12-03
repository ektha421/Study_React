import React from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { increase, decrease } from "../modules/counter";
import { bindActionCreators } from "redux";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// const mapStateToProps = state => ({
//   number: state.counter.number
// });

// const mapDispatchToProps = dispatch => ({
//   increase: () => dispatch(increase()),
//   decrease: () => dispatch(decrease())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

/**
 * bindActionCreators 사용시
 */

// export default connect(
//   state => ({ number: state.counter.number }),
//   dispatch =>
//     bindActionCreators(
//       {
//         increase,
//         decrease
//       },
//       dispatch
//     )
// )(CounterContainer);

/**
 * 한번더 축약
 */

export default connect(state => ({ number: state.counter.number }), {
  increase,
  decrease
})(CounterContainer);
