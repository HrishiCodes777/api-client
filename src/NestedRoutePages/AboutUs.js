import React from 'react';
import ecom from '../images/ecom.jpg';
import { Outlet } from 'react-router';

function AboutUs() {
  return (
    <>
    <img src={ecom} style={{width:"100%",height:"200px"}}/>
    <h1>About Us</h1>
    <Outlet/>
    </>
  )
}

const History = () => {
    return <>
        <h1>About Sportz Interactive</h1>
        <p>We are Asia's first sports-focused data, technology and content solutions</p>
    </>
}

const OurServices = () => {
    return <>
    <h1>Our Services</h1>
    <p>We offer data analytics, digital marketing, and sports-focused content creation</p>
    </>
}
export {History, OurServices, AboutUs};
