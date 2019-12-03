import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

/**
 *  액션 타입
 */

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

/**
 *  액션 객체 생성 함수
 */

const toggleSwitch = () => ({
  type: TOGGLE_SWITCH
});

const increase = diff => ({
  type: INCREASE,
  diff
});

const decrease = () => ({ type: DECREASE });

/**
 * 리듀서 생성
 */

// 초기값 설정

const initialState = {
  toggle: false,
  counter: 0
};

//함수 생성
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, //불변성 유지 > 액션으로 바꿀 상태값이 아닌 다른 상태값은 그대로 유지해줘야하 한다.
        toggle: !state.toggle
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.diff
      };

    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };

    default:
      return state;
  }
}

/**
 * 스토어 생성
 */

const store = createStore(reducer);
/**
 * render 함수 생성
 */

const render = () => {
  const state = store.getState();

  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }

  counter.innerText = state.counter;
};

/**
 * 구독하기
 */

render();

store.subscribe(render);

/**
 * 액션 발생시키기
 */

divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};

btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
