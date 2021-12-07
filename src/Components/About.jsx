import React from 'react'
import pic from "../Images/b2.png";
import Common from './Common';
const About = () => {
    return (
        <>
        <Common name='About Us' 
        imgsrc={pic} visit="/contact" 
        content='Pas E Pardah Studios was established in 2018 and till date we have hundreds of satisfied clients around the globes.
         We have worked with renowned brands and launched a number of articles. We have a team of photographers, videographers
        and editors, who work according to customer demand.'
        btname="Contact Now"/>
        </>
    );
};

export default About;