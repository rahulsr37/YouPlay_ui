import React, { useState } from "react";
import { Form, FormControl, Button, Dropdown } from "react-bootstrap";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [searchText, setSearchText] = useState("");
  const [isExpand, setIsExpand] = useState(false);

  const dropDownHandler = () => {
    setIsExpand(!isExpand);
  };

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
            <Link to="/login">
          <AccountCircleIcon
            className="accountProfile"
            fontSize="large"
            onClick={dropDownHandler}
          />
            </Link>
          {isExpand && (
              <div className="dropdown_menu d-flex gap-1 px-3 flex-column">
                <h6>My Account</h6>
                <h6>Favourites</h6>
                <h6>Login</h6>
              </div>

          )}
          </div>
        </ul>
      </header>
    </>
  );
};

export default Header;
