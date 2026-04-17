# Book API

A simple RESTful API for managing a collection of books, built with Node.js and Express.

## Features

- **GET** `/books` - Retrieve all books
- **POST** `/books` - Add a new book
- **PUT** `/books/:id` - Update an existing book
- **DELETE** `/books/:id` - Delete a book

## Prerequisites

- Node.js installed
- npm or yarn

## Installation

```bash
# Clone the repository
git clone https://github.com/YousefKhereshy/Rest-api.git

# Navigate to the project directory
cd book-api

# Install dependencies
npm install
```

## Usage

```bash
# Start the server
node app.js
```

The server will run at `http://localhost:3000`

## API Endpoints

### Get All Books
```http
GET /books
```

### Add a Book
```http
POST /books
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "year": 1925
}
```

### Update a Book
```http
PUT /books/:id
Content-Type: application/json

{
  "title": "1984",
  "author": "George Orwell",
  "year": 1949
}
```

### Delete a Book
```http
DELETE /books/:id
```

## Response Codes

| Code | Description |
|------|-------------|
| 200  | Success |
| 201  | Created |
| 400  | Bad Request (missing fields) |
| 404  | Not Found |
| 204  | No Content (deletion successful) |

## Data Structure

```json
{
  "id": 1,
  "title": "the great gatsby",
  "author": "f. scott fitzgerald",
  "year": 1925
}
```

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js

## License

MIT