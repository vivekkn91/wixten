import React from "react";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

export default function question() {
  const [Items, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://ask-over.herokuapp.com/questapi").then((result) => {
      // console.table(result.data);
      setItems(result.data);
    });
  }, []);

  

  return (
    <div>
      <Alert className="question13">ddsd</Alert>
      {/* {console.log(Items)} */}
      {Items.map((itm)  => ( 
          <Link href={{
    pathname: `/query/[id]`,
    query: {
      id: itm._id,
    },
  }}>
        <Alert className="question13">{itm.Name}</Alert>
        </Link>
      ))}
    </div>
  );
}
