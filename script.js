const q = document.getElementById("quote");
const a = document.getElementById("author");
let quotes = [];

fetch("https://type.fit/api/quotes")
.then(resp => resp.json())
.then(data => {
    quotes = data;
    const num = Math.floor(Math.random() * data.length);
    // console.log(num);
    const quote = data[num].text;
    const author = data[num].author === null ? "unkown" : data[num].author;
    q.innerHTML = `"${quote}"`;
    a.innerHTML = author;
    // console.log(data);
});

document.getElementById("button").addEventListener("click", () => {
    const num = Math.floor(Math.random() * quotes.length);
    // console.log(num);
    const quote = quotes[num].text;
    const author = quotes[num].author === null ? "unkown" : quotes[num].author;
    q.innerHTML = `"${quote}"`;
    a.innerHTML = author;
    // console.log(quotes);
});
