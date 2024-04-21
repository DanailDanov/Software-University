function oldBooks(input) {

    let index = 0;
    let nameOfBooks = input[index];
    index++;
    let nextBooks = input[index];

    let booksCounter = 0;

    while (nextBooks !== "No More Books") {

        if (nextBooks === nameOfBooks) {
            console.log(`You checked ${booksCounter} books and found it.`);
            break;
        }
        
        booksCounter++;

        index++
        nextBooks = input[index]
    }

    if (nextBooks != nameOfBooks) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksCounter} books.`);
    }

}

oldBooks(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])


