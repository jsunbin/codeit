import React, { useRef } from "react";

export default function FileInput({ name, value, onChange }) {
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    // DOM 노드는 반드시 렌더링이 끝나야 생기므로, ref객체도 화면에 컴포넌트가 렌더링 되었을 대만 존재함
    // 조건부 렌더링으로 인해서 이 값이 없을 수도 있므
    // 따라서, 항상, 아래처럼 ref 객체의 current 값이 존재하는 지 확인하고 사용하는 것을 추천
    const inputNode = inputRef.current;

    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} ref={inputRef} />
      {value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
}
