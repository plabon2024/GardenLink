import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { Zoom } from "react-awesome-reveal";
import { AuthContext } from "../context/AuthProvider";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  return (
    <>
      <Header></Header>
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
      )}
    </>
  );
};

export default MainLayout;
