const icon = document.querySelector(".fa-ellipsis-vertical");
const post = document.querySelector(".op");
const times = document.querySelector(".fa-circle-xmark");
// const overlay = document.querySelector(".overlay");

icon.addEventListener("click", function () {
  console.log("running");
  post.classList.remove("hidden");
  // overlay.classList.remove("hidden");
});

times.addEventListener("click", function () {
  post.classList.add("hidden");
  // overlay.classList.add("hidden");
});
// overlay.addEventListener("click", function () {
//   post.classList.add("hidden");
//   overlay.classList.add("hidden");
// });
