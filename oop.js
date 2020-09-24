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

// getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

// Revise / change year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revise = true;
}

// instantiate an object
const book1 = new Book("Book One", "Will", 2016);
const book2 = new Book("Book Two", "Lucifer", 2000);

console.log(book2.year);
book2.revise(2019);
console.log(book2.year);
