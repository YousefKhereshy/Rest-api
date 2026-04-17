// 1. Import the Express library
const express = require('express');

// 2. Create an Express application instance
const app = express();

// 3. Define the port where the server will listen
const Port = 3000;

// 4. Middleware: parse incoming JSON requests (so req.body becomes a JavaScript object)
app.use(express.json());

// 5. In-memory data store – an array of book objects
//    Each book has: id (number), title (string), author (string), year (number)
let books = [
    { id: 1, title: 'the great gatsby', author: 'f. scott fitzgerald', year: 1925 },
    { id: 2, title: '1984', author: 'george orwell', year: 1948 }
];

// 6. Helper function to find a book by its id (used in multiple routes)
const findbookindex = (id) => books.findIndex(book => book.id === id);

// ========== ROUTES ==========

// 7. GET /books – retrieve all books
app.get('/books', (req, res) => {
  res.json(books);
});

// 8. POST /books – create a new book
app.post('/books', (req, res) => {
  // Extract title, author, year from the request body
  const { title, author, year } = req.body;
  // Validation: all fields are required
  if (!title || !author || !year) {
    return res.status(400).json({ error: "Missing required fields: title, author, year" });
  }

  // Generate a new unique id (simplest: max existing id + 1, or fallback to 1)
  const newId = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;

  // Create the new book object
  const newBook = { id: newId, title, author, year };

  // Add it to our in-memory array
  books.push(newBook);

  // Return the created book
  res.status(201).json(newBook);
});

  // 10. PUT /books/:id – completely update an existing book
  app.put('/books/:id', (req, res) =>{
        const id = parseInt(req.params.id);
        const {title, author, year} = req.body;

// Find the index of the book in the array
        const index = findbookindex(id);
        if (index === -1) {
            return res.status(404).json({error:"book not found"});
        }

  // Validation: require all fields for a full update (you could also allow partial)
        if(!title || !author || !year){
            return res.status(400).json({error:"Missing requires fields: title , author , year"});
        }
      // Update the book (keep the same id)
        books[index] = {id, title ,author, year};
       // Respond with the updated book
        res.json(books[index]);
  });

// 11. DELETE /books/:id – delete a book
app.delete('/books/:id', (req , res) =>{
    const id = parseInt(req.params.id);
    const index = findbookindex(id);
    if (index === -1){
        return res.status(404).json({error:"book not found"});

    }
  // Remove the book from the array
    books.splice(index, 1);

   // 204 No Content – successful deletion, no response body
   res.status(204).send();
});

// 12. Start the server and listen on the defined port
app.listen(Port, () => {
    console.log(`Book API running at http://localhost:${Port}`);
});
