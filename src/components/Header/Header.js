import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider/StateProvider";
import { auth } from "../../Firebase/FirebaseConfig";
import AdminOnlyRoute from "../adminOnlyRoute/AdminOnlyRoute";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Menu stackable>
        <Menu.Menu position="left">
          <Menu.Item>
            <Link to="/" style={{ textDecoration: 'none' }} className="header__leftItem">
              <img
                className="header__logo"
                src="https://img.icons8.com/ios/100/000000/online-shop-favorite.png"
                alt="secondhand store logo"
              />
              <p className="header__companyName">APSV</p>
            </Link>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          {/* <AdminOnlyRoute> */}
          <Link to="/uploadImage" style={{ textDecoration: 'none' }}>
            <Menu.Item>
              <Icon name="upload" /> Add product
            </Menu.Item>
          </Link>
          {/* </AdminOnlyRoute> */}
          <Link to="/checkout" style={{ textDecoration: 'none' }}>
            <Menu.Item>
              <Icon name="shop" /> {basket?.length}
            </Menu.Item>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Menu.Item>
              {user ? (
                <div onClick={login}>
                  <Icon name="sign-out" />
                  Logout
                </div>
              ) : (
                <>
                  <Icon name="sign-in" />
                  Sign in
                </>
              )}
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>  
      <div className="product-types">
        <Link to="/mobiles"><button>Mobiles</button></Link>
        <Link to="/laptops" ><button>Laptops</button></Link>
        <Link to="/cameras" ><button>Cameras</button></Link>
        <Link to= "/shoes"><button>Shoes</button></Link>
        </div>    
    </div>

  );
}

export default Header;
