import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <header>
        <h1>
          <Link to="/" className="text-decoration-none link-light">YouPlay</Link>
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
          <AccountCircleIcon className="accountProfile" />
        </ul>
      </header>
    </>
  );
};

export default Header;
