import React from "react";
import "./Skyline.scss";

export const Skyline: React.FunctionComponent = (props) => {
  return (
    <div className="Skyline">
      <div className="Skyline__cloud Skyline__cloud--a" />
      <div className="Skyline__cloud Skyline__cloud--b" />

      <div className="Skyline__back" />
      <div className="Skyline__front" />
    </div>
  );
};
