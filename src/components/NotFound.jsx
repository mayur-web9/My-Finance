import React from 'react';

const NotFound = () => {
  return (
    <div className='mt-14 flex flex-col items-center justify-center min-h-4-screen bg-gray-100 dark:bg-gray-900'>
      <h1 className='text-4xl font-bold text-black dark:text-white'>404 - Not Found</h1>
      <p className='text-lg text-gray-700 dark:text-gray-300'>The page you are looking for does not exist.</p>
      <div className='flex justify-center items-center mt-8'>
        <button
          onClick={() => navigate('/')}
          className=' mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300'
        >
          <a href='/'>
            Go To Home Page
          </a>
        </button>
      </div>
    </div>
  );
};

export default NotFound;