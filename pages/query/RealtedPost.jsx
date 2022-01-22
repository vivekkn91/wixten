import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
export default function RealtedPost() {
  const [Item, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://ask-over.herokuapp.com/recent10").then((result) => {
      // console.table(result.data);
      setItems(result.data);
    });
  }, []);
  return (
    <div className="related-div">
      <Link
        href={{
          pathname: "/",
          // query: { id: itm.id },
        }}
      >
        <h2>Related questions </h2>
      </Link>

      <ListGroup>
        {Item.map((itm, k) => {
          return (
            <>
              {/* <a href=`https://wixten.com/query/` + {itm.id} > */}

              <ListGroup.Item>{itm.Name}</ListGroup.Item>
              {/* </a> */}
            </>
          );
        })}
      </ListGroup>
    </div>
  );
}