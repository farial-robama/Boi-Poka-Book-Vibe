import React, { useEffect, useState } from "react";
import { getStoredBook } from "../../utility/AddToDB";
import PageChart from "./PageChart";
import { useLoaderData } from "react-router";

const PagesToRead = () => {
  const data = useLoaderData() || [];

  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    const storedBookData = getStoredBook().map((id) => Number(id));
    const booksToRead = data.filter((book) =>
      storedBookData.includes(book.bookId)
    );
    setMyBooks(booksToRead);
  }, [data]);
  return (
    <div className="p-10">
      <h2 className="text-2xl font-semibold mb-10 py-4 bg-base-300 rounded-2xl text-center">Pages to Read</h2>
      {myBooks.length > 0 ? (
        <PageChart books={myBooks}></PageChart>
      ) : (
        <p className="text-gray-500">No books added to read list yet.</p>
      )}
    </div>
  );
};

export default PagesToRead;
