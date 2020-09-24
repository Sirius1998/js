// ES5  
// Constructor 
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// custom prototype object method
Book.prototype.getSummary = function() {
    return `${this.title} by ${this.author} in ${this.year}`;
};

// Instantiate book object
// const onePiece = new Book("One Piece", "Oda Eichiro", "1997");
// console.log(onePiece.author);

// Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

// Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}
// Instantiate Magazine objects
const mag1 = new Magazine("Mag One", "Shelly", "2018", "Jan");

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1.getSummary());