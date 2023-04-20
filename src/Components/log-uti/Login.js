import React from 'react'
import { useRef,useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';

//Firbase 
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

const Login = ({changePager}) => {
  const userRef =useRef();
  const errRef =useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate=useNavigate()

  const handleLoginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // Handle successful login
        window.location.href = '/dash';
      })
      .catch((error) => {
        // Handle login error
        console.error(error);
      });
  }
  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy email and password for demonstration
    const dummyEmail = 'user@example.com';
    const dummyPassword = 'password';

    if (email === dummyEmail && password === dummyPassword) {
      // Redirect to home page
      window.location.href = '/dash';
    } else {
      setError('Invalid email or password');
    }
  };
  
  const [errMsg,setErrMsg]=useState('');
  const [success,setSuccess]=useState(false);

  
  return (
    <div>
    <div className='login-form'>
      <div className='form-head'>
        <h1>Sign In</h1>
        <p>Sign in to your account</p>
      </div>
      <div className='button-group'>
      <button onClick={handleLoginWithGoogle} className="button1">
            <img src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt='Google img' />
            <span>Sign in with Google</span>
          </button>
          <button className="button2">
            <img src='https://upload.wikimedia.org/wikipedia/commons/7/74/Apple_logo_dark_grey.svg' alt='apple' />
            <span>Sign in with Apple</span>
          </button>
      </div>
      {error && <p className='text-[7px] text-center' style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleLogin}>
        <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input id='email' ref={userRef} autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} type='email'  placeholder='Email' required/>
        </div>
        <div className='input-group'>
            <label htmlFor='password'>Password</label>
            <input id='password'  ref={userRef} value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' required/>
        </div>
        <div className='for-button'>
        <button><a href='/forgot'>Forgot Password?</a></button>
        </div>
          <button onClick={handleLogin} className='bg-black' type='submit'> Sign In</button>
      </form>
      <div className='reg'>      
        <button>Don't have an account? <span onClick={() => changePager(false)}>Register here</span></button>
      </div>
    </div>
    </div>
  )
}

export default Login
