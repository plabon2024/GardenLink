import React from "react";
import Banner from "../components/Banner";
import ActiveGardeners from "../components/ActiveGardeners";
import TrendingTips from "../components/TrendingTips";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <ActiveGardeners></ActiveGardeners>
      <TrendingTips></TrendingTips>
    </>
  );
};

export default Home;
