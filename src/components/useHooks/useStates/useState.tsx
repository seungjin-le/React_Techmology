import { useState } from "react";

// useState로 2개의 input를 관리
// join 이나 login 의 적합할것 같다
const UseState = () => {
  const [form, setForm] = useState({
    name: "",
    msg: "",
  });
  const { name, msg } = form;
  const onChange = ({ target }: any) => {
    const nextForm = {
      ...form,
      [target.name]: target.value,
    };
    setForm(nextForm);
    console.log(form);
  };
  const onClick = (e?: any) => {
    alert(`${name}님 의 메시지${msg}`);
    setForm({
      name: "",
      msg: "",
    });
  };
  const onKeyPress = (e: any) => {
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
