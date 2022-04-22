import { useEffect, useRef } from "react";

const Scroll = () => {
  const scrollBox = useRef<any>();
  useEffect(() => {
    console.log(scrollBox.current.scrollHeight);
    const scrollBtn = () => {
      const { scrollHeight, clientHeight } = scrollBox.current;
      console.log(scrollHeight, clientHeight);
      scrollBox.current.scrollTop = scrollHeight - clientHeight;
    };
    scrollBtn();
  }, []);
  return (
    <div className={"scrollBody"} ref={scrollBox}>
      <div className={"scrollBox"} />
    </div>
  );
};

export default Scroll;
