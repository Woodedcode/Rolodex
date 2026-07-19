const postListEl = document.querySelector('.post-list');
const id = localStorage.getItem("id");

async function onSearchChange() {
    const id = event.target.value;
    renderPosts(id);
    console.log(renderPosts);
}

async function renderPosts(id) {
const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
const postsData = await post.json();
postListEl.innerHTML = postsData.map(post => postHTML(post)).join('');
}

function postHTML(post) {
    return `
    <div class="post">
    <div class="post-title">
        ${post.title}
    </div>
    <p class="post-body">
        ${post.body}
    </p>
    </div>
    `
}

renderPosts(id);
