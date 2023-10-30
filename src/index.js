//Create a react app from scratch.
import React from "react";
import ReactDom from "react-dom";

//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
ReactDom.render(
  <div>
    <h1>Hello World!</h1>
    <ul>
      <li> 1 </li>
      <li> 2 </li>
      <li> 3 </li>
    </ul>
  </div>,
  document.getElementById("root")
);
