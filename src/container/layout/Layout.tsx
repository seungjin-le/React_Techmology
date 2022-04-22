import "./layout.scss";
import Nav from "../../components/nav/nav";

type Children = {
  children?: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Children) => {
  return (
    <div className={"layoutBody"}>
      <Nav />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
