import {BrowserRouter as Router, Link, Route, Routes, Navigate} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h2>React Router Demo</h2>

      <Router>
        <nav>
          <Link to="/">Home</Link><br/>
          <Link to="/about">About</Link><br/>
          <Link to="/products">Products</Link><br/>
        </nav>

        <Routes>
          {/* <Route path="*" element={<h2>Page not found</h2>} /> */}
          <Route path="*" element={<Navigate to="/about" />} />

          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/hidden" element={<h2>You found the secret page!!</h2>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
