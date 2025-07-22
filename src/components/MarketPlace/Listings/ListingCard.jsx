import React from "react";
import "./ListingCard.css";

function ListingCard({ title, price, location, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="info">
        <p className="price">{price}</p>
        <p className="title">{title}</p>
        <p className="location">{location}</p>
      </div>
    </div>
  );
}

export default ListingCard;
