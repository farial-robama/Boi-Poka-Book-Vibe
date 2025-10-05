import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center bg-[#1313130d] rounded-md py-7 my-7'>
            <div>
                <h1 className='font-extrabold text-3xl'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn bg-[#23BE0A] text-white mt-3.5'>View The List</button>
            </div>
            <div>
                <img className='w-96 rounded-2xl shadow-2xl' src={bookImage} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;