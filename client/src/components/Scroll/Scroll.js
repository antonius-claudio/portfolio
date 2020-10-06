import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Scroll = () => {
  let [pageActive, setPageActive] = React.useState(0);
  const [startX, setStartX] = React.useState(0);
  const [startY, setStartY] = React.useState(0);
  const [endX, setEndX] = React.useState(0);
  const [endY, setEndY] = React.useState(0);
  const history = useHistory();
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    window.addEventListener("touchstart", handleStart, false);
    window.addEventListener("touchend", handleEnd, false);
    if (pathname === '/experience') setPageActive(1); // add pageactive here
    else if (pathname === '/project') setPageActive(2);

    return () => {
      window.removeEventListener('wheel');
      window.removeEventListener("touchstart");
      window.removeEventListener("touchend");
    }
  }, []);

  React.useEffect(() => {
    if (pageActive === 0) history.push('/'); // add page directory here
    else if (pageActive === 1) history.push('/experience');
    else if (pageActive === 2) history.push('/project');
  }, [pageActive]);

  React.useEffect(() => {
    if (startX !== 0 && startY !== 0 && endX !== 0 && endY !== 0)
      if (startY > endY && pageActive !== 2) {
        const diff = startY - endY;
        if (diff > 20)
          setPageActive(pageActive+=1);
      }
      else if (startY < endY && pageActive !== 0) {
        const diff = endY - startY;
        if (diff > 20)
          setPageActive(pageActive-=1);
      }
  }, [startX && startY && endX && endY]);

  const handleWheel = (e) => {
    const { deltaY } = e;
    if (deltaY < 0 && pageActive !== 0) setPageActive(pageActive-=1)
    if (deltaY > 0 && pageActive !== 2) setPageActive(pageActive+=1)
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