import React, { useEffect, useState } from "react";
import Typing from "../Typing/Typing";
import Style from "./Opening.module.scss";

export const Opening = (props) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMount(true);
    }, 500);
  }, []);

  const typical = async (val) => {
    const lengthVal = val.length;
    console.log('lengthVal', lengthVal)
    for (let i = 0; i < lengthVal; i++) {
      console.log(val[i])
      await timeout(100);
    }
  };

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return <div className={Style.opening}>
    <div className={Style.wrapperOpening} id="p_1">
      <div className={Style.hi}>
        <Typing text="Hi there," mount={mount} delay={500} />
      </div>
      <div className={Style.welcome}>
        <Typing text="WELCOME TO MY PAGE" mount={mount} delay={1175} />
      </div>
    </div>
  </div>;
};