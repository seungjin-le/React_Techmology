import "./nav.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const Nav = () => {
  return (
    <div className={"navBody"}>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Nav;
