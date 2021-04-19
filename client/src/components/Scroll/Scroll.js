import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Scroll = ({ page, setPage }) => {
  const [startX, setStartX] = React.useState(0);
  const [startY, setStartY] = React.useState(0);
  const [endX, setEndX] = React.useState(0);
  const [endY, setEndY] = React.useState(0);
  const [wheel, setWheel] = React.useState(false);
  const history = useHistory();
  const { pathname } = useLocation();

  React.useEffect(() => {
    addEvent();
    checkPathName();
    return () => {
      removeEvent();
    }
  }, []);

  React.useEffect(() => {
    // if (page === false) checkPathName();
    console.log('update pathname', pathname)
    console.log('update page', page)
    if (!page) console.log('noOne', page)
  }, [pathname]);
  
  React.useEffect(() => {
    if (page === 0) history.push('/'); // add page directory here
    else if (page === 1) history.push('/experience');
    else if (page === 2) history.push('/project');
  }, [page]);

  React.useEffect(() => {
    if (startX !== 0 && startY !== 0 && endX !== 0 && endY !== 0)
      if (startY > endY && page !== 2) {
        const diff = startY - endY;
        if (diff > 20)
          setPage(page+=1);
      }
      else if (startY < endY && page !== 0) {
        const diff = endY - startY;
        if (diff > 20)
          setPage(page-=1);
      }
  }, [startX && startY && endX && endY]);

  React.useEffect(() => {
    if (wheel === 'down' && page !== 2) {
      setPage(page+=1);
    } else if (wheel === 'up' && page !== 0) {
      setPage(page-=1);
    }
  }, [wheel]);

  const addEvent = () => {
    window.addEventListener('wheel', handleWheel);
    window.addEventListener("touchstart", handleStart, false);
    window.addEventListener("touchend", handleEnd, false);
  };

  const removeEvent = () => {
    window.removeEventListener('wheel');
    window.removeEventListener("touchstart");
    window.removeEventListener("touchend");
  };
  
  const checkPathName = () => {
    console.log('checkpathname page', page)
    console.log('checkpathname pathname', pathname)
    console.log('checkpathname setPgae', setPage)
    if (pathname === '/') setPage(Number(0));
    else if (pathname === '/experience') setPage(Number(1)); // add pageactive here
    else if (pathname === '/project') setPage(Number(2));
    console.log('after ', page)
  }

  const handleWheel = (e) => {
    console.log('page wheel ', page)
    const { deltaY } = e;
    const act = deltaY < 0 ? 'up' : 'down';
    console.log('page act ', act)
    setWheel(act);
    // if (!page) {
    //   if (deltaY < 0) {
    //     if (pathname && pathname === '/') setPage(0)
    //     else if (pathname && pathname === '/experience') setPage(0);
    //     else if (pathname && pathname === '/project') setPage(1);
    //   }
    //   if (deltaY > 0) {
    //     if (pathname && pathname === '/') setPage(1)
    //     else if (pathname && pathname === '/experience') setPage(2);
    //     else if (pathname && pathname === '/project') setPage(2);
    //   }
    // }
    
    // if (page > 0 && page <= 2 && deltaY < 0) setPage(page-=1);
    // else if (page >= 0 && page < 2 && deltaY > 0) setPage(page+=1);
  };

  const handleStart = (e) => {
    const { pageX, pageY } = e.touches[0];
    setStartX(pageX);
    setStartY(pageY);
  };

  const handleEnd = (e) => {
    const { pageX, pageY } = e.changedTouches[0];
    setEndX(pageX);
    setEndY(pageY);
  };

  return '';
};

export default Scroll;