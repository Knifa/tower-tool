import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

import "./CopyCode.scss";

export default function (props: { children: string }) {
  const [copied, setCopied] = useState(false);
  const statusTextClasses = classNames({
    CopyCodeStatusText: true,
    "CopyCodeStatusText--visible": copied,
  });

  return (
    <code
      className="CopyCode"
      onClick={() => {
        navigator.clipboard.writeText(props.children);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2500);
      }}
    >
      <div className="CopyCodeStatus">
        <div className={statusTextClasses}> Copied!</div>
        <FontAwesomeIcon icon={faCopy} pull="right" />
      </div>
      {props.children}
    </code>
  );
}
