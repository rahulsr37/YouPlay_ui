import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import catalogueData from "../utilities/catalogue.json";
import AddIcon from "@mui/icons-material/Add";

const MoviePlayer = () => {
  const params = useParams();

  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const obj = catalogueData.find((o) => o.title === params.name);
    setMovieData(obj);
  }, []);

  if (!movieData) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center ">
        <div style={{ width: "100%", height: "70vh" }}>
          <iframe
            src={movieData.videosrc}
            allowFullScreen="allowfullscreen"
            width={window.innerWidth}
            height="500"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
      <div className="content_info">
        <div className="title_and_year">
          <h1>{movieData.title}</h1>
          <p className="text-primary year">{movieData.year}</p>
          <p className="text-secondary">{movieData.season}</p>
          <button className="blue_btn" style={{height: "40px", width: "120px"}}>Favourite</button>
        </div>
        <p>{movieData.plot}</p>
      </div>
    </>
  );
};

export default MoviePlayer;
