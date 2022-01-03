import React from "react";
import { useRouter } from "next/router";
export default function qury(props) {
  const router = useRouter();
  const id = router.query;

  console.log(id);
  return <div>dsd</div>;
}
