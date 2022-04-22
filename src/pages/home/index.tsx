import Layout from "../../container/layout/Layout";
import React from "react";
import UseState from "../../components/useHooks/useStates/useState";
import { useParams } from "react-router";
import UseRef from "../../components/useHooks/useref/useRef";

const Home = () => {
  const params: any = useParams();

  return (
    <Layout>
      <h2>url 뒤에 '/아무거나 써보세요'</h2>
      <h2>{params?.text}</h2>
      <hr />
      {/* 2개의 input 상태관리 */}
      <h1>useState</h1>
      <UseState />
      <hr />
      <h1>useRef</h1>
      {/* Scroll Up, Down 버튼 */}
      <UseRef />
    </Layout>
  );
};

export default Home;
