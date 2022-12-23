// data variables
const radicalgramAPI = "http://localhost:3000/images/1";
const commentsAPI = "http://localhost:3000/comments";

fetch(radicalgramAPI)
  .then((response) => response.json())
  .then(renderConent);

//create variables for our functions
let renderTitle = document.getElementById("card__title");
let renderImage = document.getElementById("card__image");
let renderLikeCount = document.getElementById("like__count");

//create a function to render the title image and comments
function renderConent(data) {
  renderTitle.innerHTML = data.title;
  renderImage.src = data.image;
  renderLikeCount.innerText = data.likes;
}

// fetch request fot the comments
fetch(commentsAPI)
  .then((res) => res.json())
  .then(renderComments);

//create variable for comment
let renderComment = document.getElementById("comments__list");

//create function to render comments & for loop.
function renderComments(data) {
  for (const item of data) {
    let newComment = document.createElement("li");
    newComment.innerHTML = item.content;
    renderComment.append(newComment);
  }
}

//create variable for the form
mainform = document.getElementById("comment__form");

//Add Event Listener to the form submission button
mainform.addEventListener("submit", function (e) {
  e.preventDefault();
  let newInput = document.createElement("li");
  newInput.className = "stored-input";
  newInput.innerHTML = comment.value;
  renderComment.append(newInput);
  logKey();
  e.target.reset();
});

// localStorage in use but need to be clean it up.
const input = document.querySelector("input"),
  li = document.querySelector(".h_3");
li.innerHTML = localStorage.getItem("value");
input.addEventListener("keyup", logKey);

function logKey() {
  localStorage.setItem("value", input.value);
  li.innerHTML = localStorage.getItem("value");
}

// second attempt at local storage
// const commentForm = document.getElementById("comment__form");
// const commentUl = document.getElementById("comment");
// const commentInput = commentForm["comment"];

// const comments = JSON.parse(localStorage.getItem("comments")) || [];

// const addComment = (comment) => {
//   comments.push({
//     comment
//   })
//   localStorage.setItem("comments", JSON.stringify(comments))
//   return { comment };
// };

// const createCommentElement = (comment) => {
//   const commentDiv = document.createElement("div");
//   const userComment = document.createElement("li");

//   userComment.innerText = "Add a comment:" + comment;
//   commentDiv.append(userComment);
//   commentUl.appendChild(commentDiv);
// };

// comments.forEach(createCommentElement)

// commentForm.onsubmit = e => {
//   e.preventDefault();
//   const newComment = addComment(
//     commentInput.value
//   );
//   createCommentElement(newComment)

//   commentInput.value = '';
// };
