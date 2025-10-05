import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/AddToDB';
import Book from '../Book/Book';

const ListedBooks = () => {

    const[readList,setReadList] = useState([])


    const data = useLoaderData();

    useEffect(() =>{
        const storedBookData = getStoredBook();
        const convertedStoredBookData = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredBookData.includes(book.bookId));
        setReadList(myReadList)
    },[data])

    return (
        <div>
            <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <h2 className='font-semibold my-3.5'>Book I Read - {readList.length}</h2>
      <div className='my-7'>
        {
            readList.map((b) => <Book key={b.bookId} book={b}></Book>)
        }
      </div>
    </TabPanel>
    <TabPanel>
      <h2>My Wishlist</h2>
    </TabPanel>
  </Tabs>
            
        </div>
    );
};

export default ListedBooks;