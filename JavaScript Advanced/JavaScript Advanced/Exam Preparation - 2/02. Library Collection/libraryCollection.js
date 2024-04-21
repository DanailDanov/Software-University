class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length < this.capacity) {
            const bookInformation = { bookName, bookAuthor, payed: false };
            this.books.push(bookInformation);
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        } else {
            throw new Error('Not enough space in the collection.')
        }
    }

    payBook(bookName) {
        let isFindBook = this.books.find(x => x.bookName === bookName);

        if (isFindBook === undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        } else if (isFindBook.payed === true) {
            throw new Error(`${bookName} has already been paid.`);
        } else {
            isFindBook.payed = true;
            return `${bookName} has been successfully paid.`;
        }
    }

    removeBook(bookName) {
        let isFindBook = this.books.find(x => x.bookName === bookName);
        let index = this.books.indexOf(isFindBook);

        if (isFindBook === undefined) {
            throw new Error(`The book, you're looking for, is not found.`);

        } else if (isFindBook.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        } else {
            this.books.splice(index, 1);

            return `${bookName} remove from the collection.`
        }
    }

    getStatistics(bookAuthor) {

        if (bookAuthor === undefined) {
            const emptySlots = this.capacity - this.books.length;

            let result = [`The book collection has ${emptySlots} empty spots left.`];
            let sorted = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

            for (const element of sorted) {

                if (element.payed === false) {
                    result.push(`${element.bookName} == ${element.bookAuthor} - Not Paid.`);
                } else {
                    result.push(`${element.bookName} == ${element.bookAuthor} - Has Paid.`);
                }
            }
            return result.join('\n');
        } else {
            let isFindAuthor = this.books.find(x => x.bookAuthor === bookAuthor);

            if (isFindAuthor === undefined) {
                throw new Error(`${bookAuthor} is not in the collection.`)
            } else {
                if (isFindAuthor.payed === false) {
                    return `${isFindAuthor.bookName} == ${isFindAuthor.bookAuthor} - Not Paid.`;
                } else {
                    return `${isFindAuthor.bookName} == ${isFindAuthor.bookAuthor} - Has paid.`;
                }
            }
        }
    }
}

const library = new LibraryCollection(5)

library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());




