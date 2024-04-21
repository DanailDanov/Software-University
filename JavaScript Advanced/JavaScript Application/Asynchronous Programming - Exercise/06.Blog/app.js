function attachEvents() {

    const select = document.getElementById('posts');
    const loadPostBtn = document.getElementById('btnLoadPosts');
    const viewPostBtn = document.getElementById('btnViewPost');
    const pText = document.getElementById('post-body');
    const postDetails = document.getElementById('post-title');
    const postComments = document.getElementById('post-comments');

    console.log(postComments);

    const loadPostUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const viewPostUrl = 'http://localhost:3030/jsonstore/blog/comments';

    const posts = [];

    loadPostBtn.addEventListener('click', (e) => {

        select.innerHTML = '';

        fetch(loadPostUrl)
            .then(res => res.json())
            .then(data => {

                Object.values(data).forEach((x) => {

                    const option = document.createElement('option');
                    option.value = x.id;
                    option.textContent = x.title

                    select.appendChild(option);

                    posts.push({ title: x.title, body: x.body })
                })
            })
    })


    viewPostBtn.addEventListener('click', () => {

        postDetails.textContent = select.selectedOptions[0].textContent;
        const postDetailsText = posts.filter(p => p.title === select.selectedOptions[0].textContent);
        pText.textContent = postDetailsText[0].body;

        postComments.innerHTML = '';

        fetch(viewPostUrl)
            .then(res => res.json())
            .then(data => {

                let comments = Object.values(data).filter(el => el.postId === select.value);

                comments.forEach((el) => {

                    const li = document.createElement('li');
                    li.textContent = el.text;

                    postComments.appendChild(li);
                })

            })
    })
}

attachEvents();