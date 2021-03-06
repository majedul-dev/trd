import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/index";
import Chat from "./pages/Chat";
import EditProfile from "./pages/EditProfile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import EditProduct from "./pages/EditProduct";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import UsersProfile from "./pages/UsersProfile";
import { loadUser } from "./actions/authActions";
import store from "./store";
import Offers from "./pages/Offers";
import OfferDetail from "./pages/OfferDetail";
import MyOfferDetails from "./pages/MyOfferDetails";

import { useDispatch } from "react-redux";
import { getAllProducts } from "./actions/productActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search/:keyword" exact component={Home} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route path="/profile/:myId" exact component={Profile} />
          <Route path="/edit-profile" exact component={EditProfile} />
          <Route
            path="/profile/user/:profileId"
            exact
            component={UsersProfile}
          />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/post" exact component={Post} />
          <Route
            path="/edit/product/:productId"
            exact
            component={EditProduct}
          />
          <Route path="/chat" exact component={Chat} />
          <Route path="/offers" exact component={Offers} />
          <Route path="/offer/my/:id" exact component={MyOfferDetails} />
          <Route path="/offer/:id" exact component={OfferDetail} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
