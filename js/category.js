const apiKey = "3e1600f6affb4318a15d25d71e756bbf";
const form = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const newsContainer = document.getElementById("news-container");

form.addEventListener("click", function (event) {
  event.preventDefault();
  const searchQuery = searchInput.value;
  const searchUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&q=${searchQuery}&apiKey=${apiKey}`;
  newsContainer.innerHTML = "";
  getData(searchUrl);
});

const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

async function getData(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    renderNews(result.articles);
  } catch (error) {
    console.error(error);
  }
}

function renderNews(articles) {
  articles.forEach((article) => {
    const myFragment = new DocumentFragment();
    const newFragment = new DocumentFragment();

    const newsItemList = document.createElement("div");
    newsItemList.classList.add("main__business-list");

    const newsItemElement = document.createElement("div");
    newsItemElement.classList.add("main__business__list-item");

    const img = document.createElement("img");
    img.src = article.urlToImage
      ? article.urlToImage
      : "https://placehold.co/387x272?text=Not Found \n Image";
    img.alt = "Image";
    img.classList.add("main__buiness-img");
    myFragment.appendChild(img);

    const div = document.createElement("div");

    const sourceElement = document.createElement("h3");
    sourceElement.classList.add("main__business-category");
    sourceElement.textContent = article.source.name;
    newFragment.appendChild(sourceElement);

    const titleLink = document.createElement("a");
    const nullTitle = (titleLink.textContent = "");
    titleLink.href = article.url;
    titleLink.classList.add("main__business-title");
    titleLink.textContent = article.title ? article.title : nullTitle;
    newFragment.appendChild(titleLink);

    const publishedAtElement = document.createElement("h3");
    publishedAtElement.classList.add("main__business-publish");
    publishedAtElement.textContent = article.publishedAt;
    newFragment.appendChild(publishedAtElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("main__business-text");
    const nullDes = (descriptionElement.textContent = "");
    descriptionElement.textContent = article.description
      ? article.description
      : nullDes;

    newFragment.appendChild(descriptionElement);

    newsItemElement.appendChild(myFragment);
    div.appendChild(newFragment);
    newsItemElement.appendChild(div);
    newsItemList.appendChild(newsItemElement);
    newsContainer.appendChild(newsItemList);
  });
}

getData(url);
