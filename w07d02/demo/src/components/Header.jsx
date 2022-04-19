// import React from 'react';

const Header = (props) => {
  console.log(props);

  // const message = props.message;
  // const something = props.something;

  const {message, something} = props;

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default Header; // ESM EcmaScript Modules
