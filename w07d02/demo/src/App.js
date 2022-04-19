import './App.css';
import {useState} from 'react';
// import Header from './components/Header';
// import Button from './components/Button';
import Counter from './components/Counter';

const App = () => {
  const [showCounter, setShowCounter] = useState(false);

  const obj = {
    whatever: 2,
    message: 'does this work???'
  };

  const myArr = [
    <h3>First</h3>,
    <p>Second</p>,
    <a>Third</a>
  ];

  return (
    <div className="App">
      <h2>W7D2 lecture</h2>

      {/* <Counter /> */}

      <button onClick={() => setShowCounter(!showCounter)}>Show/hide counter component</button>

      { showCounter && <Counter /> }

      { !showCounter && <h2>Click the button</h2> }

      {/* { myArr } */}

      {/* <Header 
        // whatever={obj.whatever}
        // message={obj.message}
        { ...obj }
      /> */}

      {/* <Header 
        whatever="7" 
        message="Welcome to our site!!" 
      /> 

      <Header message="About us" /> */}
    </div>
  );
};

export default App;
