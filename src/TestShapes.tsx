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
      <a
        className="TestShape"
        href={`${process.env.PUBLIC_URL}/retraction_tower.stl`}
      >
        <RotatingVideo
          path={`${process.env.PUBLIC_URL}/retraction_tower.webm`}
        />
        <p>Retraction</p>
      </a>
      <a
        className="TestShape"
        href={`${process.env.PUBLIC_URL}/edge_tower.stl`}
      >
        <RotatingVideo path={`${process.env.PUBLIC_URL}/edge_tower.webm`} />
        <p>Edges</p>
      </a>
      <a
        className="TestShape"
        href={`${process.env.PUBLIC_URL}/overhang_tower.stl`}
      >
        <RotatingVideo path={`${process.env.PUBLIC_URL}/overhang_tower.webm`} />
        <p>Overhangs</p>
      </a>
      <a
        className="TestShape"
        href={`${process.env.PUBLIC_URL}/temperature_tower.stl`}
      >
        <RotatingVideo
          path={`${process.env.PUBLIC_URL}/temperature_tower.webm`}
        />
        <p>Temperature</p>
      </a>
    </div>
  );
};
