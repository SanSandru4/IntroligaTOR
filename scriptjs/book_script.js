let booksList = document.querySelector('[data-books-list]');
let books_Name = document.querySelector('[data-book-name]');


function appropriate(nod, val) {
  nod.appendChild(val);
}

fetch('http://www.introligator.com.ua/books.json')
  .then((response) => response.json())
  .then((data) => {
      let bookCard = document.createElement('div');
      appropriate(booksList, bookCard);
      bookCard.classList.add('books__card');
      let bookImage = document.createElement('img');
      bookImage.classList.add('books__img');
      bookImage.setAttribute('src', `${data[0].image}`);
      appropriate(bookCard, bookImage);
      let bookName = document.createElement('H2');
      bookName.classList.add('books__name');
      bookName.textContent = `${data[0].name}`;
      appropriate(bookCard, bookName);
      let bookAutor = document.createElement('p');
      bookAutor.classList.add('books__autor');
      bookAutor.textContent = `${data[0].autor}`;
      appropriate(bookCard, bookAutor);
      let bookPrice = document.createElement('p');
      bookPrice.classList.add('books__price');
      if (`${data[0].price}` == ' - ') {
        bookPrice.textContent = 'Немає в наявності :(';
      }
      else {
        bookPrice.textContent = `${data[0].price} грн.`;
      }
      appropriate(bookCard, bookPrice);
      books_Name.textContent = `${data[1].name}`;
  });


