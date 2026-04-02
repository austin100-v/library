# My Library

A simple browser-based personal library tracker that lets you manage your reading list — add books, mark them as read, and remove them as you go.

## Features

- **Add books** with title, author, page count, and read status
- **Toggle read/unread** status for each book
- **Delete books** from your library
- Clean, centered UI with alternating row styles for easy scanning

## Project Structure

```
library/
├── index.html   # App markup and form
├── script.js    # Library logic and DOM manipulation
├── style.css    # Styling
└── README.md
```

## Getting Started

No build tools or dependencies required — it runs entirely in the browser.

1. Clone or download the repository
2. Open `index.html` in your browser
3. Start adding books!

## Usage

1. Click **Add New Book** to reveal the form
2. Fill in the book's title, author, and number of pages
3. Check the **Read** checkbox if you've already read it
4. Click **Add Book** to add it to your list

Each book entry shows:
- Title, author, and page count
- A **Delete** button to remove the book
- A **Mark as Read / Mark as Unread** toggle button

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (no frameworks or libraries)

## Notes

- Books are stored in memory only — the list resets on page refresh
- Each book is assigned a unique ID using `crypto.randomUUID()`