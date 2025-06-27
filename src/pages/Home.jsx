import React from "react";
import Banner from "../components/Banner";
import ActiveGardeners from "../components/ActiveGardeners";
import TrendingTips from "../components/TrendingTips";
import Featured from "../components/Featured";
import Faq from "../components/Faq";
import SeasonalTip from "../components/SeasonalTip";
import FeaturedGardeners from "../components/FeaturedGardeners";
import Newsletter from "../components/Newsletter";

const Home = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Banner></Banner>
      <ActiveGardeners></ActiveGardeners>
      <TrendingTips></TrendingTips>{" "}
      <div className="space-y-16 px-4 md:px-10 py-10 container mx-auto">
        <SeasonalTip></SeasonalTip>
        <FeaturedGardeners></FeaturedGardeners>
      </div>
      <Featured></Featured>
      <Faq></Faq>
      <Newsletter></Newsletter>
    </>
  );
};

export default Home;
