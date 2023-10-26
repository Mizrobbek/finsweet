const elTheme = document.getElementById("theme");
const elBody = document.getElementById("body");
const headerNav = document.querySelector(".header__nav");
const headerNavList = document.querySelector(".header__nav-list");
const menuBtn = document.querySelector(".header__menu");
const closeBtn = document.querySelector(".header__close");
const registerBtn = document.querySelector(".header__btn-registr");

// elTheme.addEventListener("change", function () {
//   if (elTheme.checked === true) {
//     elBody.className = "dark";
//   } else {
//     elBody.className = "";
//   }
// });

menuBtn.addEventListener("click", () => {
  headerNav.classList.add("visual");
  headerNavList.classList.add("visual");
  menuBtn.classList.add("hidden");
  closeBtn.classList.add("visual");
  registerBtn.classList.add("visual");
});

closeBtn.addEventListener("click", () => {
  headerNav.classList.add("hidden");
  headerNavList.classList.add("hidden");
  menuBtn.classList.add("visual");
  closeBtn.classList.add("hidden");
  registerBtn.classList.add("hidden");
});

// import renderList from "./js/register.js";
// import renderData from "./js/register.js";
// renderList();
// renderData();
