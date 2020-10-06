import React from 'react';
import Style from './Project.module.scss';

const Project = (props) => {

  React.useEffect(() => {
    const { checkPage, location } = props;
    const { pathname } = location;
    checkPage(pathname);
  }, []);

  return (
    <div className={Style.project}>
      <div className={Style.wrapper}>
        <div className={Style.content}>
          <div className={Style.title}>Project</div>
        </div>
      </div>
    </div>
  )
};

export default Project;