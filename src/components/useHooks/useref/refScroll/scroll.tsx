import { useEffect, useRef } from "react";

const Scroll = () => {
  const scrollBox = useRef<any>();
  useEffect(() => {}, []);
  const scrollBtn = (text: string) => {
    const { scrollHeight, clientHeight } = scrollBox.current;
    if (text === "down") {
      scrollBox.current.scrollTop = scrollHeight - clientHeight;
    } else if (text === "up") {
      scrollBox.current.scrollTop = 0;
    }
  };
  return (
    <div>
      <div className={"scrollBody"} ref={scrollBox}>
        <div className={"scrollBox"} />
      </div>
      <button onClick={() => scrollBtn("down")}>down</button>
      <button onClick={() => scrollBtn("up")}>up</button>
    </div>
  );
};

export default Scroll;
