import React from "react";
import Style from "./Opening.module.scss";

export const Opening = (props) => {

  return <div className={Style.opening}>
    <div className={Style.wrapperOpening} id="p_1">
      <div className={Style.hi}>
        Hi there,
      </div>
      <div className={Style.welcome}>
        WELCOME TO MY PAGE
      </div>
    </div>
  </div>;
};