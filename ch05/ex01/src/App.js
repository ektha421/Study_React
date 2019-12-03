import React, {Component} from 'react';
// import ValidationSample from './ValidationSample';
// import ValidationSample from './RefSample';
// import ValidationSample from './ValidationSample2';
// import ValidationSample from './ScrollBox';
import ValidationSample from './ScrollBox2';

// import React from 'react';
// function App() { // 함수형 컴포넌트
//   return (
//     <ValidationSample />
//   );
// }

// import React, {Component} from 'react';
// class App extends Component { // 클래스형 컴포넌트
//   render() {
//   return (
//       <ValidationSample />
//     );
//   }
// }

class App extends Component {
  render() {
  return (
      <div>
        <ValidationSample ref={(ref) => this.scrollBox=ref} />
        <button onClick={() => this.scrollBox.ScrollBottom()}>맨 밑으로</button>
      </div>
    );
  }
  // 문법상으론 onClick = {this.scrollBox.ScrollBottom} 같은 형식으로 작성해도 틀린 것은 아니지만, 컴포넌트가 처음 렌더링될 때는 this.scrollbox 값이 undefined이므로, 
  // this.scrollBox.ScrollBottom을 가져올 때 오류가 발생합니다. 화살표 함수 문법을 사용하여 새로운 함수를 만들고 그 내부에서 this.scrollBox.ScrollBottom 메서드를 실행
  // 하면, 버튼을 누르는 시점(이미 한번 렌더링을 해서 this.scrollBox를 설정한 시점)에서는 오류가 발생하지 않습니다.
}

export default App;
