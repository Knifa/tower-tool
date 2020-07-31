import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./state";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStream } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Skyline } from "./Skyline";

ReactDOM.render(
  <React.StrictMode>
    <Skyline />

    <header>
      <h1>
        <FontAwesomeIcon icon={faStream} fixedWidth transform="down-1 grow-4" />{" "}
        Tower Tool
      </h1>
      <h2>
        <a href="https://github.com/">
          <FontAwesomeIcon
            icon={faGithub}
            fixedWidth
            transform="down-1 grow-4"
          />
        </a>{" "}
        <a href="https://github.com/">v1.0</a> by{" "}
        <a href="https://github.com/Knifa">@knifa</a>
      </h2>
    </header>

    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
