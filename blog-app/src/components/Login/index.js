import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  

  const navigate =useNavigate();
  const isLogedIn = Cookies.get('token');

  useEffect(() => {
    if (isLogedIn) {
      navigate("/");
    }
  }, [isLogedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mail:email, password:password }),
      });

      console.log(response)

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

        if (response.ok) {
          Swal.fire({
            title: "Good job!",
            text: "Login successful!",
            icon: "success",
          });
          Cookies.set('token', data.token, { expires: 1 / 24 });
          navigate('/', { replace: true });
         
        } else {
          Swal.fire({
            title: "Error!",
            text: `Login failed: ${data.msg}`,
            icon: "error",
            confirmButtonText: "Ok",
          });
        } 

    } catch (error) {
      setError(error.message);
      Swal.fire({
        title: "Error!",
        text: `Network error: ${error.message}`,
        icon: "error",
        confirmButtonText: "Ok",
      });
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='minHeight d-flex flex-column justify-content-center align-items-center'>
      <div className='col-11 col-md-8 col-lg-5 m-auto border row rounded-3 pt-2 registerBg'>
        <h3 className='text-center'>Login</h3>
        <form onSubmit={handleSubmit} className='row m-auto'>
          <input
            type='email'
            placeholder='Enter Mail Id'
            className='col-12 m-auto p-1 fs-5 fw-medium mb-2 rounded-3'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Enter Password'
            className='col-12 m-auto p-1 fs-5 fw-medium mb-2 rounded-3'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className='text-danger text-center'>{error}</p>}
          <div className='text-center'>
            <button
              type='submit'
              className='btn bg-white text-dark'
              disabled={loading}
            >
              {loading ? 'Logging In...' : 'Login Now'}
            </button>
          </div>
        </form>
        <p className='text-center mt-3'>
          If you don't have an account please go to <Link to='/Register'>Register</Link> page
        </p>
      </div>
    </div>
  );
};

export default Login;
