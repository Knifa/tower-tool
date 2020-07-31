import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faFileUpload } from "@fortawesome/free-solid-svg-icons";

import { Block } from "../Block";

import "./GCodeInputBlock.scss";

export const GCodeInputBlock = (props: { onChange: (file: File) => void }) => {
  const [fileName, setFileName] = useState("No file selected.");
  const fileRef = useRef<HTMLInputElement>(null);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];
    setFileName(file.name);

    props.onChange(file);
  }

  return (
    <Block title="G-code Input" titleIcon={faFileUpload}>
      <div className="GCodeInputBlock">
        <input
          type="file"
          accept=".gcode"
          onChange={onFileChange}
          ref={fileRef}
        />
        <div className="GCodeInputBlock__fileName">{fileName}</div>

        <button
          onClick={() => {
            fileRef.current?.click();
          }}
        >
          <FontAwesomeIcon icon={faUpload} fixedWidth /> Select File
        </button>
      </div>
    </Block>
  );
};
