import React from "react";
import Banner from "../components/Banner";
import ActiveGardeners from "../components/ActiveGardeners";
import TrendingTips from "../components/TrendingTips";
import Featured from "../components/Featured";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <ActiveGardeners></ActiveGardeners>
      <TrendingTips></TrendingTips>
      <Faq></Faq>
      <Featured></Featured>
    </>
  );
};

export default Home;
