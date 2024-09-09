import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Thank you for your purchase!</h1>
      <button 
        className="bg-blue-500 text-white px-4 py-2 mt-4" 
        onClick={() => navigate('/')}
      >
        Go back to Home
      </button>
    </div>
  );
};

export default OrderConfirmation;
