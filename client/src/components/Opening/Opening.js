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

  return <section className={Style.opening}>
    <div className={Style.wrapperOpening}>
      <div className={Style.hi}>
        <img src="/logo-white-64.png" className={Style.logo} />
        <Typing text="Hi there," mount={mount} delay={500} />
      </div>
      <div className={Style.welcome}>
        <Typing text="WELCOME TO MY PAGE" mount={mount} delay={1175} />
      </div>
    </div>
  </section>;
};