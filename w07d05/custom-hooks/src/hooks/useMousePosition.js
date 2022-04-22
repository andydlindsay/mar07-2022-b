import {useEffect, useState} from 'react';

const useMousePosition = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMousemove = (event) => {
      // event.clientX, event.clientY
      setCoords({
        x: event.clientX,
        y: event.clientY
      })
    };

    document.addEventListener('mousemove', handleMousemove);

    const cleanup = () => {
      document.removeEventListener('mousemove', handleMousemove);
    };

    return cleanup;
  }, []);

  return coords;
};

export default useMousePosition;
