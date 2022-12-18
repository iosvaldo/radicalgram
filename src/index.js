// write your code here
fetch("http://localhost:3000/images/1")
  .then((response) => response.json())
  .then((data) => renderConent(data))


//create variables for our functions
let renderTitle = document.getElementById("card__title");
let renderImage = document.getElementById("card-image");
let renderLikeCount = document.getElementById("like-count");


//create a function to render the title image and comments
function renderConent(data) {
  renderTitle.innerHTML = data.title;
  renderImage.src = data.image;
  renderLikeCount.innerText = data.likes;
}

// fetch request fot the comments
fetch("http://localhost:3000/comments")
  .then((res) => res.json())
  .then((data) => renderComments(data))

//create variable for comment
let renderComment = document.getElementById("comments-list");

//crete dunction to render comments & for loop.
function renderComments(data) {
  for (const item of data) {
    let newComment = document.createElement("li")
    newComment.innerHTML = item.content;
    renderComment.append(newComment);
  }
}

//create variable for the form

mainform = document.getElementById("comment-form");

//Add Event Listener to the form submission button

mainform.addEventListener("submit", function (e) {
  e.preventDefault();
  let newInput = document.createElement('li');
  newInput.className = "stored-input"
  newInput.innerHTML = comment.value;
  renderComment.append(newInput);
  e.target.reset();
})

// localStorage in use but need to clean it up. 
const input = document.querySelector(".comment-input"),
  h2 = document.querySelector(".heading_2");

   h2.innerHTML = localStorage.getItem("value");

input.addEventListener("keyup", display);
  
function display() {
  // h2.innerText = input.value;
  localStorage.setItem("value", input.value);
  // console.log();
 h2.innerHTML = localStorage.getItem("value");
  
}
