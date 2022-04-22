import Scroll from "./refScroll/scroll";
import "./useRef.scss";

const UseRef = () => {
  return (
    <div className={"scroll"}>
      <h3>Scroll</h3>
      <Scroll />
      <button>Down</button>
      <button>Up</button>
    </div>
  );
};

export default UseRef;
