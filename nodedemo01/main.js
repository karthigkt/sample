const Book=require('./libs/book');

//const {BookStore}=require('./libs/bookstore');

const store=require('./libs/BookStore');
const util=require('./libs/utils');


let bookStore=store.getDummyBookStore();
let books=bookStore.getAll();

util.showList('All Books', books);

let highRated= util.search(books, b=>b.rating>4.5);

util.showList('High rated books', highRated);

let dinkarBooks= util.search(books, b=> b.author==='Ramdhari Singh Dinkar');

console.log('typeof(dinkarBooks)',typeof(dinkarBooks));
console.log('dinkarBooks',dinkarBooks);

//can I get an array of books

let dinkarBookList= [...dinkarBooks]; //generator is consumed here

console.log('dinkarBookList',dinkarBookList);
console.log('typeof(dinkarBookList)',typeof(dinkarBookList));


util.showList('Books written by Dinkar', dinkarBooks); //nothing left in generator to show


// var priceRange=function(book){
//     return book.price>=200 && book.price<300;
// }


//var priceRange= function(book) { return book.price>=200 && book.price<300; };

// var priceRange= (book) => { 
//     return book.price>=200 && book.price<300; 
// };

//var priceRange= book =>   book.price>=200 && book.price<300;



let result=util.search(books, book =>   book.price>=200 && book.price<300);
util.showList('Books in Price range 200-300', result);




