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
          <img src="/wixten.png" alt="wixten" hidden />
        </Link>

        <ListGroup>
          {Item.map((itm, k) => {
            return (
              <>
                <Link
                  key={itm._id}
                  href={{
                    pathname: "/[id]/[slug2]",
                    query: {
                      slug2: itm.Name.replace(
                        /[^a-zA-Z0-9 - _ . ~]/g,
                        ""
                      ).replace(/ /g, "-"),
                      id: itm._id,
                    },
                  }}
                  // as={`/${encodeURIComponent(
                  //   itm.Name.replace(/[^a-zA-Z0-9 - _ . ~]/g, "").replace(
                  //     / /g,
                  //     "-"
                  //   )
                  // )}`}
                >
                  <ListGroup.Item>{itm.Name}</ListGroup.Item>
                </Link>
              </>
            );
          })}
        </ListGroup>
      </div>
    </>
  );
}
