import React from 'react';

const Footer = () => {
  return (
    <footer
      className='box-shadow-small'
      style={{
        background: "linear-gradient(135deg, #000000, #0a0a0a, #141414, #1e1e1e, #282828, #323232, #3c3c3c, #464646, #505050, #595959)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='container-custom pt-12 pb-12'>
        <h2 className='text-2xl text-white text-center'>
          © 2023-2024 Asadbek Botirqulov. All Rights Reserved.
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
