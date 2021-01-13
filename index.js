function fetchBooks() {

}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function fetchBooks() {
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  targetUrl = 'https://anapioficeandfire.com/api/books'
  return fetch(proxyUrl + tragetUrl) .then(resp => resp.json()).then(json => renderBooks(json));

 
})

 
