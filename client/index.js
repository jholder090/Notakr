import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components";

const container = document.getElementById("app")
const root = createRoot(container)

root.render(
  <Router>
    <Main />
  </Router>
);

// import { store } from "./store";
// store={store}

// import { Provider } from "react-redux";

