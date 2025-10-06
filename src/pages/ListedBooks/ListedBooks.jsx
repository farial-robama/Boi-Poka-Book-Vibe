import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook, getStoreWishlist } from "../../utility/AddToDB";
import Book from "../Book/Book";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const [wishList, setWishList] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  const data = useLoaderData();
  

  useEffect(() => {
    const storedBookData = getStoredBook();
    const storedWishlistData = getStoreWishlist();

    const convertedStoredBookData = storedBookData.map((id) => parseInt(id));
    const convertedStoredWishlistData = storedWishlistData.map((id) =>
      parseInt(id)
    );

    const myReadList = data.filter((book) =>
      convertedStoredBookData.includes(book.bookId)
    );
    const myWishList = data.filter((book) =>
      convertedStoredWishlistData.includes(book.bookId)
    );

    setReadList(myReadList);
    setWishList(myWishList);
  }, [data]);


  // Unified sort function
  const handleSort = (type) => {
    setSort(type);

    if (tabIndex === 0) {
      // Sorting read list
      if (type === "Year") {
        setReadList(
          [...readList].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
        );
      } else if (type === "Rating") {
        setReadList([...readList].sort((a, b) => b.rating - a.rating));
      }
    } else {
      // Sorting wishlist
      if (type === "Year") {
        setWishList(
          [...wishList].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
        );
      } else if (type === "Rating") {
        setWishList([...wishList].sort((a, b) => b.rating - a.rating));
      }
    }
  };

  return (
    <div>
      <div className="bg-base-300 text-center my-8">
        <button className="btn btn-ghost text-xl">Books</button>
      </div>

      {/* Sort dropdown */}
      <details className="dropdown my-6 flex justify-center">
        <summary className="btn btn-active btn-success text-white m-1">
          Sort By: {sort ? sort : "Select"}
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("Year")}>Year</a>
          </li>
          <li>
            <a onClick={() => handleSort("Rating")}>Rating</a>
          </li>
        </ul>
      </details>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ReadBooks readList={readList}></ReadBooks>
        </TabPanel>
        <TabPanel>
          <WishlistBooks wishList={wishList}></WishlistBooks>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
