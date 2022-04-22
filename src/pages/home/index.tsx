import Layout from "../../container/layout/Layout";
import React from "react";
import UseState from "../../components/useHooks/useStates/useState";

const Home = ({ props }: any) => {
  console.log(props);
  return (
    <Layout>
      {/*2개의 input 상태관리*/}
      <UseState />
    </Layout>
  );
};

export default Home;
