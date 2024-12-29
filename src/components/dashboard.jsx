import React from 'react';
import { FaChartLine, FaMoneyBillWave, FaWallet } from 'react-icons/fa';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import Chart from './chart';
import DoughnutChart from './doughnutchart';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  return (
    <div className='container mx-auto p-4 bg-gray-100 dark:bg-gray-900 min-h-screen'>
      <h1 className='text-3xl font-bold mb-6 text-black dark:text-white'>Dashboard</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
        <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center hover:shadow-lg transition-shadow duration-300'>
          <FaChartLine className='text-4xl text-blue-500 mr-4' />
          <div>
            <p className='text-lg font-semibold text-black dark:text-white'>Total Revenue</p>
            <p className='text-2xl text-black dark:text-white'>$85,345.00</p>
          </div>
        </div>
        <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center hover:shadow-lg transition-shadow duration-300'>
          <FaMoneyBillWave className='text-4xl text-green-500 mr-4' />
          <div>
            <p className='text-lg font-semibold text-black dark:text-white'>Total Expenses</p>
            <p className='text-2xl text-black dark:text-white'>$45,345.00</p>
          </div>
        </div>
        <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center hover:shadow-lg transition-shadow duration-300'>
          <FaWallet className='text-4xl text-yellow-500 mr-4' />
          <div>
            <p className='text-lg font-semibold text-black dark:text-white'>Total Savings</p>
            <p className='text-2xl text-black dark:text-white'>$40,000.00</p>
          </div>
        </div>
      </div>

      <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6'>
        <h2 className='text-xl font-semibold mb-4 text-black dark:text-white'>Expense Breakdown</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6'>
        <h2 className='text-xl font-semibold mb-4 text-black dark:text-white'>Recent Activities</h2>
        <ul className='list-disc list-inside text-black dark:text-white'>
          <li className='mb-2'>Bought groceries for $50.00</li>
          <li className='mb-2'>Paid electricity bill of $75.00</li>
          <li className='mb-2'>Received salary of $5,000.00</li>
          <li className='mb-2'>Transferred $1,000.00 to savings</li>
        </ul>
      </div>

      <div className='w-full flex flex-col-reverse md:flex-row items-center gap-10'>
        <Chart />
        <DoughnutChart />
      </div>
      <div className='flex justify-center items-center mt-auto'>
        <button
          onClick={() => navigate('/')}
          className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300'
        >
          <a href='/'>
            Home
          </a>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;