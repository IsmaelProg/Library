let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function (){
        console.log(title + ', escrito por ' + author + 'tiene ' + pages + ', ' + read)
    }
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    createDiv();
}


function addBooktoLibrary () {
    let title = document.querySelector('#titulo').value;
    let author = document.querySelector('#autor').value;
    let pages = document.querySelector('#paginas').value;
    let read = document.querySelector('#leido').checked;
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    createDiv()
}

function removeBook (index) {
    myLibrary.splice(index, 1);
    createDiv();
}


const form = document.querySelector('.formL')

const btn = document.querySelector('#btnAdd');
btn.addEventListener('click', () => {
   form.classList.add('visible')
})


document.querySelector('#new-book-form').addEventListener('submit', () => {
    event.preventDefault();
    addBooktoLibrary ();
    form.classList.remove('visible')
})

function createDiv() {
    let container = document.querySelector('.main');
    container.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++){
        
        let book = myLibrary[i];
        let newDiv = document.createElement('div');
        newDiv.classList.add('fichaLibro')
        newDiv.innerHTML = `
        <div class="bookCard">
          <div class="card-header">
            <h3>${book.title}</h3>
            <h5>by ${book.author}</h5>
          </div>
           <div class="card-body">
            <p>${book.pages} pages</p>
            <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>           
            <button class='toggle-read-btn' onclick="toggleRead(${i})">Leido</button>
            <button class='remove-btn' onclick="removeBook(${i})">Borrar</button>
          </div>
        </div>  
        `;
        container.appendChild(newDiv)
    }
    
}