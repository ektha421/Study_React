import React, { useRef, useCallback, useState } from "react";
import produce from "immer";

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  // input 수정을 위한 함수
  const onChange = useCallback(
    e => {
      const { name, value } = e.target; // 비구조화 할당
      setForm(
        // ...form,
        // [name]: [value]
        produce(form, draft => {
          draft[name] = value;
        })
        // produce 라는 함수는 두 가지 파라미터를 받습니다.
        // 첫 번째는 수정하고 싶은 상태, 두번쨰는 상태를 어떻게 업데이트 할지 정의하는 함수
        // 두번째 파라미터로 전달되는 함수 내부에서 원하는 값을 변경하면, produce 함수가 불변성 유지를
        // 대신 해주면서 새로운 상태로 생성해 줍니다.
      );
    },
    [form] // 해당 인자의 값 바뀔 때  함수 생성
  );

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    e => {
      e.preventDefault(); // 현재 이벤트의 기본 동작을 중지
      const info = {
        id: nextId.current, // 4 line
        username: form.username, // 62 line : value={form.username}
        name: form.name // 63 line : value={form.name}
      };

      // array에 새 항목 등록
      setData(
        // ...data,
        // array: data.array.concat(info) // concat() : 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.
        produce(data, draft => {
          draft.array.push(info);
        })
      );
      console.log("array", data.array);
      console.log("info", info);

      // form 초기화
      setForm({
        name: "",
        username: ""
      });
      nextId.current += 1;
    },
    [data, form.name, form.username] // 해당 인자의 값 바뀔 때  함수 생성
  );
  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    id => {
      setData(
        // ...data,
        // array: data.array.filter(info => info.id !== id) // filter() : 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
        produce(data, draft => {
          draft.array.splice(
            draft.array.findIndex(info => info.id === id),
            1
          );
        })
      );
    },
    [data] // 해당 인자의 값 바뀔 때  함수 생성
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

// useCallback 은 useMemo와 상당히 비슷한 함수입니다. 주로 렌더링 성능을 최적화해야 하는 상황에서 사용하는데요, 이 Hook을 사용하면 이벤트 핸들러 함수를 필요할 때만 생성 할 수 있습니다.
// useCallback 의 첫번째 파라미터에는 우리가 생성해주고 싶은 함수를 넣어주고, 두번째 파라미터에는 배열을 넣어주면 되는데 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해주어야 하는지 명시해주어야 합니다.

// useRef : https://react.vlpt.us/basic/10-useRef.html
