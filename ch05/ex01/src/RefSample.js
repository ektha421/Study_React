import React, {Component} from 'react';
import './ValidationSample.css'

class RefSample extends Component {
    input = React.createRef();  // 1번
    // createRef 를 사용하여 ref를 만들려면 우선 컴포넌트 내부에서 멤버 변수로 React.createRef()를 담아 주어야 합니다.
    // 그리고 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로 넣어주면 됩니다.
    handleFocus = () => {
        this.input.current.focus(); // 3번 
        console.log(this.input.current);
        // ref를 설정해 준 DOM에 접근하려면 this.input.current를 조회하면 됩니다.
        // 콜백 함수와 다른것은 이렇게 뒷 부분에 .current 를 넣어주어야 한다는 것입니다.
    }

    render() {
        return(
            <div>
                <input ref={this.input} onClick={this.handleFocus} />   {/* 2번 */}
            </div>
        )
    }
}

export default RefSample;