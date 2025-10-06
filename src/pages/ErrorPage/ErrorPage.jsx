import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-5xl font-bold text-[#23BE0A] mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <a href="/" className="btn bg-[#23BE0A] text-white">Go Home</a>
    </div>
  );
};

export default ErrorPage;
