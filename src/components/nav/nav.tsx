import "./nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={"navBody"}>
      <Link to="/">Home</Link>
      <Link to="/usestate">useState</Link>
      <Link to="/useref">useRef</Link>
    </div>
  );
};

export default Nav;
