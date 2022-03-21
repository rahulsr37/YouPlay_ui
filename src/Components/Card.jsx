import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={`/movies/${props.data.title}`}>
      <div className="catalogue-card m-3">
        <img src={`images/catalogue-imgs/${props.data.imgsrc}`} />
      </div>
    </Link>
  );
};

export default Card;
