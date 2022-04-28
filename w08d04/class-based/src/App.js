import './App.css';
import ClassBased, {whatever} from './components/ClassBased';
import Lifecycle from './components/Lifecycle';
import {useState} from 'react';

const App = () => {
  const [showLifecycle, setShowLifecycle] = useState(false);

  return (
    <div className="App">
      <h2>Class-based Component Demo</h2>
      <button
        onClick={() => setShowLifecycle(!showLifecycle)}
      >Change view</button>

      { !showLifecycle && <ClassBased heading="welcome to the site!" /> }
      {/* <h2>{whatever}</h2> */}

      { showLifecycle && <Lifecycle /> }
    </div>
  );
};

export default App;
