let library = [];

class Book {
    constructor(title, author, pages, bookStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.bookStatus = bookStatus;
    }
}

function addBookToLibrary(book) {
    library.push(book);
}

const halo = new Book("Naruto Shippuuden", "Masashi Kishimoto", 254, "read");
const halo2 = new Book("Naruto Shippuuden 2", "Masashi Kishimoto", 254, "read");
const halo3 = new Book("Naruto Shippuuden 3", "Masashi Kishimoto", 254, "read");

addBookToLibrary(halo);
addBookToLibrary(halo2);
addBookToLibrary(halo3);

const btnSubmit = document.querySelector("#btnSubmit");

btnSubmit.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const pages = document.getElementById("pages").value;
    const author = document.getElementById("author").value;
    const status = document.getElementById("read").value;
    const book = new Book(title, author, pages, status);
    addBookToLibrary(book);
    displayBooks();
})

function deleteBook(currentBook) {
    library.splice(currentBook, currentBook + 1);
}

function findBook(libraryArray, name) {
    if (libraryArray.length === 0 || libraryArray === null) {
        return;
    }
    for (let book of libraryArray)
        if (book.title === name) {
            return libraryArray.indexOf(book);
        }
}



function displayBooks() {
    let bookContainer = document.querySelector(".book-container")
    for (let i = bookContainer.childElementCount; i < library.length; i++) {

        let divOne = document.createElement("div");
        const divOneClasses = ["book", "card", "text-center", "col-2"];
        divOne.classList.add(...divOneClasses);
        divOne.dataset.index = i;
        bookContainer.appendChild(divOne);


        let divTwo = document.createElement("div");
        divTwo.classList.add("card-header");
        divTwo.textContent = library[i].author;
        divOne.appendChild(divTwo);

        let divThree = document.createElement("div");
        divThree.classList.add("card-body");
        divOne.appendChild(divThree)

        let author = document.createElement("h5");
        author.classList.add("card-title");
        author.textContent = library[i].title;
        divThree.appendChild(author)

        let pages = document.createElement("p");
        pages.classList.add("card-text");
        pages.textContent = library[i].pages;
        divThree.appendChild(pages)

        let btnRead = document.createElement("a");
        btnRead.classList.add("btn")
        if (library[i].bookStatus == "read") {
            btnRead.textContent = "I've Read this Book"
            btnRead.classList.add("btn-primary");
        } else {
            btnRead.textContent = "Need to Read"
            btnRead.classList.add("btn-danger");
        }
        btnRead.addEventListener("click", () => {
            if (library[i].bookStatus == "read") {
                btnRead.classList.toggle("btn-primary");
                btnRead.textContent = "Need to Read"
                btnRead.classList.toggle("btn-danger");
                library[i].bookStatus = "notread";
            } else {
                btnRead.classList.toggle("btn-primary");
                btnRead.textContent = "I've read this book"
                btnRead.classList.toggle("btn-danger");
                library[i].bookStatus = "read";
            }
        })
        divThree.appendChild(btnRead);

        let btnDelete = document.createElement("a");
        btnDelete.classList.add("btn");
        btnDelete.classList.add("btn-danger");
        btnDelete.textContent = "Delete";
        divThree.appendChild(btnDelete);
        btnDelete.addEventListener("click", (e) => {
            const currenttarget = e.target.parentNode.parentNode.childNodes[1].childNodes[0];
            if (e.target.innerHTML == "Delete") {
                console.log(currenttarget)
                deleteBook(findBook(library, currenttarget.innerText));
            }
        }
        )

        let divFour = document.createElement("div");
        divFour.classList.add("card-footer");
        divFour.classList.add("text-muted");
        divFour.textContent = "2 days ago";
        divOne.appendChild(divFour);

    }
}


displayBooks();

// k            if () {

// } else {
//     btnRead.classList.toggle("btn-danger");
//     btnRead.textContent = "I've read this Book"
// }