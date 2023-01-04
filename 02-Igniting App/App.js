import React from "react";
import ReactDOM from "react-dom/client";

// DOM Manipulation using JavaScript
const heading = document.createElement("h1");
heading.innerHTML = "Namaste React Using JavaScript";
const root = document.getElementById("root");
root.appendChild(heading);

// DOM Manipulation using ReactDOM
const heading1 = React.createElement(
  "h1",
  { id: "title", key: "h1" },
  "Heading1"
);

const heading2 = React.createElement("h2", { key: "h2" }, "Heading2");
const container = React.createElement("div", {}, [heading1, heading2]);
const reactroot = ReactDOM.createRoot(document.getElementById("reactroot"));
reactroot.render(container);
