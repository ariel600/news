import data from "./server.js";

const news = data;

const root = document.getElementById("root");
const form = document.createElement("form");
const nav = document.createElement("nav");
const main = document.createElement("main");
form.id = "form";
nav.id = "nav";
main.id = "main";
root.append(nav, form, main);

function addNews() {
    main.innerHTML = "";
    const data = {};
    const author = document.createElement("input");
    author.type = "text";
    author.name = "text";
    author.placeholder = "Enter author";
    author.classList.add("inputs");
    author.addEventListener('change', function (event) {
        data.author = event.target.value;
    });
    const title = document.createElement("input");
    title.type = "text";
    title.placeholder = "Enter title";
    title.classList.add("inputs");
    title.addEventListener('change', function (event) {
        data.title = event.target.value;
    });
    const urlToImage = document.createElement("input");
    urlToImage.type = "text";
    urlToImage.placeholder = "Enter url To Image";
    urlToImage.classList.add("inputs");
    urlToImage.addEventListener('change', function (event) {
        data.urlToImage = event.target.value;
    });
    const description = document.createElement("textarea");
    description.rows = 2;
    description.placeholder = "Enter description";
    description.classList.add("inputs");
    description.addEventListener('change', function (event) {
        data.description = event.target.value;
    });
    const content = document.createElement("textarea");
    content.rows = 8;
    content.placeholder = "Enter content";
    content.classList.add("inputs");
    content.addEventListener('change', function (event) {
        data.content = event.target.value;
    });
    const btn = document.createElement("button");
    btn.type = "submit";
    btn.textContent = "Send";
    btn.id = "send";
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        news.unshift(data);
        form.innerHTML = "";
        createHome();
    });
    form.append(author, title, urlToImage, description, content, btn);
};

function createNav() {
    const home = document.createElement("button");
    home.addEventListener('click', function () {
        main.innerHTML = "";
        form.innerHTML = "";
        createHome();
    });
    home.textContent = "Home";
    home.classList.add("navLinks");
    const news = document.createElement("button");
    news.addEventListener('click', function () {
        main.innerHTML = "";
        form.innerHTML = "";
        addNews();
    });    
    news.textContent = "Add News";
    news.classList.add("navLinks");
    nav.append(home, news);
};    

function getNews(index) {
    main.inert = "";

    const card = document.createElement("div");
    card.classList.add("get-card");
    card.href = news[index].url;
    main.appendChild(card);

    const title = document.createElement("h1");
    title.classList.add("get-title");
    title.textContent = news[index].title;

    const urlToImage = document.createElement("img");
    urlToImage.classList.add("get-img");
    urlToImage.src = news[index].urlToImage;

    const description = document.createElement("p");
    description.classList.add("get-description");
    description.textContent = news[index].author;

    const content = document.createElement("p");
    content.classList.add("get-content");
    content.textContent = news[index].author;

    const author = document.createElement("p");
    author.classList.add("get-author");
    author.textContent = news[index].author;

    card.append(title, urlToImage, description, content, author);
};

async function createNewsCard(index) {
    const card = document.createElement("a");
    card.classList.add("card");
    card.href = "getNews(index)";
    main.appendChild(card);
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = news[index].title;
    const img = document.createElement("img");
    img.classList.add("img");
    img.src = news[index].urlToImage;
    const author = document.createElement("p");
    author.classList.add("text");
    author.textContent = news[index].author;
    card.append(title, img, author);
    news.addEventListener('click', function () {
        getNews(index);
    })    
};    

function createHome() {
    for (let i = 0; i < news.length; i++) {
        if (news[i].title && news[i].urlToImage)
            createNewsCard(i);
    };
};

createNav();
createHome();