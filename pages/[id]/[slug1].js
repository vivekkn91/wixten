import { useRouter } from "next/router";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import Answershooks from "../query/Answerhooks";
import React from "react";

import Nav from "../navigation";
import { FormControl, Button } from "react-bootstrap";
import RealtedPost from "../query/RealtedPost";
import { useEffect, useState } from "react";
import Head from "next/head";

function Query({ posts, answerPosts }) {
  const [Item, setItem] = useState([]);
  const [Questions, setQuestions] = useState();
  const router = useRouter();
  const baseurl = "http://localhost:3001/";

  const { qst } = router.query;
  var id = router.query;
  var gotid = qst;
  // console.log(posts[0]._id);
  function question(e) {
    setQuestions(e.target.value);
  }

  function clickQuestion() {
    axios
      .post("https://askover.wixten.com/answerpost", {
        Answers: Questions,

        correctcount: 0,
        wrongcount: 0,

        question_id: posts[0]._id,
      })
      .then(() => {
        window.location.reload();
      });
  }

  return (
    <>
      <Nav />
      <>
        {posts.map((itm, k) => {
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
                <meta
                  name="keywords"
                  content="wixten, ott release, ott release date,aot season 4 part 2,MCU,MARVEL,marvel,doctor strange,spiderman,avatar 2, avatar 2 trailer , ott release"
                ></meta>
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

              <div key={itm._id} className="Question-one">
                <h2> {itm.Name}</h2>
                {itm.htmlsummery ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: itm.htmlsummery }}
                  ></div>
                ) : (
                  <p>{itm.Summary}</p>
                )}
              </div>
              <div className="username">
                <span className="username2">--{itm.username}</span>
              </div>
            </>
          );
        })}
      </>

      <div className="container search-box">
        <InputGroup className="mb-3" onChange={question}>
          <FormControl
            placeholder="answer this question"
            aria-label="answer this question"
            aria-describedby="basic-addon2"
          />
          <Button
            type="submit"
            onClick={clickQuestion}
            variant="outline-secondary"
            id="button-addon2"
          >
            Answer
          </Button>
        </InputGroup>
      </div>
      <div className="multi-container">
        <Answershooks answerPosts={answerPosts} />
        <RealtedPost />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  var id1 = context.query.id;

  // console.log(context.query.id);
  const queryRequest = fetch("https://askover.wixten.com/questone/" + id1).then(
    async (res) => await res.json()
  );
  const answerRequest = fetch(
    "https://askover.wixten.com/answersapi/" + id1
  ).then(async (res) => await res.json());

  const responses = await Promise.all([queryRequest, answerRequest]);
  const [posts, answerPosts] = await Promise.all(responses);
  // console.log("check");
  // console.log("dada");

  return {
    props: {
      id1,
      posts,
      answerPosts,
    },
  };
}
export default Query;
