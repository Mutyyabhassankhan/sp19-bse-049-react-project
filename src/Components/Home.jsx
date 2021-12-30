import React from 'react';
// 

import Common from './Common';
import "../Styles/index.css";
import pic from "../Images/b2.png";

const Home = () => {
    return (
        <>
        <Common name='Capture the moment.' 
        imgsrc={pic} visit="/services" 
        content= 'We are a team of professional Photographers.'
        btname="Book Now"/>
        </>
    )
};

export default Home;

