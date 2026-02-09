let data;
const local = localStorage.getItem("news")

// if (!local) {
    // await fetch("https://newsapi.org/v2/top-headlines?language=he&apiKey=d1ded1c9017745ad92fe2abe67cb70c3")
await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=d1ded1c9017745ad92fe2abe67cb70c3")
    .then(val => val.json())
    .then(val => data = val.articles)
//     localStorage.setItem("news", JSON.stringify(data))
// } else {
//     data = JSON.parse(localStorage.getItem("news"))
//     console.log(data)
// }
console.log(data)

export default data