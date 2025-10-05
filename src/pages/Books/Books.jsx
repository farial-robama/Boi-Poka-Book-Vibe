import React from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold'>Books</h1>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-10'>
             {
                 data.map((book) => <Book key={book.bookId} book={book}></Book>)
            }
           </div>
            
        </div>
    );
};

export default Books;