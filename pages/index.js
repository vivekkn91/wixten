import React from "react";
import Head from "next/head";
import Navigation from "./navigation";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Questions3 from "./questions";

import axios from "axios";
import { FormControl, Button } from "react-bootstrap";

import InputGroup from "react-bootstrap/InputGroup";
export default function Home() {
  const [Questions, setQuestions] = useState();
  const [deatils1, setdeatils] = useState();

  function clickQuestion() {
    axios
      .post("https://ask-over.herokuapp.com/questionpost", {
        Name: Questions,

        Summary: deatils1,

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
  function deatils(e) {
    setdeatils(e.target.value);
    // this.setState({ ask: e.target.value });
  }

  return (
    <>
      <Head>
        <title>wixten </title>
        <link rel="shortcut icon" href="/wixten.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="have all ur doubts cleared here at wixten . At wixten ask any thing you want and anyone in the world can see your questin and will be able to answer it "
        />
      </Head>
      <Navigation />
      <div>
        <div className="container search-box">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                onChange={question}
                placeholder="ask anything?"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>question</Form.Label>
              <Form.Control onChange={deatils} as="textarea" rows={3} />
            </Form.Group>
          </Form>
          {/* <Form>
            <InputGroup
              className="mb-3"
              // onChange={this.question}

              // value={ask}
              // value={this.state.ask}
            >
              <FormControl
                placeholder="ask anything?"
                aria-label="ask anything?"
                // aria-label="ask anything?"
                aria-describedby="basic-addon2"
              />
              <FormControl as="textarea" rows={3} />
            </InputGroup>
          </Form> */}
          <Button
            type="submit"
            disabled={!deatils1 || !Questions}
            onClick={clickQuestion}
            variant="outline-secondary"
            id="button-addon2"
          >
            ask?
          </Button>
          {/* ) : null} */}
          <Questions3 />
        </div>
      </div>
    </>
  );
}
