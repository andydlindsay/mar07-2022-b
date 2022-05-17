import {Link, Routes, Route} from 'react-router-dom';
import Product from './Product';

const Products = () => {
  return (
    <div>
      <h2>This is the Products component</h2>

      <nav>
        <Link to="1">Product #1</Link><br/>
        
        <Link to="/products/2">Product #2</Link><br/>
        <Link to="/products/3">Product #3</Link><br/>
      </nav>

      <Routes>
        <Route path=":id" element={<Product />} />
        <Route index element={<h2>Please select an item from the list above</h2>} />
      </Routes>
    </div>
  );
};

export default Products;
