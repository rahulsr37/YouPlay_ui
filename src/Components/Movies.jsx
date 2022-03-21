import React from 'react'
import { Carousel } from "react-bootstrap";
import Card from './Card';

const Movies = (props) => {
  return (
    <>
    <div style={{ height: "75vh", overflow: "hidden" }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/movie_carousel/1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/movie_carousel/2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/movie_carousel/3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>


    <div className="mixed-catalogue">
        <h1>MOVIES</h1>
      </div>
      <div className="mt-5 container justify-content-center d-flex flex-wrap content_card">
        {props.moviesData.map((data, index) => {
          return (
            <Card data={data} key={index} />
          );
        })}
      </div>


    </>

  )
}

export default Movies