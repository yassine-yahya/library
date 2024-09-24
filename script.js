//define library array

const myLibrary = [];



const bookCard = document.querySelector('.book-card');
const modal = document.querySelector('.dialog-modal');
const submitButton = document.querySelector('.btn-submit').addEventListener('click', (e) => {
    e.preventDefault();
  
    const title = document.querySelector('#book-name').value;
    const author = document.querySelector('#book-author').value;
    const read = document.querySelector('#book-read').checked;
    
    
    if(title === '' || author === ''){
        alert('Please fill in all fields');
        return;
    }
    modal.close();
    modal.style.display ='none';
    
    addBookToLibrary(title, author, read);
    submitButton.classList.add('btn-submit');


});

//add button to show modal
const addButton = document.querySelector('.add-book').addEventListener('click', () => {
    modal.style.display ='block' 

})


const closeModal = document.createElement('button');
closeModal.textContent = "close";
closeModal.classList.add('close-btn');
modal.appendChild(closeModal);
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
})




//constructor for book object
function Book(title, author, read){
    this.title = title;
    this.author = author;
    this.read = read;
}

//function to add book
function addBookToLibrary(title, author, read){
    const newBook = new Book(title, author, read);
    
    // push book to Library
    myLibrary.push(newBook);
    const card = document.createElement('div');
card.classList.add('card'); // Add class to the card

// Create a paragraph element for the text
const cardText = document.createElement('p'); // Use document.createElement
cardText.classList.add('card-text'); // Correct way to add class

// Set the text content of the paragraph
cardText.textContent = `${newBook.title} by ${newBook.author}`;

// Append the paragraph to the card
card.appendChild(cardText);

// Append the card to the bookCard container
bookCard.appendChild(card);
    //create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = "remove";
    removeButton.classList.add('remove-book')
    card.appendChild(removeButton);

    //create read status button
    const readButton = document.createElement("button");
    readButton.textContent = "not read";
    readButton.classList.add('read-book')
    card.appendChild(readButton);

    //event for button to read status
    readButton.addEventListener('click', () => {
        if (readButton.textContent === 'not read')
            {
            readButton.textContent = 'read';
            readButton.style.backgroundColor = 'lightGreen'
            }
            else
            {
            readButton.textContent = 'not read'
             readButton.style.backgroundColor = 'lightBlue'
            }
        
        newBook.read = 'true';
    })



    //event for button to remove book
    removeButton.addEventListener('click', ()=> {
        removeBook(newBook);
        card.remove();
    } )
   
}


//function to remove book

function removeBook(book) {
    
    const bookIndex = myLibrary.indexOf(book);
    if (bookIndex > -1){
        myLibrary.splice(bookIndex, 1);
    }

}

//function to loop through library

function loopLibrary(){
    for(let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i].title)

    }
}


addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 'true');
addBookToLibrary('Harry Potter', 'J.K. Rowling', 'false');
loopLibrary();




