import React from 'react'
import { useRef,useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import './Login.css'
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBF2WkvhNqTlW7Qlyell5PLwLO7xBoG_4c",
  authDomain: "my-app-47991.firebaseapp.com",
  projectId: "my-app-47991",
  storageBucket: "my-app-47991.appspot.com",
  messagingSenderId: "555318480182",
  appId: "1:555318480182:web:3fe5b31f4ed789e3cd7797",
  measurementId: "G-299G6E9N7P"
};
firebase.initializeApp(firebaseConfig);

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Dummy email and password for demonstration
    const dummyEmail = 'user@example.com';
    const dummyPassword = 'password';

    if (email === dummyEmail && password === dummyPassword) {
      // Redirect to home page
      window.location.href = '/home';
    } else {
      setError('Invalid email or password');
    }
  };
  return (
    <div className='register'>
        <div className='form-head'><h1>Register Here</h1></div>
        <div className='button-group'>
        <button className='button1'><img src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt='Google img'/>Register with Google</button>
        <button className='button2'> <img src='https://upload.wikimedia.org/wikipedia/commons/7/74/Apple_logo_dark_grey.svg'/>Register with Apple</button>
      </div>
      <form>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className='input-group'>
            <label>Name</label>
            <input type='text' placeholder='Full Name'/>
      </div>
      <div className='input-group'>
            <label>Email</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
        </div>
        <div className='input-group'>
            <label>Password</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
        </div>
        <button  onClick={handleRegister} className='bg-black' type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
