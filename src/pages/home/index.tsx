import Layout from "../../container/layout/Layout";
import React from "react";
import UseState from "../../components/useHooks/useStates/useState";
import { useParams } from "react-router";
import UseRef from "../../components/useHooks/useref/useRef";

const Home = () => {
  return (
    <Layout>
      {/*2개의 input 상태관리*/}
      <UseState />
      {/**/}
      <UseRef />
    </Layout>
  );
};

export default Home;
