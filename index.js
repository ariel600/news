import data from "./server.js";

const news = data

const form = document.getElementById("add-news")
const nav = document.getElementById("nav")
const main = document.getElementById("main")

function addNews() {
    const author = document.createElement("input")
    author.type = "text"
    author.placeholder = "Enter author"
    author.classList.add("inputs")
    form.appendChild(author)

    const title = document.createElement("input")
    title.type = "text"
    title.placeholder = "Enter title"
    title.classList.add("inputs")
    form.appendChild(title)

    const urlToImage = document.createElement("input")
    urlToImage.type = "text"
    urlToImage.placeholder = "Enter url To Image"
    urlToImage.classList.add("inputs")
    form.appendChild(urlToImage)

    const description = document.createElement("input")
    description.type = "text"
    description.placeholder = "Enter description"
    description.classList.add("inputs")
    form.appendChild(description)

    const content = document.createElement("input")
    content.type = "text"
    content.placeholder = "Enter content"
    content.classList.add("inputs")
    form.appendChild(content)
}

function createNav() {
    const home = document.createElement("button")
    home.onclick =
        home.textContent = "Home"
    nav.appendChild(home)
    home.classList.add("navLinks")

    const news = document.createElement("button")
    news.onclick = //addNews()
    news.textContent = "Add News"
    nav.appendChild(news)
    news.classList.add("navLinks")
}

async function createNewsCard(index) {
    const card = document.createElement("a")
    card.classList.add("card")
    card.href = news[index].url
    main.appendChild(card)

    const title = document.createElement("h1")
    title.classList.add("title")
    title.textContent = news[index].title
    card.appendChild(title)

    const img = document.createElement("img")
    img.classList.add("img")
    img.src = news[index].urlToImage
    card.appendChild(img)

    const author = document.createElement("p")
    author.classList.add("text")
    author.textContent = news[index].author
    card.appendChild(author)
}

function createHome() {
    createNav()
    // for (let i = 0; i < news.length; i++) {
    //     createNewsCard(i)
    // }
}



addNews()
createHome()