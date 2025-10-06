import { toast } from "react-toastify";

// Read List
const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");

    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR)
        return storedBookData;
    }
    else{
        return [];
    }
}

const addToStoredDB = (id) =>{
    const storedBookData = getStoredBook();
    const bookId = Number(id);

    if (storedBookData.includes(bookId)) {
        toast.warning("This book is already in your Read List!");
    }
    else {
        storedBookData.push(bookId);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data)
        toast.success("Book added to your Read List!");
    }

}


// Wish List
const getStoreWishlist = () => {
    const storedWishSTR = localStorage.getItem("wishList");

    if (storedWishSTR) {
        const storedWishlistData = JSON.parse(storedWishSTR)
        return storedWishlistData;
    }
    else{
        return [];
    }
}

const addToWishlistDB = (id) =>{
    const storedWishData = getStoreWishlist();
    const storedBookData = getStoredBook();
    const bookId = Number(id);

    if (storedBookData.includes(bookId)) {
        toast.info("You already read this book, can't add to Wishlist!");
        return;
    }

    if (storedWishData.includes(bookId)) {
        toast.warning("This book is already in your Wish List!");
    }
    else {
        storedWishData.push(bookId);
        const data = JSON.stringify(storedWishData);
        localStorage.setItem("wishList", data)
        toast.success("Book added to your Wish List!");
    }

}

export {addToStoredDB, getStoredBook, addToWishlistDB, getStoreWishlist};