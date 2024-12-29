import React, { useState } from "react";

const Transactions = () => {
  const [data, setData] = useState([
    {
      date: "2023-10-01",
      name: "Groceries",
      status: "Completed",
      source: "Credit Card",
      amount: "$50.00",
      contact: "Walmart",
    },
    {
      date: "2023-10-02",
      name: "Electricity Bill",
      status: "Pending",
      source: "Bank Transfer",
      amount: "$75.00",
      contact: "Utility Company",
    },
    {
      date: "2023-10-03",
      name: "Internet Bill",
      status: "Completed",
      source: "Credit Card",
      amount: "$45.00",
      contact: "ISP",
    },
    {
      date: "2023-10-04",
      name: "Dining Out",
      status: "Completed",
      source: "Debit Card",
      amount: "$30.00",
      contact: "Restaurant",
    },
    {
      date: "2023-10-05",
      name: "Gym Membership",
      status: "Pending",
      source: "Bank Transfer",
      amount: "$25.00",
      contact: "Gym",
    },
    {
      date: "2023-10-06",
      name: "Car Fuel",
      status: "Completed",
      source: "Credit Card",
      amount: "$60.00",
      contact: "Gas Station",
    },
    {
      date: "2023-10-07",
      name: "Movie Tickets",
      status: "Completed",
      source: "Debit Card",
      amount: "$20.00",
      contact: "Cinema",
    },
    {
      date: "2023-10-08",
      name: "Online Shopping",
      status: "Pending",
      source: "Credit Card",
      amount: "$100.00",
      contact: "Amazon",
    },
    {
      date: "2023-10-09",
      name: "Medical Bill",
      status: "Completed",
      source: "Bank Transfer",
      amount: "$150.00",
      contact: "Hospital",
    },
    {
      date: "2023-10-10",
      name: "Rent",
      status: "Completed",
      source: "Bank Transfer",
      amount: "$500.00",
      contact: "Landlord",
    },
    {
      date: "2023-10-11",
      name: "Groceries",
      status: "Completed",
      source: "Credit Card",
      amount: "$55.00",
      contact: "Supermarket",
    },
    {
      date: "2023-10-12",
      name: "Electricity Bill",
      status: "Pending",
      source: "Bank Transfer",
      amount: "$80.00",
      contact: "Utility Company",
    },
    {
      date: "2023-10-13",
      name: "Internet Bill",
      status: "Completed",
      source: "Credit Card",
      amount: "$50.00",
      contact: "ISP",
    },
    {
      date: "2023-10-14",
      name: "Dining Out",
      status: "Completed",
      source: "Debit Card",
      amount: "$35.00",
      contact: "Restaurant",
    },
    {
      date: "2023-10-15",
      name: "Gym Membership",
      status: "Pending",
      source: "Bank Transfer",
      amount: "$30.00",
      contact: "Gym",
    },
    {
      date: "2023-10-16",
      name: "Car Fuel",
      status: "Completed",
      source: "Credit Card",
      amount: "$65.00",
      contact: "Gas Station",
    },
    {
      date: "2023-10-17",
      name: "Movie Tickets",
      status: "Completed",
      source: "Debit Card",
      amount: "$25.00",
      contact: "Cinema",
    },
    {
      date: "2023-10-18",
      name: "Online Shopping",
      status: "Pending",
      source: "Credit Card",
      amount: "$120.00",
      contact: "Amazon",
    },
    {
      date: "2023-10-19",
      name: "Medical Bill",
      status: "Completed",
      source: "Bank Transfer",
      amount: "$160.00",
      contact: "Hospital",
    },
    {
      date: "2023-10-20",
      name: "Rent",
      status: "Completed",
      source: "Bank Transfer",
      amount: "$550.00",
      contact: "Landlord",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [newTransaction, setNewTransaction] = useState({
    date: "",
    name: "",
    status: "Pending",
    source: "",
    amount: "",
    contact: "",
  });

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleAddTransaction = () => {
    setData([newTransaction, ...data]);
    setNewTransaction({
      date: "",
      name: "",
      status: "Pending",
      source: "",
      amount: "",
      contact: "",
    });
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-6">Transactions</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Add New Transaction</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            name="date"
            value={newTransaction.date}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Date"
          />
          <input
            type="text"
            name="name"
            value={newTransaction.name}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Name"
          />
          <select
            name="status"
            value={newTransaction.status}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
          <input
            type="text"
            name="source"
            value={newTransaction.source}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Source"
          />
          <input
            type="text"
            name="amount"
            value={newTransaction.amount}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Amount"
          />
          <input
            type="text"
            name="contact"
            value={newTransaction.contact}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Contact"
          />
        </div>
        <button
          onClick={handleAddTransaction}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Add Transaction
        </button>
      </div>

      <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <thead className="w-full border-b border-gray-300 dark:border-gray-700">
          <tr className="w-full text-black dark:text-gray-400 text-left">
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Source</th>
            <th className="py-2 px-4">Amount</th>
          </tr>
        </thead>

        <tbody>
          {paginatedData.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-500 hover:bg-gray-300/10"
            >
              <td className="py-2 px-4">{item.date}</td>
              <td className="py-2 px-4">
                <div>
                  <p className="font-medium text-lg text-black dark:text-gray-400">
                    {item.name}
                  </p>
                  <span className="text-sm text-gray-600">{item.contact}</span>
                </div>
              </td>
              <td className="py-2 px-4 flex items-center gap-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    item.status === "Completed"
                      ? "bg-green-200 text-green-800"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="py-2 px-4">{item.source}</td>
              <td className="py-2 px-4">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-300"
        >
          Previous
        </button>
        <span className="text-gray-700 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-300"
        >
          Next
        </button>
      </div>
      <div className="flex justify-center items-center mt-auto">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          <a href="/">Home</a>
        </button>
      </div>
    </div>
  );
};

export default Transactions;
