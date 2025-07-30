import React from "react";
import "./styles.css";

const ListingCard = ({ listing }) => {
  return (
    <div className="listing-card">
      <img src={listing.img} alt={listing.title} className="listing-image" />
      <h3 className="listing-price">{listing.price}</h3>
      <p className="listing-title">{listing.title}</p>
      <p className="lisLting-details">
        {listing.location} • {listing.miles}
      </p>
    </div>
  );
};

export default ListingCard;
