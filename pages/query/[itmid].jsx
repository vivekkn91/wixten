import { useRouter } from "next/router";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import Answershooks from "./Answerhooks";
import React from "react";
import { FormControl, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Head from "next/head";
export default function Query() {
  const [Item, setItem] = useState([]);
  const [Questions, setQuestions] = useState();
  const router = useRouter();
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
      <>
        {/* {Item} */}
        {Item.map((itm, k) => {
          return (
            <>
              <Head>
                <title>wixten - {itm.Name} </title>
                <meta
                  name="viewport"
                  content="initial-scale=1.0, width=device-width"
                />
                <meta name="description" content={itm.Name} />
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
      {/* ) : null} */}
      <Answershooks id={gotid} />
    </>
  );
}
