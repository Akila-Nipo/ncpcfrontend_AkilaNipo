import React, { Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';

function Gallery() {
    const images = require.context('../Assets/Images/GallerySlider', true);
    const imageUrls = images.keys().map((image) => images(image));

    const settings = {
        dots: true,
        infinite: true, // Set infinite to true for continuous scrolling
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set the autoplay speed in milliseconds (adjust as needed)
    };

    return (
        <Fragment>
            <Container fluid="true" className="mb-5 p-3">
                <Row className="mx-0 px-0">
                    <Slider {...settings}>
                        {imageUrls.map((img, idx) => (
                            <div key={idx}>
                                <img src={img} alt="" />
                            </div>
                        ))}
                    </Slider>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Gallery;
