import React, { useState } from 'react';

const Settings = () => {
  const [username, setUsername] = useState('Mayur');
  const [email, setEmail] = useState('mayur.patil.ac@gmail.com');
  const [password, setPassword] = useState('');
  const [expenseLimit, setExpenseLimit] = useState(1000);
  const [theme, setTheme] = useState('light');

  const handleSave = () => {
    // Handle save logic here
    alert('Settings saved!');
  };

  return (
    <div className='container mx-auto p-4'>
       <div className='flex justify-around items-start mt-auto'>
        <button
          onClick={() => navigate('/')}
          className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300'
        >
          <a href='/'>
            Back to Home
          </a>
        </button>
      </div>
      <h1 className='text-3xl font-bold mb-6'>Settings</h1>

      <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6'>
        <h2 className='text-2xl font-semibold mb-4'>User Profile</h2>
        <div className='mb-4'>
          <label className='block text-gray-700 dark:text-gray-300 mb-2'>Username</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 dark:text-gray-300 mb-2'>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 dark:text-gray-300 mb-2'>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg'
          />
        </div>
      </div>

      <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6'>
        <h2 className='text-2xl font-semibold mb-4'>Account Settings</h2>
        <div className='mb-4'>
          <label className='block text-gray-700 dark:text-gray-300 mb-2'>Expense Limit</label>
          <input
            type='number'
            value={expenseLimit}
            onChange={(e) => setExpenseLimit(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg'
          />
        </div>
      </div>

      <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold mb-4'>Theme Settings</h2>
        <div className='mb-4'>
          <label className='block text-gray-700 dark:text-gray-300 mb-2'>Select Theme</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg'
          >
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
          </select>
        </div>
        <button
          onClick={handleSave}
          className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300'
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Settings;