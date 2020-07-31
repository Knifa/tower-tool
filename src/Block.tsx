import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./Block.scss";

export const Block: FunctionComponent<{
  title: string;
  titleIcon: IconProp;
}> = (props) => {
  return (
    <div className="Block">
      <div className="BlockHeader">
        <div className="BlockHeader__title">
          <FontAwesomeIcon icon={props.titleIcon} fixedWidth /> {props.title}
        </div>
      </div>

      <div className="BlockContent">{props.children}</div>
    </div>
  );
};
