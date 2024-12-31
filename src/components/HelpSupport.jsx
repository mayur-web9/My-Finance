import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HelpSupport = () => {
  const [query, setQuery] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Your query has been submitted!');
    setQuery('');
    setEmail('');
    setMessage('');
    navigate('/'); // Redirect to home page after submission
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>Help & Support</h1>

      <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6'>
        <h2 className='text-2xl font-semibold mb-4'>FAQs</h2>
        <ul className='list-disc list-inside'>
          <li className='mb-2'>How do I reset my password?</li>
          <li className='mb-2'>How do I update my profile information?</li>
          <li className='mb-2'>How do I contact support?</li>
        </ul>
      </div>

      <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6'>
        <h2 className='text-2xl font-semibold mb-4'>Contact Information</h2>
        <p className='mb-2'>Email: support@my-finance.com</p>
        <p className='mb-2'>Phone: +1 234 567 890</p>
        <p className='mb-2'>Address: 123 Finance St, Money City, USA</p>
      </div>

      <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold mb-4'>Submit a Query</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 dark:text-gray-300 mb-2'>Query</label>
            <input
              type='text'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className='w-full p-3 border border-gray-300 rounded-lg'
              required
            />
          </div>
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
            <label className='block text-gray-700 dark:text-gray-300 mb-2'>Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='w-full p-3 border border-gray-300 rounded-lg'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpSupport;