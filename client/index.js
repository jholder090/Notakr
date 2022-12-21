import React from "react";
import { createRoot } from "react-dom/client";
import { Main } from "./components";

const container = document.getElementById("app")
const root = createRoot(container)

root.render(
  <Main />
);

// import { store } from "./store";
// store={store}

// import { Provider } from "react-redux";
// import { BrowserRouter as Router } from "react-router-dom";
