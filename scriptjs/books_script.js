let booksList = document.querySelector('[data-books-list]');

function appropriate(nod, val) {
  nod.appendChild(val);
}

fetch('http://www.introligator.com.ua/books.json')
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let bookCard = document.createElement('div');
      appropriate(booksList, bookCard);
      bookCard.classList.add('books__card');
      let bookLinkPage = document.createElement('a');
      appropriate(bookCard, bookLinkPage);
      let bookImage = document.createElement('img');
      bookImage.classList.add('books__img');
      bookImage.setAttribute('src', `${data[i].image}`);
      appropriate(bookLinkPage, bookImage);
      let bookName = document.createElement('H2');
      bookName.classList.add('books__name');
      bookName.textContent = `${data[i].name}`;
      appropriate(bookCard, bookName);
      let bookAutor = document.createElement('p');
      bookAutor.classList.add('books__autor');
      bookAutor.textContent = `${data[i].autor}`;
      appropriate(bookCard, bookAutor);
      let bookPrice = document.createElement('p');
      bookPrice.classList.add('books__price');
      if (`${data[i].price}` == ' - ') {
        bookPrice.textContent = 'Немає в наявності :(';
      }
      else {
        bookPrice.textContent = `${data[i].price} грн.`;
      }
      appropriate(bookCard, bookPrice);
      bookLinkPage.setAttribute('href', `${data[i].link}`)

      // renderPageInfo(i, numb);
    }
  });

