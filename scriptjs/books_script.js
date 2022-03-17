let booksList = document.querySelector('.main__books');
console.log(booksList);
let a;

fetch('http://www.introligator.com.ua/books.json')
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i].name);
        let bookName = document.createElement('H2');
        bookName.textContent = `${data[i].name}`;
        console.log(bookName);
        booksList.appendChild(bookName);
    }
  });


