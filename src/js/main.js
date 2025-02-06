var header = document.querySelector(".header");
var headerTitle = document.querySelector(".header-title");

function toggleColor() {
  header.classList.toggle("is-active");
  headerTitle.classList.toggle("is-active");
}
header.addEventListener("click", toggleColor);

var textBottom = document.querySelector(".product-bottom");
var button = document.querySelector(".button");
var productColor = document.querySelector(".product");

function showText() {
  textBottom.classList.toggle("is-active");
  productColor.classList.toggle("is-active");
}
button.addEventListener("click", showText);
