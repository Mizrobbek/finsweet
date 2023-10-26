const form = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const newsContainer = document.getElementById("news-container");
const myFragment = new DocumentFragment();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const searchQuery = searchInput.value;
  const searchUrl = `https://newsdata.io/api/1/news?apikey=pub_3181265cc65690e11e8b7a99567b48e2fea3d&q=${searchQuery}`;
  newsContainer.innerHTML = "";
  getData(searchUrl);
});

const url =
  "https://newsdata.io/api/1/news?apikey=pub_3181265cc65690e11e8b7a99567b48e2fea3d&q=pegasus&language=en";

async function getData(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    renderNews(result.results);
  } catch (error) {
    console.error(error);
  }
}

function renderNews(results) {
  results.forEach((article) => {
    const newFragment = new DocumentFragment();

    const newsItemList = document.createElement("ul");
    newsItemList.classList.add("main__business-list");

    const newsItemElement = document.createElement("li");
    newsItemElement.classList.add("main__business-__list-item");

    const img = document.createElement("img");
    img.src = article.image_url
      ? article.image_url
      : "https://placehold.co/387x272?text=Not Found \n Image";
    img.alt = "Image";
    myFragment.appendChild(img);

    const div = document.createElement("div");

    const sourceElement = document.createElement("h3");
    sourceElement.classList.add("main__business-category");
    sourceElement.textContent = article.category;
    newFragment.appendChild(sourceElement);

    const titleLink = document.createElement("a");
    titleLink.href = article.url;
    titleLink.classList.add("main__business-title");
    titleLink.textContent = article.title;
    newFragment.appendChild(titleLink);

    const publishedAtElement = document.createElement("h3");
    publishedAtElement.classList.add("main__business-publish");
    publishedAtElement.textContent = article.pubDate;
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
