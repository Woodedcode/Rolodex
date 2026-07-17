localStorage.getItem("id");
const postListEl = document.querySelector('.post-list');

async function main() {
    const id = localStorage.getItem("id")
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postData = await posts.json();

    postListEl.innerHTML = postData.map(post => `
        <div class="post">
            <div class="post__title">
                ${user.postTitle}</
            </div>
            <p class="post__body">
                ${user.post}</
            </p>
        </div>
        `
    ).join('');
}

main();
