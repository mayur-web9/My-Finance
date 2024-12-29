import React, { useState } from "react";
import { FaBtc, FaCcMastercard, FaPaypal } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import Title from "./title";
import { useNavigate } from 'react-router-dom';

const initialData = [
  {
    name: "Crypto",
    account: "codewave@gmail.com",
    amount: 85345.00,
    type: "Crypto",
    icon: (
      <div className='w-12 h-12 bg-amber-600 text-white flex items-center justify-center rounded-full'>
        <FaBtc size={26} />
      </div>
    ),
  },
  {
    name: "Visa Debit Card",
    account: "2463********8473",
    amount: 15345.00,
    type: "Debit Card",
    icon: (
      <div className='w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full'>
        <RiVisaLine size={26} />
      </div>
    ),
  },
  {
    name: "MasterCard",
    account: "6785********8473",
    amount: 55345.00,
    type: "Credit Card",
    icon: (
      <div className='w-12 h-12 bg-rose-600 text-white flex items-center justify-center rounded-full'>
        <FaCcMastercard size={26} />
      </div>
    ),
  },
  {
    name: "Paypal",
    account: "codewave@gmail.com",
    amount: 35345.00,
    type: "Online Payment",
    icon: (
      <div className='w-12 h-12 bg-blue-700 text-white flex items-center justify-center rounded-full'>
        <FaPaypal size={26} />
      </div>
    ),
  },
];

const Accounts = () => {
  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [newAccount, setNewAccount] = useState({ name: "", account: "", amount: "", type: "Crypto" });
  const navigate = useNavigate();

  const handleAddAccount = (e) => {
    e.preventDefault();
    const newAccountData = {
      ...newAccount,
      amount: parseFloat(newAccount.amount),
      icon: (
        <div className='w-12 h-12 bg-amber-600 text-white flex items-center justify-center rounded-full'>
          <FaBtc size={26} />
        </div>
      ),
    };
    setData([...data, newAccountData]);
    setNewAccount({ name: "", account: "", amount: "", type: "Crypto" });
  };

  const filteredData = filter === "All" ? data : data.filter(item => item.type === filter);
  const sortedData = filteredData.sort((a, b) => sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount);

  return (
    <div className='flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 p-6'>
      <Title title='Accounts' />
      <span className='text-sm text-gray-600 dark:text-gray-500'>
        View all your accounts
      </span>

      <div className='flex justify-between items-center mt-4'>
        <div>
          <label className='text-gray-600 dark:text-gray-500 mr-2'>Filter by:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className='p-2 border border-gray-300 rounded-lg'>
            <option value="All">All</option>
            <option value="Crypto">Crypto</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Online Payment">Online Payment</option>
          </select>
        </div>
        <div>
          <label className='text-gray-600 dark:text-gray-500 mr-2'>Sort by Balance:</label>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className='p-2 border border-gray-300 rounded-lg'>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div className='w-full mt-6 flex-grow'>
        {sortedData.map((item, index) => (
          <div key={index} className='flex items-center justify-between mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
            <div className='flex items-center gap-4'>
              {item.icon}
              <div>
                <p className='text-black dark:text-gray-400 text-lg'>
                  {item.name}
                </p>
                <span className='text-gray-600'>{item.account}</span>
              </div>
            </div>

            <div>
              <p className='text-xl text-black dark:text-gray-400 font-medium'>
                ${item.amount.toLocaleString()}
              </p>
              <span className='text-sm text-gray-600 dark:text-violet-700'>
                Account Balance
              </span>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleAddAccount} className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-6'>
        <h2 className='text-xl font-semibold mb-4 text-black dark:text-white'>Add New Account</h2>
        <div className='mb-4'>
          <label className='block text-gray-700 dark:text-gray-300 mb-2'>Account Name</label>
          <input
            type='text'
            value={newAccount.name}
            onChange={(e) => setNewAccount({ ...newAccount, name: e.target.value })}
            className='w-full p-2 border border-gray-300 rounded-lg'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 dark:text-gray-300 mb-2'>Account Number</label>
          <input
            type='text'
            value={newAccount.account}
            onChange={(e) => setNewAccount({ ...newAccount, account: e.target.value })}
            className='w-full p-2 border border-gray-300 rounded-lg'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 dark:text-gray-300 mb-2'>Amount</label>
          <input
            type='number'
            value={newAccount.amount}
            onChange={(e) => setNewAccount({ ...newAccount, amount: e.target.value })}
            className='w-full p-2 border border-gray-300 rounded-lg'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 dark:text-gray-300 mb-2'>Account Type</label>
          <select
            value={newAccount.type}
            onChange={(e) => setNewAccount({ ...newAccount, type: e.target.value })}
            className='w-full p-2 border border-gray-300 rounded-lg'
          >
            <option value="Crypto">Crypto</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Online Payment">Online Payment</option>
            <option value="UPI Account">UPI Account</option>
          </select>
        </div>
        <button
          type='submit'
          className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300'
        >
          Add Account
        </button>
      </form>

      <div className='flex justify-center items-center mt-6'>
        <button
          onClick={() => navigate('/')}
          className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300'
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Accounts;