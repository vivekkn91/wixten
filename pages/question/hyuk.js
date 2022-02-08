// import React from "react";
// import Alert from "react-bootstrap/Alert";
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
// import Link from "next/link";
// import Head from "next/head";
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library

//   const res = await fetch(`https://ask-over.herokuapp.com/questapi`);
//   console.log("check");
//   console.log("dada");
//   const posts = await res.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   };
// }
// function Question({ posts }) {
//   const [Items, setItems] = useState([]);
//   //   useEffect(() => {
//   //     axios.get("https://ask-over.herokuapp.com/questapi").then((result) => {
//   //       // console.table(result.data);
//   //       setItems(result.data);
//   //     });
//   //   }, []);

//   return (
//     <div className="question11">
//       {/* {console.log(posts)} */}
//       {Items.map((itm) => (
//         <a href={"https://wixten.com/query/" + itm._id} key={itm._id}>
//           {/* <Link
//             key={itm._id}
//             href={{
//               pathname: "query/[itm]",
//               // query: { id: itm.id },
//             }}
//             as={`query/${encodeURIComponent(itm._id)}`}
//           > */}
//           {/* <Link href={`/query/${encodeURIComponent(itm._id)}`}> */}

//           <Alert className="question13">{itm.Name}</Alert>
//           {/* </Link> */}
//         </a>
//       ))}
//     </div>
//   );
// }

// export default Question;
