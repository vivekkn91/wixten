import { useRouter } from "next/router";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import Answershooks from "./Answerhooks";
import React from "react";
import { FormControl, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Query() {
  const [Item, setItem] = useState([]);
  const router = useRouter();
  var id = router.query.itmid;
  var gotid = id;
  console.log(id);

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
              {/* <Helmet>
                <meta charSet="utf-8" />
                <title> wixten - {itm.Name} </title>
                <meta name="description" content={itm.Name} />
                <meta property="og:type" content="article" />
                <link rel="canonical" href={itm.Name} />
              </Helmet> */}
              <div key={itm._id} className="Question-one">
                <h2> {itm.Name}</h2>
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
          //  onChange={this.question}
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
            // onClick={this.clickQuestion}
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
