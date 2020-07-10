// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
axios.get("https://lambda-times-backend.herokuapp.com/topics").then((res) => {
  res.data.topics.forEach((topic) => {
    const actualData = tabMaker(topic);
    entryPoint.appendChild(actualData);
  });
});
// const topics = ["javascript", "bootstrap", "technology", "jquery", "node.js"];
let entryPoint = document.querySelector(".topics");
function tabMaker(object) {
  let tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = object;

  return tab;
}
// topics.forEach((item) => {
//   const actualData = tabMaker(item);
//   entryPoint.appendChild(actualData);
// })
