import React, { useRef } from "react";
import "./TestShapes.scss";

const RotatingVideo = (props: { path: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video src={props.path} ref={videoRef} playsInline autoPlay muted loop />
  );
};

export const TestShapes: React.FunctionComponent = (props) => {
  return (
    <div className="TestShapeContainer">
      <a className="TestShape" href="retraction_tower.stl">
        <RotatingVideo path="retraction_tower.webm" />
        <p>Retraction</p>
      </a>
      <a className="TestShape" href="edge_tower.stl">
        <RotatingVideo path="edge_tower.webm" />
        <p>Edges</p>
      </a>
      <a className="TestShape" href="overhang_tower.stl">
        <RotatingVideo path="overhang_tower.webm" />
        <p>Overhangs</p>
      </a>
      <a className="TestShape" href="temperature_tower.stl">
        <RotatingVideo path="temperature_tower.webm" />
        <p>Temperature</p>
      </a>
    </div>
  );
};
