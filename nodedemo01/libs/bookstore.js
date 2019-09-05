const Book= require('./book');

class BookStore{
    
    constructor(){
        this.books=[];
    }

    getAll(){
        return this.books;
    }

    getByTitle(title){
        for(let book of books)
            if(book.title===title)
                return book;

        return null;
    }

    addBook(book){
        this.books.push(book);
    }
}


function getDummyBookStore(){
    let store=new BookStore();
    store.addBook(new Book('The Count of Monte Cristo','Alexandre Dumas',4.8,250));
    store.addBook(new Book('The Brethren','John Grisham',4.1,320));
    store.addBook(new Book('Sons of Fortune','Jeffrey Archer',4.3,350));
    store.addBook(new Book('Rashmirathi','Ramdhari Singh Dinkar',4.9,120));
    store.addBook(new Book('Kane and Abel','Jeffrey Archer',4.5,280));
    store.addBook(new Book('Kurukshetra','Ramdhari Singh Dinkar',4.6,170));

    return store;
}


//exporting multiple things from a module
//module.exports has BookStore and getDummyBookStore
module.exports.BookStore=BookStore;
module.exports.getDummyBookStore=getDummyBookStore;