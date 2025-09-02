import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./styles/App.css";
import AppLayout from "./components/AppLayout";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import SavedPosts from "./components/SavedPosts";
import { AuthorizedRoute } from "./components/auth/AuthorizedRoute";
import Register from "./components/Register";
import FriendsList from "./components/friends-list/FriendsList";
import AccountPage from "./components/AccountPage";
// import { ListingsProvider } from "./components/Marketplace/CreateListingComponent/ListingsContext.jsx";

import CreateListingComponent from "./components/Marketplace/CreateListingComponent/CreateListingComponent.jsx";
import Marketplace from "./components/Marketplace/MarketPlace.jsx";
import ListingDetails from "./components/Marketplace/ListingDetails.jsx";
import SellingComponent from "./components/Marketplace/SellingComponent/SellingComponent.jsx";

export default function App() {
  return (
    // <ListingsProvider>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<AppLayout />}>
        <Route
          index
          element={
            <AuthorizedRoute>
              <Home />
            </AuthorizedRoute>
          }
        />

        {/* Selling page */}
        <Route
          path="selling"
          element={
            <AuthorizedRoute>
              <SellingComponent />
            </AuthorizedRoute>
          }
        />

        <Route path="/create-listing" element={<CreateListingComponent />} />

        <Route
          path="settings"
          element={
            <AuthorizedRoute>
              <Settings />
            </AuthorizedRoute>
          }
        />
        <Route
          path="account"
          element={
            <AuthorizedRoute>
              <AccountPage />
            </AuthorizedRoute>
          }
        >
          <Route
            path="friends"
            element={
              <AuthorizedRoute>
                <FriendsList />
              </AuthorizedRoute>
            }
          />
          <Route
            path="about"
            element={
              <AuthorizedRoute>
                <NotFound />
              </AuthorizedRoute>
            }
          />
          <Route
            path="posts"
            element={
              <AuthorizedRoute>
                <NotFound />
              </AuthorizedRoute>
            }
          />
        </Route>
        <Route
          path="account"
          element={
            <AuthorizedRoute>
              <AccountPage />
            </AuthorizedRoute>
          }
        />
        {/* MARKETPLACE BELOW */}

        <Route path="marketplace">
          <Route
            index
            element={
              <AuthorizedRoute>
                <Marketplace />
              </AuthorizedRoute>
            }
          />
        </Route>

        <Route path="/details/:id" element={<ListingDetails />} />

        {/* MARKETPLACE ABOVE */}

        <Route path="posts">
          <Route
            index
            element={
              <AuthorizedRoute>
                <div>Posts Go Here</div>
              </AuthorizedRoute>
            }
          />
          <Route
            path="saved"
            element={
              <AuthorizedRoute>
                <SavedPosts />
              </AuthorizedRoute>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <AuthorizedRoute>
              <NotFound />
            </AuthorizedRoute>
          }
        />
      </Route>
    </Routes>
    // </ListingsProvider>
  );
}
