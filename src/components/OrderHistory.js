import React from 'react';

const orders = [
  { id: 1, date: '2024-07-20', total: '$59.99', status: 'Delivered' },
  { id: 2, date: '2024-07-18', total: '$23.49', status: 'Processing' },
  { id: 3, date: '2024-07-15', total: '$99.99', status: 'Shipped' },
];

const OrderHistory = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">Order History</h1>
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="flex justify-between items-center py-2 border-b">
              <span>{order.date}</span>
              <span>{order.total}</span>
              <span className={`text-sm font-medium ${order.status === 'Delivered' ? 'text-green-500' : order.status === 'Processing' ? 'text-yellow-500' : 'text-blue-500'}`}>
                {order.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderHistory;
