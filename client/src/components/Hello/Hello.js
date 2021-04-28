import React, { useState, useEffect } from "react";
import Typing from "../Typing/Typing";
import Style from "./Hello.module.scss";

export const Hello = (props) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMount(true);
    }, 500);
  }, []);

  return <section className={Style.hello}>
    <div className={Style.wrapperHello}>
      {mount && <div className={Style.wrapperProfile}>
        <div className={Style.imageProfile}>
          <img src="/diocartoon.png" alt="claudio" />
          {/* <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" /> */}
        </div>
      </div>}
      <div className={Style.iam}>
        <Typing text="My name is Claudio Antonius" mount={mount} delay={1500} />
      </div>
      <div className={Style.call}>
        <Typing text="You can call me, Dio" mount={mount} delay={3525} />
      </div>
      <div className={Style.work}>
        <Typing text="now I work as" mount={mount} delay={5025} />
      </div>
      <div className={Style.job}>
        <Typing text="a frontend developer" mount={mount} delay={6000} />
      </div>
    </div>
  </section>;
};