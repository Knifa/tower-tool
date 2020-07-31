import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faStream } from "@fortawesome/free-solid-svg-icons";

import { Block } from "../Block";

export const GCodeOutputBlock = (props: {
  onProcessClick: () => void;
  enabled: boolean;
}) => {
  return (
    <Block title="G-code Output" titleIcon={faFileDownload}>
      <div className="BlockContent__text">
        <p>
          <strong>
            Make sure to inspect the G-code before running the print!
          </strong>
          <br />
          <br />
          Any lines added or changed will end with{" "}
          <span className="InlineCode">; Tower Tool</span> so you can find them
          easily.
        </p>
        <button disabled={!props.enabled} onClick={props.onProcessClick}>
          <FontAwesomeIcon icon={faStream} fixedWidth /> Towerize!
        </button>
      </div>
    </Block>
  );
};
