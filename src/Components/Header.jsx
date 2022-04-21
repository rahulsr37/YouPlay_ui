import React, { useState, useContext } from "react";
import { Form, FormControl, Button, Dropdown } from "react-bootstrap";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const Header = (props) => {
  const [searchText, setSearchText] = useState("");
  const [isExpand, setIsExpand] = useState(false);

  const user = useContext(UserContext)
  console.log(user);

  const dropDownHandler = () => {
    setIsExpand(!isExpand);
    setTimeout(function(){
      setIsExpand(isExpand);
    }, 3000);
   
  };



  const handleLogout = async () => {
    await signOut(auth);
    window.location.reload();
  }

  return (
    <>
      <header>
        <h1>
          <Link to="/" className="text-decoration-none link-light">
            YouPlay
          </Link>
        </h1>
        <ul className="nav_links d-flex align-items-center">
          <li>
            <Link to="/movies">MOVIES</Link>
          </li>
          <li>
            <Link to="/shows">SHOWS</Link>
          </li>
          <li>
            <Link to="/anime">ANIME</Link>
          </li>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <Button
              variant="outline-info"
              onClick={() => props.onSearch(searchText)}
            >
              <i className="fas fa-search"></i>
            </Button>
          </Form>
          <div className="d-flex flex-column">
            <div className="d-flex gap-2 align-items-center">
            <AccountCircleIcon
            className="accountProfile"
            fontSize="large"
            onClick={dropDownHandler}
           />
           {user && <h6 className="mt-2" onClick={dropDownHandler}  style={{cursor:"pointer"}} >{user.displayName}</h6> } 
          
            </div>
          
          {isExpand && (
              <div className="dropdown_menu d-flex gap-1 px-3 flex-column">
                <Link to="/favourites" className="nav-link text-white">
                <h6>Favourites</h6>
                </Link>
                {
                  user ? <h6 onClick={handleLogout}>Logout</h6> : <Link to="/login" className="nav-link">
                  <h6>Login</h6>
                  </Link>
                }
              </div>

          )}
          </div>
        </ul>
      </header>
    </>
  );
};

export default Header;
