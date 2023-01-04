function bookShelf(input) {

    const bookShelfStore = {};

    for (const line of input) {

        if (line.includes('->')) {
            let [shelfId, shelfGenre] = line.split(' -> ');

            if (!bookShelfStore.hasOwnProperty(shelfId)) {
                bookShelfStore[shelfId] = { [shelfGenre]: [] };
            }

        } else if (line.includes(':')) {
            let [bookTitle, bookAuthor, bookGenre] = line
                .replace(': ', '&')
                .replace(', ', '&')
                .split('&');

            for (const key in bookShelfStore) {
                if (bookShelfStore[key].hasOwnProperty(bookGenre)) {
                    bookShelfStore[key][bookGenre].push(`--> ${bookTitle}: ${bookAuthor}`);
                    break;
                }
            }
        }
    }

    let sorted = Object.keys(bookShelfStore).sort((a, b) => Object.entries(bookShelfStore[b])[0][1].length - Object.entries(bookShelfStore[a])[0][1].length)

    for (const id of sorted) {
        console.log(`${id} ${Object.keys(bookShelfStore[id])}: ${Object.values(bookShelfStore[id])[0].length}`);
        let sorted = Object.values(bookShelfStore[id]).sort((a, b) => a.localeCompare(b));
        for (const element of sorted) {
            for (const el of element) {
                console.log(el);
            }
        }
    }
}

bookShelf(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history']);