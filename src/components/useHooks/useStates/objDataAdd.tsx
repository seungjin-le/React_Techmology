import { useState } from "react";

const ObjDataAdd = () => {
  const [names, setNames] = useState<any>([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState<string>("");
  const [nextId, setNextId] = useState<number>(5);
  const onChangeText = ({ target }: any) => {
    setInputText(target.value);
  };

  const onClick = () => {
    // push 함수는기존 배열자체를 변경해서 분변성을 유지하지 못해서 concat 를 사용
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const onKeyPress = ({ key }: any) => {
    if (key === "Enter") {
      onClick();
    }
  };
  const onRemove = (id: number) => {
    const nextNames = names.filter((name: any) => name.id !== id);
    setNames(nextNames);
  };
  const nameList = names.map((v: any) => (
    <li key={v.id} onDoubleClick={() => onRemove(v.id)}>
      {v.text}
    </li>
  ));
  return (
    <div>
      <h2>input text 데이터를 객체에 추가</h2>
      <input
        type="text"
        value={inputText}
        onChange={onChangeText}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>추가</button>
      {nameList}
    </div>
  );
};

export default ObjDataAdd;
