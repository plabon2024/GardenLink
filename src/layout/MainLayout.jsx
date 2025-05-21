import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

import { Zoom } from "react-awesome-reveal";
const MainLayout = () => {
    return (
        <>
        <Zoom >
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </Zoom>
            
        </>
    );
};

export default MainLayout;