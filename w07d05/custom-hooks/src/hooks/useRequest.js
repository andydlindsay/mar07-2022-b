import { useState, useEffect } from 'react';
import axios from 'axios';

const useRequest = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: false,
    errorMsg: ''
  });

  useEffect(() => {
    setState({ ...state, loading: true });
    axios.get(url)
      .then(result => {
        setTimeout(() => {
          setState({
            data: result.data,
            loading: false,
            errorMsg: ''
          });
        }, 2000);   
      })
      .catch(() => {
        setState((prev) => ({
          ...prev,
          errorMsg: 'Error loading data',
          loading: false
        }));
      });
  }, [url]);

  return state;
};

export default useRequest;
