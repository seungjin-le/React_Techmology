import "./nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={"navBody"}>
      <Link to="/">Home</Link>
      <Link to="/useState">useState</Link>
      <Link to="/useRef">useRef</Link>
      <Link to="/">test</Link>
    </div>
  );
};

export default Nav;
