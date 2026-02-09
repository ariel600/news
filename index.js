import data from "./server.js";

const news = data

const root = document.getElementById("root")
const form = document.createElement("form")
const nav = document.createElement("nav")
const main = document.createElement("main")
root.append(nav, form, main)

function addNews() {
    const data = {}

    const author = document.createElement("input")
    author.type = "text"
    author.name = "text"
    author.placeholder = "Enter author"
    author.classList.add("inputs")

    const title = document.createElement("input")
    title.type = "text"
    title.placeholder = "Enter title"
    title.classList.add("inputs")

    const urlToImage = document.createElement("input")
    urlToImage.type = "text"
    urlToImage.placeholder = "Enter url To Image"
    urlToImage.classList.add("inputs")

    const description = document.createElement("textarea")
    description.rows = 2
    description.placeholder = "Enter description"
    description.classList.add("inputs")

    const content = document.createElement("textarea")
    content.rows = 8
    content.placeholder = "Enter content"
    content.classList.add("inputs")

    const btn = document.createElement("button")
    btn.type = "submit"
    btn.textContent = "Send"
    btn.id = "send"

    form.append(author, title, urlToImage, description, content, btn)
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

    const img = document.createElement("img")
    img.classList.add("img")
    img.src = news[index].urlToImage

    const author = document.createElement("p")
    author.classList.add("text")
    author.textContent = news[index].author

    card.appendChild(title, img, author)
}

function createHome() {
    createNav()
    // for (let i = 0; i < news.length; i++) {
    //     createNewsCard(i)
    // }
}



addNews()
createHome()