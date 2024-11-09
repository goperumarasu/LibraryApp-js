
class Library {
    constructor() {
        this.books = []; // Array to store books
    }
    
    // Method to add a book to the library
    addBook(book) {
        this.books.push(book);
    }
    getbooks()
     { return this.books }
    bookCount(){
        return this.books.length;
    }
    removeBooks(index){
        if(index >=0 && index <= this.books.length){
            this.books.splice(index,1)
        }
    }
}
