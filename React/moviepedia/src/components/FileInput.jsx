import React, { useEffect, useRef, useState } from "react";

export default function FileInput({ name, value, initialPreview, onChange }) {
  const [preview, setPreview] = useState(initialPreview);
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;

    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    /** URL.createObjectURL();
     * 해당 파일의 주소처럼 쓸 수 있는 값인 문자열을 리턴한다.
     * ObjectURL을 만들면 웹 브라우저는 메모리를 할당하고, 파일에 해당하는 주소를 만들어 준다.
     * 우리가 만든 FileInput 컴포넌트는 렌더링하는 과정에서 리액트 외부의 상태를 바꾸게 된다.
     * 이런 식으로 컴포넌트 함수에서 외부의 상태를 바꾸는 걸 사이드 이펙트라고 한다.
     * fetch와 같은 네트워크 리퀘스트도 이에 해당하며, 리액트에서는 이렇게 사이드 이펙트를 다루는 경우 주로 useEffect를 사용한다.
     */

    setPreview(nextPreview);

    /**
     * useEffect의 콜백 함수에서 정리함수를 리턴하면 objectURL이 더 이상 사용하지 않을 때 해제할 수 있다.
     */
    return () => {
      setPreview(initialPreview);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value, initialPreview]);

  return (
    <div>
      <img src={preview} accept="image/png, image/jpeg" alt="이미지 미리보기" />
      <input type="file" onChange={handleChange} ref={inputRef} />
      {value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
}
