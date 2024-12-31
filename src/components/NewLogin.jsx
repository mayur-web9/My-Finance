import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert('Logged in successfully!');
    navigate('/transactions'); // Redirect to dashboard after login
  };

  return (
    <div className='container mx-auto p-4 flex flex-col items-center justify-center min-h-screen bg-blue-200 dark:bg-gray-900'>
      <h1 className='text-3xl font-bold mb-6 text-black dark:text-white'>Login To New Account</h1>
      <form onSubmit={handleLogin} className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md'>
        <div className='mb-4'>
          <label className='block text-gray-700 dark:text-gray-300 mb-2'>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 dark:text-gray-300 mb-2'>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg'
            required
          />
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;