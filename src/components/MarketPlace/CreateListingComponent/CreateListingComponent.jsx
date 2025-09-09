import Sidebar from "../Sidebar.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useListings } from "../CreateListingComponent/ListingsContext.jsx";

const CreateListingComponent = () => {
  const navigate = useNavigate();
  const { addListing } = useListings();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newListing = { id: Date.now(), title, price };
    addListing(newListing);

    navigate("/selling");
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <h2>Create New Listing</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Short Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Price"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">Post Listing</button>
        </form>
      </div>
    </div>
  );
};

export default CreateListingComponent;
