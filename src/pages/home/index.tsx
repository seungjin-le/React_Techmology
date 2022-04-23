import Layout from "../../container/layout/Layout";
import UseState from "../../components/useHooks/useStates/useState";
import { useParams } from "react-router";
import UseRef from "../../components/useHooks/useref/useRef";

const Home = (): JSX.Element => {
  const params: any = useParams();
  let component: JSX.Element;
  switch (params.url) {
    case "usestate":
      // 2개의 input 상태관리
      component = <UseState />;
      break;
    case "useref":
      // Scroll Up, Down 버튼
      component = <UseRef />;
      break;
    default:
      component = <h3>위 에 링크를 클릭해 주세요</h3>;
      break;
  }

  return (
    <Layout>
      <h2>안녕하세요</h2>
      {component}
    </Layout>
  );
};

export default Home;
