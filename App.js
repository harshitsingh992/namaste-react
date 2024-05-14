import React from "react"
import ReactDOM from "react-dom/client";

const heading=React.createElement("div",{id: 'parent'},[React.createElement("div",{id:"child1"},[React.createElement("h2",{},"i am first h2 "),React.createElement("h1",{id:"children"},"hii how are you")]),React.createElement("div",{id:"child2"},[React.createElement("h2",{},"i am first h2 "),React.createElement("h1",{id:"children"},"hii how are you")])]);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);