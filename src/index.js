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

//crete variable for the form

mainform = document.getElementById("comment-form")

//Add and event listender for submission & render new comment
mainform.addEventListener("submit", function (e) {
  e.preventDefault();
  let newInput = document.createElement("li");
  newInput.innerHTML = comment.value;
  renderComment.append(newInput);
  e.target.reset();
})

let likeBtn = document.getElementById("like-button");
//this is a variable for the like count field
let num = 0;

// addEventListener to incremment the click counter by one.
likeBtn.addEventListener("click", function () {
  num = num + 1;
  renderLikeCount.innerHTML = num + " likes";
  if (heart.classList.contains("white")) {
    heart.src = "assets/redHeart.png";
  } else {
    heart.src = "assets/blkHeart.png";
  }
});

