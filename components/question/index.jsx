import React from "react";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
function Question3({ props }) {
  console.log(props);
  const [Items, setItems] = useState([]);
  // useEffect(() => {
  //   axios.get("https://ask-over.herokuapp.com/questapi").then((result) => {
  //     // console.table(result.data);
  //     setItems(result.data);
  //   });
  // }, []);

  return (
    <div className="question11">
      {/* {data.map((itm) => (
        <Link
          key={itm._id}
          href={{
            pathname: "query/[itm]",
          }}
          as={`query/${encodeURIComponent(itm._id)}`}
        >
          <Alert className="question13">{itm.Name}</Alert>
        </Link>
      ))} */}
    </div>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://ask-over.herokuapp.com/questapi`);
//   const data = await res.json();
//   // console.log(data);
//   // Pass data to the page via props
//   return { props: { data } };
// }
export default Question3;
