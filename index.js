const db = require("./Database");
// console.log(db.books) ; 
// console.log(db.authors);
const express = require("express");
const app = express();
// http://localhost:3000/
app.get("/", (req, res) => {
    const getAllBooks = db.books;
    return res.json(getAllBooks);
});

// http://localhost:3000/book-isbn/12345Two
app.get("/book-isbn/:isbn", (req, res) => {
    // console.log(req.params);
    const {isbn} = req.params;
    // console.log(isbn);
    const getSpecificBook = db.books.filter((book) => book.ISBN === isbn);
    // console.log(getSpecificBook);
    // console.log(getSpecificBook.length);
    if(getSpecificBook.length===0) {
        return res.json({"error": `No Book found for the ISBN of ${isbn}`});
    }
    return res.json(getSpecificBook[0]);
});

app.listen(3000,()=> {
    console.log("My Express app is running")
})