import React, {Fragment} from 'react';
import "../Assets/CSS/GalleryCSS.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Gallery from '../Components/Gallery';

function GalleryPage(props) {
    return (
        <Fragment>
            <Gallery/>
        </Fragment>
    );
}

export default GalleryPage;
