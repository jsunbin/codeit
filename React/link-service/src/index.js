import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import Main from "./Main";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Main />);
