import { useRouter } from "next/router";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import Answershooks from "./Answerhooks";
import React from "react";
import Nav from "../navigation";
import { FormControl, Button } from "react-bootstrap";
import RealtedPost from "./RealtedPost";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Query() {
  const [Item, setItem] = useState([]);
  const [Questions, setQuestions] = useState();
  const router = useRouter();
  const baseurl = "https://wixten.com/query/";
  var id = router.query.itmid;
  var gotid = id;
  console.log(id);
  function question(e) {
    setQuestions(e.target.value);
    // this.setState({ ask: e.target.value });
  }

  function clickQuestion() {
    axios
      .post("https://ask-over.herokuapp.com/answerpost", {
        Answers: Questions,

        correctcount: 0,
        wrongcount: 0,

        question_id: gotid,
      })
      .then(() => {
        window.location.reload();
      });
  }
  useEffect(() => {
    if (id != null) {
      axios
        .get("https://ask-over.herokuapp.com/questone/" + gotid)
        .then((result) => {
          console.log(result);
          // document.title = result.data[0].Name;
          setItem(result.data);
        });
    }
    //  console.table(this.state.items);
  }, [id]);
  return (
    <>
      <Nav />
      <>
        {/* {Item} */}
        {Item.map((itm, k) => {
          return (
            <>
              <Head>
                <title> {itm.Name} - wixten </title>
                <link rel="shortcut icon" href="/wixten.png" />
                <meta
                  name="viewport"
                  content="initial-scale=1.0, width=device-width"
                />
                <meta name="description" content={itm.Summary} />
                <meta charSet="utf-8" />
                <meta property="og:title" content={itm.Name} />
                <meta property="og:description" content={itm.Summary} />
                <meta property="og:image" content="images/wixten.png" />
                <meta property="og:locale" key="og:locale" content="en_US" />
                <meta property="og:type" key="og:type" content="website" />
                <meta
                  property="og:url"
                  key="og:url"
                  content={`${baseurl}${itm._id}`}
                />
              </Head>
              {/* <Helmet>
                <meta charSet="utf-8" />
                <title> wixten - {itm.Name} </title>
                <meta name="description" content={itm.Name} />
                <meta property="og:type" content="article" />
                <link rel="canonical" href={itm.Name} />
              </Helmet> */}
              <div key={itm._id} className="Question-one">
                <h1> {itm.Name}</h1>
                <h2>{itm.Summary}</h2>
              </div>
              <div className="username">
                <span className="username2">--{itm.username}</span>
              </div>
            </>
          );
        })}
      </>
      {/* {this.props.hide ? ( */}
      <div className="container search-box">
        <InputGroup
          className="mb-3"
          onChange={question}
          // value={this.state.ask}
        >
          <FormControl
            placeholder="answer this question"
            aria-label="answer this question"
            // aria-label="answer this question"
            aria-describedby="basic-addon2"
          />
          <Button
            type="submit"
            // disabled={!this.state.ask}
            onClick={clickQuestion}
            variant="outline-secondary"
            id="button-addon2"
          >
            Answer
          </Button>
        </InputGroup>
      </div>
      <div className="multi-container">
        <Answershooks id={gotid} />
        <RealtedPost />
      </div>
    </>
  );
}
