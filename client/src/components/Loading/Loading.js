import React from 'react';
import Lottie from 'react-lottie';
import loading from './18361-loading-paris.json';

const Loading = ({type}) => {
  let size = 100;
  if (type === 'small') size = 30
  else if (type === 'medium') size = 50

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (<Lottie options={defaultOptions} height={size} width={size} />);
};

export default Loading;