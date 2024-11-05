'use strict'


function onInit() {
    renderBooks()
}

function renderBooks() {
    const elBooks = document.querySelector('.books-body-container')
    const books = getBooks()

    const strHtmls = books.map(book => `
        <tr>
            <td>
                <img src="${book.imgUrl}" alt="Book Cover">
            </td>
            <td>${book.title}</td>
            <td>${book.price}</td>
            <td>
                <button class="read-btn" onclick="onShowBookDetails('${book.sku}')">Read</button>
                <button class="update-btn" onclick="onUpdateBook('${book.sku}')">Update</button>
                <button class="remove-btn" onclick="onRemoveBook('${book.sku}')">Remove</button>
            </td>
        </tr>`
    )
    elBooks.innerHTML = strHtmls.join('')
}

function onAddBook() {
    addBook()
    renderBooks()
}

function onShowBookDetails(sku) {

    const book = getBookBySKU(sku)
    renderBookDetails(book)
    
    const elModal = document.querySelector('.modal')
    elModal.showModal()
}

function renderBookDetails(book) {
    const elBookDetails = document.querySelector('.book-details')
    
    elBookDetails.innerHTML = `
    <h2>${book.title}</h2>
    <p><strong>Price: </strong>${book.price}</p>
    <p><strong>SKU: </strong>${book.sku}</p>
    `;
}

function onCloseBookDetails() {
    const elModal = document.querySelector('.modal')
    elModal.close()
}

function onUpdateBook(sku) {
    updateBook(sku)
    renderBooks()
}

function onRemoveBook(sku) {
    removeBook(sku)
    renderBooks()
}
