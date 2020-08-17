import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStream } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Header.scss";

export const Header = () => {
  const tag = process.env.REACT_APP_GIT_TAG;

  return (
    <header>
      <h1>
        <FontAwesomeIcon icon={faStream} fixedWidth transform="down-1 grow-4" />{" "}
        Tower Tool
      </h1>
      <h2>
        <a href="https://github.com/Knifa/tower-tool">
          <FontAwesomeIcon
            icon={faGithub}
            fixedWidth
            transform="down-1 grow-4"
          />
        </a>{" "}
        <a href={`https://github.com/Knifa/tower-tool/tree/${tag}`}>{tag}</a> by{" "}
        <a href="https://github.com/Knifa">@knifa</a>
      </h2>
    </header>
  );
};
