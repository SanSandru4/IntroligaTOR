let booksList = document.querySelector('[data-books-list]');

fetch('http://www.introligator.com.ua/books.json')
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let bookCard = document.createElement('div');
      booksList.appendChild(bookCard);
      bookCard.classList.add('books__card');
      let bookName = document.createElement('H2');
      bookName.textContent = `${data[i].name}`;
      bookCard.appendChild(bookName);
    }
  });


