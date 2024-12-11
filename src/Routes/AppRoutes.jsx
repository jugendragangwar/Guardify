import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Home from '../Pages/Home'

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default AppRoutes;
