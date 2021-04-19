import React from 'react';
import Style from './Home.module.scss';

const Home = (props) => {
  const photo = '/diocartoon.png';
  
  React.useEffect(() => {
    const { checkPage, location } = props;
    const { pathname } = location;
    checkPage(pathname);
  }, []);

  const photoProfile =
    <div className={Style.photo}>
      <img alt='Claudio Antonius' src={photo}/>
    </div>
  ;

  const textProfile =
    <div className={Style.text}>
      <div className={Style.highlight}>Hi,</div>
      <div className={Style.name}>i'am <span className={Style.highlight}>Claudio Antonius</span></div>
      <p>a Full Stack Developer, who can help you to create a website or application in accordance with your imagination.</p>
    </div>
  ;

  return (
    <div className={Style.home}>
      <div className={Style.wrapper}>
        <div className={Style.content}>
          {/* {photoProfile} */}
          {/* {textProfile} */}
        </div>
      </div>
    </div>
  );
};

export default Home;