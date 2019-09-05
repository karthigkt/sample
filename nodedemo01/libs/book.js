class Book{
    constructor(title,author,rating,price){
        this.title=title;
        this.author=author;
        this.price=price;
        this.rating=rating;
    }

    toString(){
        return `${this.price}\t${this.rating}\t${this.title}\t${this.author}`;
    }
}

//default single item export
//module.export is Book
module.exports=Book;