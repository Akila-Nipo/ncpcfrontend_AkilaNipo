import React, {Fragment} from 'react';
import "../Assets/CSS/About.css";
import AboutSection from "../Components/AboutSection";
import About from "../OthersComponents/About";

function AboutPage(props) {
    return (
        <Fragment>
            <About/>
            <AboutSection/>
        </Fragment>
    );
}

export default AboutPage;