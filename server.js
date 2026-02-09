let data;
const local = localStorage.getItem("news")

// if (!local) {
await fetch("https://newsapi.org/v2/everything?q=news&language=ar&apiKey=be2f6dc8cd7a4e9086a516f0a4f06aff")
    .then(val => val.json())
    .then(val => data = val.articles)
// localStorage.setItem("news", JSON.stringify(data))
// } else {
//     data = JSON.parse(localStorage.getItem("news"))
//     console.log(data)
// }
console.log(data)

export default data