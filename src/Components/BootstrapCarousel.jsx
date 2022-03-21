import React from "react";
import { Carousel } from "react-bootstrap";

function BootstrapCarousel() {
  return (
    <>
      <div style={{ height: "75vh", overflow: "hidden" }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/carousel-img-1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/carousel-img-2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/carousel-img-3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default BootstrapCarousel;
