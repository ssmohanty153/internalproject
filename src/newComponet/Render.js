import React, { useEffect, useState } from "react";

export default function Render() {
  const [addButtonValue, setAddButtonValue] = useState("comments");

  useEffect(() => {
    console.log("use effect is first time rendering");

   
  }, []);
  console.log("function  is running");
  return (
    <div>
      {console.log("return is running")}
      <button onClick={() => setAddButtonValue("comments")}>comments</button>
      <button onClick={() => setAddButtonValue("posts")}>posts</button>
      <button onClick={() => setAddButtonValue("photos")}>photos</button>

      <h1>{addButtonValue}</h1>
    </div>
  );
}
