import React from "react";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Question() {
  const [Items, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://ask-over.herokuapp.com/questapi").then((result) => {
      // console.table(result.data);
      setItems(result.data);
    });
  }, []);

  return (
    <div>
      {/* {console.log(Items)} */}
      {Items.reverse().map((itm, k) => (
        <a href={"https://wixten.com/query/" + itm._id}>
          {/* <Link
            key={itm._id}
            href={{
              pathname: "query/[itm]",
              // query: { id: itm.id },
            }}
            as={`query/${encodeURIComponent(itm._id)}`}
          > */}
          {/* <Link href={`/query/${encodeURIComponent(itm._id)}`}> */}

          <Alert className="question13">{itm.Name}</Alert>
          {/* </Link> */}
        </a>
      ))}
    </div>
  );
}
