import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "react-bootstrap/Navbar";

import React from "react";
import ReactDOM from "react-dom";
// import { firebase } from "./firebase";
// import Query from "./Query";
// import { LinkContainer } from "react-router-bootstrap";

// import Signin from "./signin";
// import Sites from "./Sites";
import home from "./home";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import Link from "next/link";

export default function index() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Link href="/">
            <Navbar.Brand to="/">
              <h1 className="logomain">wixten</h1>
            </Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            {/* <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer> */}
            {/* <LinkContainer to="/Query">
                <Nav.Link>Query</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Service">
                <Nav.Link>Service</Nav.Link>
              </LinkContainer> */}
          </Nav>
          {/* {console.log(SignIn)} */}
          {/* {SignIn ? (
            <>
              <img src={userNAme.photoURL} alt="Avatar" className="avatar" />
              <button
                onClick={signout}
                type="button"
                class="btn btn-primary btn-sm"
              >
                {userNAme.displayName}
              </button>
            </>
          ) : (
            <Signin className="googlebutton" />
          )} */}
        </Container>
      </Navbar>
      {/* <Switch>
        <Route path="/Sitemapst">
          <Sites />
        </Route>
        <Route path="/Service">
          <Service />
        </Route>
        <Route
          exact
          path="/Query/:catId"
          render={(props) => <Query {...props} sign={userNAme} hide={SignIn} />}
        />
        {/* <Route path="/sign"></Route> */}
      {/* <Route path="/Home">
          <Home sign={userNAme} hide={SignIn} />
        </Route>
        <Route path="/">
          <Home sign={userNAme} hide={SignIn} />
        </Route>
      </Switch> */}{" "}
    </div>
  );
}
