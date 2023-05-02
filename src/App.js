import React, { useEffect } from "react";
import "./App.css";

//component
import Header from "./components/Header/Header";
//router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//container
import Home from "./container/Home/Home";
import Login from "./container/Login/Login";
import Checkout from "./container/Checkout/Checkout";
import Footer from "./container/Footer/Footer";
import { auth } from "./Firebase/FirebaseConfig";
import { useStateValue } from "./StateProvider/StateProvider";
import UploadImage from "./container/UploadImage/UploadImage";
import ProductDetails from "./components/Product/ProductDetails/ProductDetails";
import Contact from "./components/ContactUs/Contact";
import Shoes from "./components/Product/Shoes/Shoes";
import Cameras from "./components/Product/Cameras/Cameras";
import Laptops from "./components/Product/Laptops/Laptops";
import Mobiles from "./components/Product/Mobiles/Mobiles";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user login in .
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        //user log out
        dispatch({ type: "SET_USER", user: null });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  console.log( user);
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/uploadImage" component={UploadImage}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/checkout" component={Checkout}></Route>          
          <Route path="/contact" component={Contact}></Route>
          <Route path="/product-details/:id" component={ProductDetails}></Route>
          <Route path="/shoes" component={Shoes}></Route>
          <Route path="/mobiles" component={Mobiles}></Route>
          <Route path="/laptops" component={Laptops}></Route>
          <Route path="/cameras" component={Cameras}></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
