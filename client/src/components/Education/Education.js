import React, { useEffect, useState } from 'react';
import Typing from '../Typing/Typing';
import Style from './Education.module.scss';
import Modal from '../Modal/Modal';

export const Education = (props) => {

  const myEducation = [
    {
      id: 0,
      academy: 'Hacktiv8 Indonesia',
      title: 'Full Stack Javascript Dev',
      period: 'Jan 2020 – Jun 2020',
      desc: 'in this bootcamp I learned how to create a full stack application, using nodejs, postgresql, mongoDB, reactjs, react native'
    },
    {
      id: 1,
      academy: 'Universitas Kristen Krida Wacana',
      title: 'Bachelor of Informatics',
      period: 'Aug 2014 – Aug 2018',
      desc: 'in this university i studied about computer engineering and got my bachelor degree',
    }
  ];

  const [mount, setMount] = useState(false);
  const [active, setActive] = useState(0);
  const [isTitleShow, setIsTitleShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMount(true);
    }, 500);
  }, []);

  useEffect(() => {
    if (mount === true)
      setTimeout(() => {
        setIsTitleShow(true);
      }, 1825);
  }, [mount]);

  const clickCard = (id) => {
    setActive(id)
    setOpenModal(true);
  };

  const cardsView = () => {
    return myEducation.map(edu => 
      <div className={Style.cardEdu} onClick={() => clickCard(edu.id)}>
        <div className={Style.txtBtn}>
          { edu.academy }
        </div>
      </div>
    );
  };

  const styleBox = isTitleShow ? '' : Style.outBox;

  return <section className={ Style.education } >
    <div className={ Style.wrapperEducation }>
      {/* <div className={ Style.divider}>
        <img src="/waves.svg" alt="div1" />
      </div> */}
      <div className={Style.header}>
        <Typing text="My Educational Background" mount={mount} />
      </div>
      
      <div className={`${Style.boxEdu} ${styleBox}`}>
        { cardsView() }
      </div>

      <div className={Style.rails}>
        <div className={Style.animate}>
          <div className={Style.motor}>
            <img src='/motorcycle.png' />
          </div>
          <div className={Style.front}>
            <img src='/fronttire.png' />
          </div>
          <div className={Style.back}>
            <img src='/backtire.png' />
          </div>
        </div>
      </div>
    </div>
    <Modal 
    isOpen={openModal}
    setIsOpen={setOpenModal}
    >
      <div className={Style.detail}>
        <div className={Style.detail_academy}>
          { myEducation[active].academy } 
        </div>
        <div className={Style.detail_period}>
          { myEducation[active].period }
        </div>
        <hr></hr>
        <div className={Style.detail_title}>
          { myEducation[active].title }
        </div>
        <div className={Style.detail_desc}>
          { myEducation[active].desc }
        </div>
      </div>
    </Modal>
  </section>;
};