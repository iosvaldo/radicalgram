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

