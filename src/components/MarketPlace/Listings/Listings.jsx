import React from "react";
import ListingCard from "./ListingCard";
import "./Listings.css";

const sampleListings = [
  {
    id: 1,
    title: '8x10" framed rustic bathroom quote funny',
    price: "$7",
    location: "Goodlettsville, TN",
    image: "https://via.placeholder.com/200x200?text=Get+Naked",
  },
  {
    id: 2,
    title: "20x20 Bio Design Pool",
    price: "$72,000",
    location: "Franklin, TN",
    image: "https://via.placeholder.com/200x200?text=Pool",
  },
  {
    id: 3,
    title: "1988 Jeep",
    price: "$7,000",
    location: "Nashville, TN",
    image: "https://via.placeholder.com/200x200?text=Jeep",
  },
];

function Listings() {
  return (
    <div className="listings">
      <h2>Today's picks</h2>
      <div className="cards">
        {sampleListings.map((item) => (
          <ListingCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Listings;
