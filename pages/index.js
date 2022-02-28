import React from "react";
import Link from "next/link";
import Head from "next/head";
import Alert from "react-bootstrap/Alert";
import Navigation from "./navigation";
import { GetServerSideProps } from "next";
// import MyEditor from "./editor";
import Form from "react-bootstrap/Form";
import { useState } from "react";
// import Questions3 from "../components/question";

import axios from "axios";
import { FormControl, Button } from "react-bootstrap";

import InputGroup from "react-bootstrap/InputGroup";
function Home({ data }) {
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
        <meta
          name="google-site-verification"
          content="rqVH7Jc-L-NyyCYGf2LOEjRPFEUvi8iImncslSfxtac"
        />
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
          <div className="question11">
            {data.map((itm) => (
              <a key={itm._id} href={`https://www.wixten.com/query/` + itm._id}>
                <Alert className="question13">{itm.Name}</Alert>
              </a>
            ))}
          </div>
          {/* <div className="question11">
            {data.map((itm) => (
              <Link
                key={itm._id}
                href={{
                  pathname: "query/[itm]",
                }}
                as={`query/${encodeURIComponent(itm._id)}`}
              >
                <Alert className="question13">{itm.Name}</Alert>
              </Link>
            ))}
          </div> */}

          {/* <Questions3 data={data} /> */}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://ask-over.herokuapp.com/questapi`);
  const data = await res.json();
  // console.log(data);
  // Pass data to the page via props
  return { props: { data } };
}
export default Home;
