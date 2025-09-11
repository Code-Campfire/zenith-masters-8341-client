import Sidebar from "../Sidebar.jsx";
import { useListings } from "../CreateListingComponent/ListingsContext.jsx";

const SellingComponent = () => {
  const { listings } = useListings();

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <h2>Stuff you're selling</h2>
        {listings.length === 0 ? (
          <p>You haven't posted anything yet.</p>
        ) : (
          <ul>
            {listings.map((listing) => (
              <li key={listing.id}>
                <strong>{listing.title}</strong> - ${listing.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SellingComponent;
