let booksList = document.querySelector('[data-books-list]');
let bookAutor = document.querySelector('[data-page-autor]');
let valuePage = document.querySelector('[data-page-info]');
const numb = valuePage.title;


function appropriate(nod, val) {
  nod.appendChild(val);
}

function renderPageInfo(d, item, pageId) {
    if ( item == pageId ) {
      bookAutor.textContent = `${d[item].autor}`
      let pageAnnotation = document.createElement('p');
      pageAnnotation.classList.add('page__annotation');
      pageAnnotation.textContent = `${d[item].anotation}`;
      appropriate(valuePage, pageAnnotation);
      let bookNumPage = document.createElement('p');
      bookNumPage.classList.add('page__num-page');
      bookNumPage.textContent = `${d[item].page} сторінок`
      appropriate(valuePage, bookNumPage);
      let bookIsbn = document.createElement('p');
      bookIsbn.classList.add('page__isbn');
      bookIsbn.innerHTML = `<strong>ISBN: ${d[item].isbn}</strong>`;
      appropriate(valuePage, bookIsbn);
      let bookPrice = document.createElement('p');
      bookPrice.classList.add('page__price');
      if (`${d[item].price}` == ' - ') {
        bookPrice.textContent = 'Немає в наявності :(';
      }
      else {
        bookPrice.textContent = `${d[item].price} грн.`;
      }
      appropriate(valuePage, bookPrice);
    }
  }

fetch('http://www.introligator.com.ua/books.json')
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      renderPageInfo(data, i, numb);
    }
  });


