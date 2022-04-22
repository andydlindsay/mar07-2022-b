import {useState, useEffect} from 'react';

const useLocationData = () => {
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      setCoords({
        lat: data.coords.latitude,
        lon: data.coords.longitude
      });
    });
  }, []);

  return coords;
};

export default useLocationData;
