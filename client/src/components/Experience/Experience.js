import React, { useEffect, useState } from 'react';
import Typing from '../Typing/Typing';
import Style from './Experience.module.scss';

export const Experience = (props) => {
  const [experience, setExperience] = React.useState([
    {
      id: '1',
      company : 'Weekend Inc',
      date : 'Jul 2020 - Present',
      title : 'Front End Developer',
      jobDesks : [
        'Changed the design into a web page',
        'Created all the features go according to design',
        'Deployed website to staging and prepared to deploy production',
        'Handle bugs',
      ]
    },
    {
      id: '2',
      company : 'Pelangi Kasih School',
      date : 'Jan 2019 - Jan 2020',
      title : 'Web Programmer',
      jobDesks : [
        'Designed a new look for the website using Photoshop',
        'Created a new page as requested using WordPress',
        'Inputted the latest news and events',
        'Created google analytics report every month'
      ]
    },
    {
      id: '3',
      company : 'PT. Gaia Persada',
      date : 'Jan 2017 - July 2017',
      title : 'Internship',
      jobDesks : [
        'Created a new website layout',
        "Made designs according to client's requirements"
      ]
    },
  ]);
  const [active, setActive] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [mount, setMount] = useState(false);
  const [isTitleShow, setIsTitleShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMount(true);
    }, 500);
  }, []);

  useEffect(() => {
    if (mount === true)
      setTimeout(() => {
        setIsTitleShow(true);
      }, 750);
  }, [mount]);

  const open = (key) => {
    setActive(key);
    setIsShow(true);
  };

  const close = () => {
    setActive(false);
    setIsShow(false);
  };

  const card = (item, index) => (
    <div className={Style.card} onClick={() => { open(index) }}>
    {/* <div className={Style.card} > */}
      <div className={Style.headline}>
        <div className={Style.company}>
          {item.company}
        </div>
        <div className={Style.title}>
          {item.title}
        </div>
      </div>
    </div>
  );

  const view = 
    experience.map((item, index) => card(item, index))
  ;

  const detail = () => {
    const selected = experience[active];
    return (
      <div className={Style.detail}>
        <div className={Style.contentDetail}>
          <div className={Style.position}>{selected.title}</div>
          <div className={Style.jobDesks}>
            <ul>
              {selected.jobDesks.map((task) => (
                <li>{task}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={Style.button} onClick={close}>
          back
        </div>
      </div>
    );
  };

  const styleBox = isTitleShow ? '' : Style.outBox;

  return (
    <section className={Style.experience}>
      <div className={Style.wrapper}>

        <div className={Style.header}>
          <Typing text="X-perience" mount={mount} />
        </div>
        
        <div className={`${Style.boxExp} ${styleBox}`}>
          { view }
        </div>
      </div>
    </section>
  )
};