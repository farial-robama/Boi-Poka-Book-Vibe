import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB, addToWishlistDB } from '../../utility/AddToDB';


const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find((book) => book.bookId === bookId);
    const {bookName, image,review,author,category,yearOfPublishing,totalPages,rating,publisher,tags} = singleBook;

    const handleMarkAsRead = id => {   
        addToStoredDB(id)

    }

    const handleAddToWishlist = (id) => {
         addToWishlistDB(id);
  };



    return (
       <div className="card bg-base-100 shadow-sm flex flex-col md:flex-row gap-12 mx-auto my-13">
  <figure className='bg-[#1313130d] p-13' >
    <img className=' object-contain w-83 rounded-md'
      src={image}
      alt="image" />
  </figure>
  <div className="card-body md:w-2/5 ">
    <h2 className='card-title text-2xl'>
      {bookName}
      <div className="badge bg-[#23BE0A] text-white">{category}</div>
    </h2>
    <h3 className='text-xl pb-7'>By: {author}</h3>
    <p>{review}</p>
    <div className='flex flex-row gap-7 py-7'>
        <div className="badge badge-outline">{tags[0]}</div>
      <div className="badge badge-outline">{tags[1]}</div>
    </div>
    <div className='border-t-1 border-dashed'></div>
    <div className="overflow-x-auto pb-7">
  <table className="table">
    <tbody>
      {/* row 1 */}
      <tr>
        <td>Number of Pages</td>
        <td>{totalPages}</td>
      </tr>
      {/* row 2 */}
      <tr>
        <td>Publisher</td>
        <td>{publisher}</td>
      </tr>
      {/* row 3 */}
      <tr>
        <td>Year of Publishing</td>
        <td>{yearOfPublishing}</td>
      </tr>
      {/* row 4 */}
      <tr>
        <td>Rating</td>
        <td>{rating}</td>
      </tr>
    </tbody>
  </table>
</div>
    <div className="card-actions justify-end">
      <button onClick={() => handleMarkAsRead(id) } className="btn btn-accent text-white">Read</button>
      <button onClick={() => handleAddToWishlist(id)} className="btn btn-accent text-white">Wishlist</button>
    </div>
  </div>
</div>
    );
};

export default BookDetails;