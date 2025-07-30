import React from "react";
import { useLocation } from "react-router-dom";

const ListingDetails = () => {
  const location = useLocation();
  const { listing } = location.state;

  return (
    <div className="details-container">
      <h1>{listing.title}</h1>
      <img src={listing.img} alt={listing.title} />
      <p>
        <strong>Price:</strong> {listing.price}
      </p>
      <p>
        <strong>Location:</strong> {listing.location}
      </p>
      <p>
        <strong>Miles:</strong> {listing.miles}
      </p>
      <p>
        <strong>Description:</strong> This is a detailed description of the
        listing.
      </p>
      <p>
        <strong>Seller:</strong> John Doe
      </p>
    </div>
  );
};

export default ListingDetails;
