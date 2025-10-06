import React from 'react';

import { createBrowserRouter, createHashRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import ListedBooks from '../pages/ListedBooks/ListedBooks';
import BookDetails from '../pages/BookDetails/BookDetails';
import PagesToRead from '../pages/PagesToRead/PagesToRead';

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            loader: () => fetch('./booksData.json'),
            path: "/",
            Component: Home
        },
        {
            path: "/ListedBooks",
            loader: () => fetch('./booksData.json'),
            Component: ListedBooks
        },
        {
            path: "/bookDetails/:id",
            loader: () => fetch('./booksData.json'),
            Component: BookDetails
        },
        {
            path: '/PagesToRead',
            loader: () => fetch('./booksData.json'),
            Component: PagesToRead
        }
    
    ]
  },
]);