const booksList = document.querySelector(['data-books-list']);
const booksURL = "www.introligator.com.ua/books";

const booksRequest = new XMLHttpRequest();
booksRequest.open('GET', booksURL);
booksRequest.responseType = 'json';
booksRequest.send();

booksRequest.onload = function() {
    let books = booksRequest.response;
    showBooks(books);
}

function showBooks(booksCard) {
    for(let i=0; i<booksCard.length; i++ ) {
        let myImage = document.createElement('img');
        let myName = document.createElement('h3');
        let myAutor = document.createElement('h4');
        let myAnotation = document.createElement('p');
        let myType = document.createElement('p');
        let myPage = document.createElement('p');
        let myIsbn = document.createElement('p');
        let myPrice = document.createElement('h4');

        
    }
}