let data;
const local = localStorage.getItem("news")

// if (!local) {
    // await fetch("https://newsapi.org/v2/everything?q=news&language=he&apiKey=be2f6dc8cd7a4e9086a516f0a4f06aff")
    // await fetch("https://newsapi.org/v2/everything?q=news&language=he&apiKey=be2f6dc8cd7a4e9086a516f0a4f06aff")
    await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=e6d0cc2435c44129a5f0804ad952d9e1")
    .then(val => val.json())
    .then(val => data = val.articles)
// localStorage.setItem("news", JSON.stringify(data))
// } else {
//     data = JSON.parse(localStorage.getItem("news"))
//     console.log(data)
// }
console.log(data)

export default data