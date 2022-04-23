import Scroll from "./refScroll/scroll";
import "./useRef.scss";
import { useRef } from "react";

const UseRef = () => {
  const ref = useRef(null);
  return (
    <div className={"scroll"} ref={ref}>
      <Scroll />
    </div>
  );
};

export default UseRef;
