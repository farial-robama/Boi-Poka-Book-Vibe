import React from 'react';
import Book from '../Book/Book';

const ReadBooks = ({readList}) => {
    return (
        <div>
             <h2 className="font-semibold my-3.5 flex items-center">
            Book I Read - {readList.length}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-7">
            {readList.map((b) => (
              <Book key={b.bookId} book={b}></Book>
            ))}
          </div>
        </div>
    );
};

export default ReadBooks;