import React from 'react';
import bookImage from '../../assets/Book-1.png'

const Banner = () => {
    return (
        <div className="hero bg-[#1313130d] rounded-md min-h-screen my-10">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <img
      src={bookImage}
      className="max-w-sm rounded-lg"
    />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
      
      <button className="btn  bg-[#23BE0A] text-white mt-4">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;