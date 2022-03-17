const booksList = document.querySelector(['data-books-list']);
const booksURL = 'http://www.introligator.com.ua/books';


function load() {
    let booksRequest = new XMLHttpRequest();
    booksRequest.open('GET', booksURL);
    booksRequest.responseType = 'json';
    booksRequest.send();
}
console.log(load());

