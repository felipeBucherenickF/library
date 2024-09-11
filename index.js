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

const openAddNewBookModal = () => {
  const addNewBookModal = document.createElement("div");
  const addNewBookForm = document.createElement("form");

  const addNewBookModalTitle = document.createElement("h2");
  addNewBookModalTitle.textContent = "New book";
  addNewBookForm.appendChild(addNewBookModalTitle);

  const addNewBookTitleLabel = document.createElement("label");
  addNewBookTitleLabel.textContent = "Title";
  const addNewBookTitleInput = document.createElement("input");
  addNewBookForm.appendChild(addNewBookTitleLabel);
  addNewBookForm.appendChild(addNewBookTitleInput);

  const addNewBookAuthorLabel = document.createElement("label");
  addNewBookAuthorLabel.textContent = "Author";
  const addNewBookAuthorInput = document.createElement("input");
  addNewBookForm.appendChild(addNewBookAuthorLabel);
  addNewBookForm.appendChild(addNewBookAuthorInput);

  const addNewBookPagesLabel = document.createElement("label");
  addNewBookPagesLabel.textContent = "Pages";
  const addNewBookPagesInput = document.createElement("input");
  addNewBookForm.appendChild(addNewBookPagesLabel);
  addNewBookForm.appendChild(addNewBookPagesInput);

  const addNewBookIsReadLabel = document.createElement("label");
  addNewBookIsReadLabel.textContent = "IsRead";
  const addNewBookIsReadInput = document.createElement("input");
  addNewBookForm.appendChild(addNewBookIsReadLabel);
  addNewBookForm.appendChild(addNewBookIsReadInput);

  const addNewBookDone = document.createElement("button");
  addNewBookDone.textContent = "Done";
  addNewBookForm.appendChild(addNewBookDone);

  addNewBookModal.appendChild(addNewBookForm);
  addNewBookModal.classList.add("add-new-book-modal");
  document.body.appendChild(addNewBookModal);

  addNewBookDone.addEventListener("click", (event) => {
    event.preventDefault();
    const newBook = new Book(
      addNewBookTitleInput.value,
      addNewBookAuthorInput.value,
      addNewBookPagesInput.value,
      addNewBookIsReadInput.value
    );
    addBookToLibrary(newBook);
    addNewBookModal.classList.add("close");
    displayBooks(myLibrary);
  });
};

const displayBooks = (myLibrary) => {
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

    displayBookDelete.addEventListener("click", () => {
      displayBook.classList.add("delete");
    });

    listOfBooks.appendChild(displayBook);
  });
  const createNewBook = document.createElement("div");
  const createNewBookContent = document.createElement("p");
  createNewBookContent.textContent = "+";
  createNewBook.appendChild(createNewBookContent);
  createNewBook.classList.add("book");
  createNewBook.classList.add("new-book");
  listOfBooks.appendChild(createNewBook);

  createNewBook.addEventListener("click", () => {
    openAddNewBookModal();
  });
};

displayBooks(myLibrary);
