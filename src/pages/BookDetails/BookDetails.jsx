import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find((book) => book.bookId === bookId);
    const {bookName, image,review,author,category,yearOfPublishing,totalPages,rating,publisher,tags} = singleBook
    return (
       <div className="card bg-base-100 shadow-sm flex flex-row gap-12 mx-auto my-13">
  <figure className=' object-contain p-6' >
    <img
      src={image}
      alt="image" />
  </figure>
  <div className="card-body w-2/5 ">
    <h2 className='card-title text-2xl'>
      {bookName}
      <div className="badge badge-secondary">{category}</div>
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
      <button className="btn btn-accent">Read</button>
      <button className="btn btn-accent">Wishlist</button>
    </div>
  </div>
</div>
    );
};

export default BookDetails;