import React, {Fragment} from 'react';
import TopBanner from "../Components/TopBanner";
import AboutSection from "../Components/AboutSection";
import Support from "../Components/Support";
import Sponsor from "../Components/Sponsor";
import Alumni1 from "../Components/Alumni1";
import AboutNcpc from "../Components/AboutNcpc";
function Home(props) {
    return (
        <Fragment>
            <TopBanner/>
            <AboutSection/>
            <AboutNcpc/>
            <Alumni1/>
            <Support/>
            <Sponsor/>
        </Fragment>
    );
}

export default Home;