import Layout from "../../container/layout/Layout";
import TwoInputs from "../../components/useHooks/useStates/twoInputs";
import { useParams } from "react-router";
import UseRef from "../../components/useHooks/useref/useRef";
import ObjDataAdd from "../../components/useHooks/useStates/objDataAdd";
import CodingTest from "../../components/codingTest";

const Home = (): JSX.Element => {
  const params: any = useParams();
  let component: JSX.Element;
  switch (params.url) {
    case "usestate":
      // 2개의 input 상태관리
      // 객체에 input 으로 text 데이터 입력 버튼
      component = (
        <div>
          <TwoInputs />
          <ObjDataAdd />
        </div>
      );
      break;
    case "useref":
      // Scroll Up, Down 버튼
      component = <UseRef />;
      break;
    default:
      component = (
        <div>
          <h1>안녕하세요 ?</h1>
          <h3>위 에 링크를 클릭해 주세요</h3>
        </div>
      );
      break;
  }

  return <Layout>{component}</Layout>;
};

export default Home;
