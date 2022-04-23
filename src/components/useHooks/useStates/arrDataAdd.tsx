import { useState } from "react";

const ArrDataAdd = () => {
  const [names, setNames] = useState<any>([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState<string>("");
  const [nextId, setNextId] = useState<number>(5);

  const nameList = names.map((v: any) => <div key={v.id}>{v.text}</div>);
  const onChangeText = ({ target }: any) => {
    setInputText(target.value);
  };
  const onClick = () => {
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

export default ArrDataAdd;
