function comments(input) {


    const commentsStore = { usersList: [], articleList: [], comments: {} };

    for (const line of input) {

        if (line.includes('user')) {
            let user = line.split('user ').join('');

            commentsStore.usersList.push(user);
        } else if (line.includes('article')) {
            let articleName = line.split('article ').join('');

            commentsStore.articleList.push(articleName)
        } else if (line.includes('posts on')) {
            let [user, article, commentTitle, commentContent] = line
                .replace(' posts on ', '&')
                .replace(': ', '&')
                .replace(', ', '&')
                .split('&');

            if (commentsStore.usersList.includes(user) && commentsStore.articleList.includes(article)) {
                if (!commentsStore.comments.hasOwnProperty(article)) {
                    commentsStore.comments[article] = [{ [user]: `--- From user ${user}: ${commentTitle} - ${commentContent}` }]
                } else {
                    commentsStore.comments[article].push({ [user]: `--- From user ${user}: ${commentTitle} - ${commentContent}` })
                }
            }
        }
    }

    let sorted = Object.entries(commentsStore.comments).sort((a, b) => b[1].length - a[1].length);

    for (const [element, comments] of sorted) {
        
        console.log(`Comments on ${element}`);
        let sorted = comments.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]));

        for (const line of sorted) {
            let [user, comments] = Object.entries(line)[0];
            console.log(comments);
        }
    }
}

comments(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much']);