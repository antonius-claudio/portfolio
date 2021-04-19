import React from 'react';
import Style from './Experience.module.scss';

const Experience = (props) => {
  const [experience, setExperience] = React.useState([
    {
      company : 'Weekend Inc',
      date : 'Jul 2020 - Present',
      title : 'Front End Developer',
      jobDesks : [
        'Changed the design into a web page',
        'Created all the features go according to plan',
        'Deployed website to staging',
      ]
    },
    {
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
      company : 'PT. Gaia Persada',
      date : 'Jan 2017 - July 2017',
      title : 'Internship',
      jobDesks : [
        'Created a new website layout',
        "Made designs according to client's requirements"
      ]
    },
  ]);
  const [active, setActive] = React.useState(false);
  const [isShow, setIsShow] = React.useState(false);

  React.useEffect(() => {
    const { checkPage, location } = props;
    const { pathname } = location;
    checkPage(pathname);
  }, []);

  const open = (key) => {
    setActive(key);
    setIsShow(true);
  };

  const close = () => {
    setActive(false);
    setIsShow(false);
  }

  const card = (item, key) => (
    <div className={Style.card} onClick={() => { open(key) }}>
      <div className={Style.headline}>
        <div className={Style.company}>
          {item.company}
        </div>
        <div className={Style.date}>
          {item.date}
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

  return (
    <div className={Style.experience}>
      <div className={Style.wrapper}>
        <div className={Style.content}>
          <div className={Style.title}>Xperience</div>
          <div className={Style.box}>
            {!isShow ? view : detail()}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Experience;