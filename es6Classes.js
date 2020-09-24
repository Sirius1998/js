/* es6 classes does the same thing object and prototype did in es5 */

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} by ${this.author} in ${this.year}`;
    }
}

// sub class has everythin it's parent class has
// Magazine subclass
class Magazine extends Book {
    constructor(title, author, year, month) {
        // invokes the parent constructor
        super(title, author, year);
        this.month = month;
    }
}

const mag1 = new Magazine("Mag One", "Will Stone", "2018", "Jan");
console.log(mag1);


