import React from "react";
import Home from '../Home/Home';
import Navs from '../Navs/Nav';
import Header from "../Header/Header";
import Section from "../Section/Section";
import Services from "../Services/Services";
import Testimonials from "../Slider/Testimonials";
import Parallax from "../Parallax/Parallax";
import Footer from "../Footer/Footer";
import "../fontawesome-free-6.4.0-web/css/all.min.css";
import "./App.css";

export default function App () {
    return (
    <>
        <Navs />
        <Header />
        <Home />
        <Section />
        <Services />
        <Testimonials />
        <Parallax />
        <Footer />
    </>
    )
}