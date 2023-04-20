import React, { useState } from 'react';
import Login from '../Components/log-uti/Login';
import Register from '../Components/log-uti/Register';
import './Loginpage.css';

const LoginPage = () => {
  const [pager, changePager] = useState(true);

  return (
    <div className='full-body'>
      <div className='side-text'>
        <h1>Board.</h1>
      </div>
      <div className='side-form'>
        {pager ? (
          <Login changePager={changePager} />
        ) : (
          <Register />
        )}
      </div>
    </div>
  );
};

export default LoginPage;