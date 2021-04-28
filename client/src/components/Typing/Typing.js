import { useState, useEffect } from 'react';

export default ({ text, delay, mount }) => {
  const [result, setResult] = useState('');

  useEffect(() => {
    if (mount) {
      setTimeout(() => {
        typical(text);
      }, delay);
    }
  }, [mount]);

  const typical = async (val) => {
    const lengthVal = val.length;
    let temp = '';
    for (let i = 0; i < lengthVal; i++) {
      temp = temp + val[i];
      await setResult(temp);
      await timeout(75);
    }
  };

  const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  return result;
};