import useLocationData from "../hooks/useLocationData";

const Location = () => {
  const coords = useLocationData();

  const showUserLocation = () => {
    alert(`lat: ${coords.lat}, lon: ${coords.lon}`);
  };

  return (
    <div>
      <h2>Location data!</h2>
      <button onClick={showUserLocation}>Show where I am!</button>
    </div>
  );
};

export default Location;
