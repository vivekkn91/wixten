import React from "react";
import Head from "next/head";
import Navigation from "./navigation";
import { useState } from "react";
import Question from "./question";
import axios from "axios";
import { FormControl, Button } from "react-bootstrap";

import InputGroup from "react-bootstrap/InputGroup";
export default function Home() {
  const [Questions, setQuestions] = useState();

  function clickQuestion() {
    axios
      .post("https://ask-over.herokuapp.com/questionpost", {
        Name: Questions,
        // username: this.props.sign.displayName,
        // useremail: this.props.sign.email,
      })
      .then(() => {
        window.location.reload();
      });
  }
  function question(e) {
    setQuestions(e.target.value);
    // this.setState({ ask: e.target.value });
  }
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
            onChange={question}
            // value={ask}
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
              onClick={clickQuestion}
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
