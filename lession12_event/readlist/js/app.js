const ul = document.querySelector('.booksList ul');
const forms = document.forms;

// delete books 
ul.addEventListener('click', (e) => {
    if(e.target.className == 'booksList_delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
        saveBooks();
    }
});

// filter books
const searchBook = forms['books_search'];
searchBook.addEventListener('keyup', (e) => {
    e.preventDefault();

    const input = searchBook.querySelector('input');
    const filter = input.value.toUpperCase();
    const li = ul.querySelectorAll('li');

    for (let i = 0; i < li.length; i++){
        const span = li[i].querySelector('.booksList_name');
        const name = span.textContent;
        if(name.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = ''
        } else {
            li[i].style.display = 'none';
        }
    }
}) 

// save books
function saveBooks(){
    let listBooks = [];
    const li = ul.querySelectorAll('li');
    for (let i = 0; i < li.length; i++){
        const span = li[i].querySelector('.booksList_name');
        let bookInfo = {
            'name': span.textContent,
            'completed': li[i].classList.contains('completed')
        }
        listBooks.push(bookInfo);
    }
    localStorage.setItem('listBooks', JSON.stringify(listBooks));

}
// load books
function loadBooks(){
    if (localStorage.getItem('listBooks' != null)){
        let listBooks = JSON.parse(localStorage.getItem('listBooks'));
        ul.innerHTML = '';
        for (let i = 0; i < listBooks.length; i++){
            let book = listBooks[i];
            readBooks(book.name, book.completed);
        }
    }
    
}

// read books
function readBooks(inputValue, completed){
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add text content
    bookName.textContent = inputValue;
    deleteBtn.textContent = 'delete';

    // add class 
    bookName.classList.add('bookList_name');
    deleteBtn.classList.add('bookList_delete');

    li.appendChild(bookName);
    li.appendChild(deleteBtn);

    if (completed){
        li.classList.add('completed');
    }

    ul.appendChild(li);

    li.addEventListener('click', toggleFinal);

    // reset input
    document.querySelector('.booksAdd input').value = '';

}
// store
saveBooks();

function toggleFinal(){
    if(this.classList.contains('completed')){
        this.classList.remove('completed')
    } else{
        this.classList.add('completed');
    }
}

// add books 
const addForm = forms['booksAdd'];
addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = e.target.querySelector('input').value;
    if (input == ''){
        alert('Please enter the book');
        return;
    }
    readBooks(input, false);
})

loadBooks();