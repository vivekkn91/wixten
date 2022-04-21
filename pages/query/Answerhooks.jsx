import React from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import { fetchHandler } from "./fetchhandler";
import { FormControl, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Answershooks({ answerPosts }) {
  // const [posts, setPosts] = useState([]);

  console.log(answerPosts);

  const [increment, setincrement] = useState(0);
  // const [reloader, setreloder] = useState(props.reloadAnswer);
  //const [decrement, setdecrement] = useState(0);
  // const params = useParams();
  // console.log(props.id);
  // var gotid = params;
  // gotid = gotid.catId;

  // console.log(props.reloadAnswer);
  // // const Answer = ({ reloadAnswer }) => {

  ///////////////////////////////////
  // useEffect(() => {
  //   if (props.id != null) {
  //     axios
  //       .get("https://askover.wixten.com/answersapi/" + props.id)
  //       .then((result) => {
  //         console.table(result.data);
  //         var somevariable = result;

  //         setPosts((data) => {
  //           return [...data, somevariable];
  //         });

  //         setPosts(result.data);
  //       });
  //   }
  // }, [props.id]);

  /////////////////////////
  // }, [increment]);
  // };

  // function decrementCounter(props) {
  //   console.log("thsis", props);
  //   axios
  //     .post("https://ask-over.herokuapp.com/decrementer", {
  //       //Answers: props,
  //       Answer_id: props._id,
  //       wrongcount: props.wrongcount,
  //     })
  //     .then(() => {
  //       setincrement(increment + 1);
  //     })
  //     .catch((error) => {
  //       console.log("handlesubmit error for blog ", error);
  //     });
  //   // setincrement(increment + 1);
  // }
  // function incrementCounter(props) {
  //   console.log("thsis", props);
  //   axios
  //     .post("https://ask-over.herokuapp.com/increment", {
  //       //Answers: props,
  //       Answer_id: props._id,
  //       correctcount: props.correctcount,
  //     })
  //     .then((res) => {
  //       setincrement(increment + 1);
  //       // setincrement([...increment,res.data])
  //       // window.location.reload();
  //     })
  //     .catch((error) => {
  //       console.log("handlesubmit error for blog ", error);
  //     });
  //   //setincrement(increment + 1);
  // }

  return (
    <div className="answerhook">
      {/* {console.log(posts)} */}
      {answerPosts.map((personData, index) => {
        return (
          <Card key={index} className="cardmobile">
            <Card.Body>
              <p className="answersize">{personData.Answers} </p>
            </Card.Body>
            <div className="buttontwo">
              <Button
                onClick={() => incrementCounter(personData)}
                className="correct"
                variant="primary"
              >
                Correct {personData.correctcount}
              </Button>
              <Button
                onClick={() => decrementCounter(personData)}
                //onClick={decrementCounter}
                className="wrong"
                variant="primary"
              >
                Wrong {personData.wrongcount}
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
export async function getServerSideProps(ctx) {
  console.log(ctx);
  // Call an external API endpoint to get posts.
  // const router = useRouter();
  var id1 = ctx.query.id;
  // You can use any data fetching library
  console.log(ctx.query.itmid);

  const res = await fetch("https://askover.wixten.com/answersapi/" + id1);
  console.log("check");

  console.log(res);
  console.log("dada");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
export default Answershooks;
