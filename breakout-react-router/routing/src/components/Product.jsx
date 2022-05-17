import {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const Product = () => {
  const params = useParams();
  console.log(params);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/about');
    }, 3000);
  }, []);

  // useEffect(() => {
  //   axios.get(`/api/products/${params.id}`)
  //     .then((response) => {
  //       setProduct(response.data);
  //     });
  // }, [params.id])

  return (
    <div>
      <h2>This is the Product #{params.id}</h2>
    </div>
  );
};

export default Product;
