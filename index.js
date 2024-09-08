const myLibrary = [];

function Book(title, author, numberOfPages, isRead) {
  (this.title = title),
    (this.author = author),
    (this.numberOfPages = numberOfPages),
    (this.isRead = isRead);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function fillLibrary() {
  const book1 = new Book("The Stand", "Stephen King", 1500, false);
  const book2 = new Book("The eye of the world", "Robert Jordan", 800, true);
  const book3 = new Book("Dune", "Frank Herbert", 900, true);
  const book4 = new Book(
    "La catedral del mar",
    "Ildefonso Falcones",
    700,
    true
  );
  const book5 = new Book(
    "The Pillars of the Earth",
    "Ken Follett",
    1000,
    false
  );
  addBookToLibrary(book1);
  addBookToLibrary(book2);
  addBookToLibrary(book3);
  addBookToLibrary(book4);
  addBookToLibrary(book5);
  console.log(myLibrary);
}
fillLibrary();

const listOfBooks = document.querySelector(".list-of-books");
myLibrary.forEach((book) => {
  const bookTitle = book.title;
  const displayBookTitle = document.createElement("p");
  displayBookTitle.textContent = bookTitle;
  const bookAuthor = book.author;
  const displayBookAuthor = document.createElement("p");
  displayBookAuthor.textContent = bookAuthor;
  const bookPages = book.numberOfPages;
  const displayBookPages = document.createElement("p");
  displayBookPages.textContent = bookPages;
  const bookIsRead = book.isRead;
  const displayBookIsRead = document.createElement("p");
  displayBookIsRead.textContent = bookIsRead;

  const displayBook = document.createElement("div");
  displayBook.classList.add("book");
  const displayBookTitleLeyend = document.createElement("span");
  displayBookTitleLeyend.textContent = "Title :";
  displayBook.appendChild(displayBookTitleLeyend);
  displayBook.appendChild(displayBookTitle);
  const displayBookAuthorLeyend = document.createElement("span");
  displayBookAuthorLeyend.textContent = "Author :";
  displayBook.appendChild(displayBookAuthorLeyend);
  displayBook.appendChild(displayBookAuthor);
  const displayBookPagesLeyend = document.createElement("span");
  displayBookPagesLeyend.textContent = "Number of Pages :";
  displayBook.appendChild(displayBookPagesLeyend);
  displayBook.appendChild(displayBookPages);
  const displayBookIsReadLeyend = document.createElement("span");
  displayBookIsReadLeyend.textContent = "Is Already read :";
  displayBook.appendChild(displayBookIsReadLeyend);
  displayBook.appendChild(displayBookIsRead);
  const displayBookDelete = document.createElement("button");
  displayBookDelete.textContent = "Delete";
  displayBook.appendChild(displayBookDelete);

  listOfBooks.appendChild(displayBook);
});

const newBook = document.createElement("div");
const newBookContent = document.createElement("p");
newBookContent.textContent = "+";
newBook.appendChild(newBookContent);
newBook.classList.add("book");
newBook.classList.add("new-book");
listOfBooks.appendChild(newBook);
