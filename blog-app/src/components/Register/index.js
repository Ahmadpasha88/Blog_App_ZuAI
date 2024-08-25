import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import Swal from "sweetalert2";
import Cookies from 'js-cookie';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  

  const navigate =useNavigate();

  const isLogedIn = Cookies.get('token');

  useEffect(() => {
    if (isLogedIn) {
      navigate("/");
    }
  }, [isLogedIn, navigate]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate input
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true); // Show loading state

    try {
      const response = await fetch('http://localhost:5000/api/users/register', { // Adjust the endpoint as needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, mail:email, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      if (response.ok) {
        if (data.status) {
          Swal.fire({
            title: "Good job!",
            text: "Account Created Successfully!",
            icon: "success",
          });
          navigate("/login");
        } else {
          Swal.fire({
            title: "Error!",
            text: `User ${data.msg}`,
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      } else {
        console.log("Registration failed:", data);
      }
     

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className='minHeight d-flex flex-column justify-content-center align-items-center'>
      <div className='col-11 col-md-8 col-lg-5 m-auto border row rounded-3 pt-2 registerBg'>
        <h3 className='text-center'>Register</h3>
        <form onSubmit={handleSubmit} className='row m-auto'>
          <input
            type='text'
            placeholder='Enter Name'
            className='col-12 m-auto p-1 fs-6 fw-medium mb-2 rounded-3'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='email'
            placeholder='Enter Mail Id'
            className='col-12 m-auto p-1 fs-6 fw-medium mb-2 rounded-3'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Enter Password'
            className='col-12 m-auto p-1 fs-6 fw-medium mb-2 rounded-3'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type='password'
            placeholder='Enter Confirm Password'
            className='col-12 m-auto p-1 fs-6 fw-medium mb-2 rounded-3'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className='text-danger text-center'>{error}</p>}
          <div className='text-center'>
            <button
              type='submit'
              className='btn bg-white text-dark'
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register Now'}
            </button>
          </div>
        </form>
        <p className='text-center mt-3'>
          If you already have an account, please go to <Link to='/login'>Login</Link> page
        </p>
      </div>
    </div>
  );
};

export default Register;
