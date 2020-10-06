import React from 'react';
import Style from './SocialMedia.module.scss';

const SocialMedia = () => {
  const items = [
    {
      logo: '/email.gif',
      link: 'mailto:antonius.claudio@gmail.com'
    },
    {
      logo: '/whatsapp.gif',
      link: 'https://wa.me/6287787772067'
    },
    {
      logo: '/github.gif',
      link: 'https://github.com/antonius-claudio'
    },
    {
      logo: '/linkedin.gif',
      link: 'https://www.linkedin.com/in/claudio-antonius/'
    },
  ];
  
  const [show, setIsShow] = React.useState(false);

  const buttonMenu = () => (
    <div className={Style.item} onClick={() => setIsShow(!show)}>
      <img src='/contact.gif' alt='contact' />
    </div>
  );

  const menuList = (item, key) => {
    const { logo, link } = item;
    return (
      <a href={link} className={Style.item} key={key}>
        <img src={logo} alt={logo}/>
      </a>
    );
  };

  return (
    <div className={Style.socialMedia}>
      <div className={Style.wrapper}>
        {show && items.map((item, key) => menuList(item, key))}
        {buttonMenu()}
      </div>
    </div>
  );
};

export default SocialMedia;