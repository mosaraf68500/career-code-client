import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shaared/Navbar';
import Footer from '../shaared/Footer';


const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;