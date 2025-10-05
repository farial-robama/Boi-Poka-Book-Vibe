import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Book = ({book}) => {

    const {bookName,bookId,author,image,category,rating,tags,yearOfPublishing} = book;
    return (
        <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure className='object-contain bg-[#1313130d] rounded-md p-6 md:p-10'>
    <img className='h-45'
      src={image}
      alt="image" />
  </figure>
  <div className="card-body">
    <div className='flex flex-row items-center'>
        {
            tags.map((tag) => <p>{tag}</p>)
        }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge bg-[#23BE0A] text-white">{yearOfPublishing}</div>
    </h2>
    <p>By: {author}</p>
    <div className='border-t-1 border-dashed text-[#b4b1b1]'></div>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline flex items-center gap-2.5 ">
        {rating} 
        <Star className='w-4'></Star>
        </div>
    </div>
  </div>
</div>
        </Link>
    );
};

export default Book;