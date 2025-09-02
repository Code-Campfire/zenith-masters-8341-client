import Sidebar from "../Sidebar.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateListingComponent = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newListing = { title, price };
    console.log("New Listing:", newListing);
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
            placeholder="Item Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit">Post Listing</button>
        </form>
      </div>
    </div>
  );
};

export default CreateListingComponent;
