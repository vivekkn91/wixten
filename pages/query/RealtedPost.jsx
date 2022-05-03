import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Link from "next/link";

import axios from "axios";
import { useEffect, useState } from "react";
export default function RealtedPost() {
  const [Item, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://askover.wixten.com/recent10").then((result) => {
      // console.table(result.data);
      setItems(result.data);
    });
  }, []);
  return (
    <>
      <div className="related-div">
        <Link
          href={{
            pathname: "/",
            // query: { id: itm.id },
          }}
        >
          <h3>Related questions </h3>
        </Link>
        <Link
          href={{
            pathname: "/",
            // query: { id: itm.id },
          }}
        >
          <img src="/wixten.png" alt="wixten" />
        </Link>

        <ListGroup>
          {Item.map((itm, k) => {
            return (
              <>
                <a
                  href={"https://wixten.com/query/" + itm._id}
                  title={itm.Name}
                >
                  <ListGroup.Item>{itm.Name}</ListGroup.Item>
                </a>
              </>
            );
          })}
        </ListGroup>
      </div>
    </>
  );
}
