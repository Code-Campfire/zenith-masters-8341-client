import Sidebar from "../Sidebar.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useListings } from "../CreateListingComponent/ListingsContext.jsx";
import "./CreateListingComponent.css";

const CreateListingComponent = () => {
  const navigate = useNavigate();
  const { addListing } = useListings();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newListing = { id: Date.now(), title, description, price };
    addListing(newListing);

    navigate("/selling");
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <h2>Create New Listing</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Short Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button type="submit">Post Listing</button>
        </form>
      </div>
    </div>
  );
};

export default CreateListingComponent;
