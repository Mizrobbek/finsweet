// const url =
//   "https://newsdata.io/api/1/news?apikey=pub_3181265cc65690e11e8b7a99567b48e2fea3d";

// async function getData(url) {
//   try {
//     const response = await fetch(url);
//     const result = await response.json();
//     console.log(result.results);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getData(url);

// const card = document.querySelector(".main__business-blog");
// const data = getData(url);

// function render(data) {
//   data.forEach((element) => {
//     const div = document.createElement("div");

//     const img = document.createElement("img");
//     img.src = element.image_url;

//     div.appendChild(img);

//     card.appendChild(div);
//   });
// }

// render();

// const list = document.querySelector(".main__business-list");

// async function renderUsers() {
//   const users = await getData(url);
//   renderData(users);
// }
// renderUsers();

// function renderData(users) {
//   users.forEach((user) => {
//     const myFragment = new DocumentFragment();

//     const card = document.createElement("li");
//     card.classList.add("main__business__list-item");

//     const images = document.createElement("img");
//     images.src = user.image_url;

//     const div = document.createElement("div");
//     const title = document.createElement("h3");
//     // userName.textContent = user.login ? user.login : user.owner.login;

//     myFragment.appendChild(images);

//     card.appendChild(myFragment);
//     list.appendChild(card);
//   });
// }

// renderData();

// const searchForm = document.querySelector(".main__blog-form");
// const searchInput = document.querySelector(".main__blog-search");

// async function searchUsers(searchValue) {
//   const user = await getData(
//     `https://api.github.com/search/repositories?q=${searchValue}`
//   );
//   list.innerHTML = "";
//   renderData(user.items);
// }

// searchForm.addEventListener("click", () => {
//   searchUsers(searchInput.value.trim());
// });

// export default renderData;

// import renderList from "./js/register.js";
// import renderData from "./js/register.js";
// renderList();
// renderData();
