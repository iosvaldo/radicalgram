// write your code here

fetch("http://localhost:3000/images/1")
  .then((res) => res.json())
  .then((data) => renderContent(data));

//create variables for our functions

let renderTitle = document.getElementById("card__title");
let renderImage = document.getElementById("card-image");
let renderlikeBtn = document.getElementById("like-count");

//create a function to render the title image and comments
function renderContent(data) {
  renderTitle.innerText = data.title;
  renderImage.src = data.image;
  renderlikeBtn.innerHTML = data.likes;
}

// fetch request fot the comments
fetch("http://localhost:3000/comments")
  .then((res) => res.json())
  .then((data) => renderComments(data));

let renderComment = document.getElementById("comments-list");

function renderComments(data) {
  for (const item of data) {
    let newComment = document.createElement("li");
    newComment.innerText = item.content;
    renderComment.append(newComment);
  }
}

//crete variable for the form

mainForm = document.getElementById("comment-form");

//Add and event listender for submission & render new comment
mainForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let newInput = document.createElement("li");
  newInput.innerText = comment.value;
  renderComment.append(newInput);
  e.target.reset();
});

let likeBtn = document.getElementById("like-button");
//this is a variable for the like count field
let num = 0;

// addEventListener to incremment the click counter by one.
likeBtn.addEventListener("click", function () {
  num = num + 1;
  renderlikeBtn.innerHTML = num + " likes";
});

let heart = document.getElementById("heart");
heart.addEventListener("click", () => {
  if (heart.classList.contains("red")) {
    heart.classList.add("white");
    heart.src = "assets/whiteHeart.png";
  } else {
    heart.src = "assets/redHeart.png";
  }
});
