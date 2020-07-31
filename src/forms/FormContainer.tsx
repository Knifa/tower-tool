import React, { FunctionComponent } from "react";

import "./FormContainer.scss";

export const FormContainer: FunctionComponent = (props) => {
  return <div className="FormContainer">{props.children}</div>;
};
