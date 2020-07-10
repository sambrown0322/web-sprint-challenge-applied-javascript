// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const articles = "https://lambda-times-backend.herokuapp.com/articles";

let cards = document.querySelector(".cards-container");
function cardMaker(object) {
  let card = document.createElement("div");
  let headline = document.createElement("div");
  let author = document.createElement("div");
  let image = document.createElement("img");
  let name = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  image.classList.add("img-container");

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(image);
  author.appendChild(name);
  console.log(card);

  headline.textContent = object.headline;

  card.addEventListener("click", () => {
    console.log(headline);
  });
  return card;
}
// const articles = "https://lambda-times-backend.herokuapp.com/articles";
axios.get(articles).then((res) => {
  const topics = Object.keys(res.data.articles);
  console.log(topics);
  topics.forEach((topic) => {
    console.log(topic);
    res.data.articles[topic].forEach((article) => {
      cards.appendChild(cardMaker(article));
    });
    // headline.textContent = article.headline;
    // name.textContent = `By ${article.authorName}`;
    // image.src = article.authorPhoto;
    // cards.appendChild(cardMaker(article));
  });
});
