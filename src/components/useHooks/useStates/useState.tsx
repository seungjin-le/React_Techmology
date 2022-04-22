import { useState } from "react";

// useState 로 2개의 input 을 관리
// join 이나 login 의 적합할것 같다
const UseState = () => {
  const [form, setForm] = useState({
    name: "",
    msg: "",
  });
  const { name, msg } = form;
  const onChange = ({ target }: any) => {
    // 불변성 유지를 위해 복사본 생성
    const nextForm = {
      ...form,
      [target.name]: target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(`${name}님 의 메시지${msg}`);
    // 메시지 출력후 input value 초기화
    setForm({
      name: "",
      msg: "",
    });
  };
  const onKeyPress = (e: any) => {
    // 2번째 input 에서 Enter 누를시 클릭 이벤트 실행
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <input type="text" name={"name"} value={name} onChange={onChange} />
      <input
        type="text"
        name={"msg"}
        value={msg}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button type="button" onClick={onClick}>
        msg
      </button>
    </div>
  );
};

export default UseState;
