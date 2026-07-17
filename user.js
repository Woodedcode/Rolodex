console.log(localStorage.getItem("id"));

async function main() {
    const id = localStorage.getItem("id")
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postData = await posts.json();

    console.log(postData)
}

main()