import React from "react";
import Head from "next/head";
import Navigation from "./navigation";
import Question from "./question";
import axios from "axios";
import { FormControl, Button } from "react-bootstrap";

import InputGroup from "react-bootstrap/InputGroup";
export default function home() {
  return (
    <>
      <Navigation />
      <div>
        <div className="container search-box">
          {/* {console.log("this is the cheker", this.props)} */}
          {/* {this.props.hide ? ( */}
          <InputGroup
            className="mb-3"
            // onChange={this.question}
            // value={this.state.ask}
          >
            <FormControl
              placeholder="ask anything?"
              aria-label="ask anything?"
              // aria-label="ask anything?"
              aria-describedby="basic-addon2"
            />
            <Button
              type="submit"
              // disabled={!this.state.ask}
              // onClick={this.clickQuestion}
              variant="outline-secondary"
              id="button-addon2"
            >
              ask?
            </Button>
          </InputGroup>
          {/* ) : null} */}
          <Question />
        </div>
      </div>
    </>
  );
}
