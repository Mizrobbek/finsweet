const $elForm = document.querySelector(".main__register-form");
const $elFirstName = document.querySelector(".main__firstname");
const $elLastName = document.querySelector(".main__lastname");
const $elUserName = document.querySelector(".main__username");
const $elPassword = document.querySelector(".main__password");
const $elRepeatPassword = document.querySelector(".main__confirm-password");
const $elBtn = document.querySelector(".main__register-btn");

const $elErrorPassword = document.querySelector(".errorPassword");
const $elCheckInp = document.querySelector(".checkInp");
const $elList = document.querySelector("#tasklist");
const $elStoredNames = JSON.parse(localStorage.getItem("tasks")) || [];
const names = $elStoredNames;

$elCheckInp.addEventListener("change", (e) => {
  e.preventDefault();

  if (e.target.checked) {
    $elPassword.setAttribute("type", "text");
    $elRepeatPassword.setAttribute("type", "text");
  } else {
    $elPassword.setAttribute("type", "password");
    $elRepeatPassword.setAttribute("type", "password");
  }
});

function renderList() {
  $elList.innerHTML = "";

  names.forEach((element, index) => {
    const nameElement = document.createElement("li");
    const lastNameElement = document.createElement("li");
    const userNameElement = document.createElement("li");
    const delBtn = document.createElement("button");

    delBtn.classList.add("delBtn");
    delBtn.textContent = "Delete";

    nameElement.textContent = `Ismi: ${element.objName}`;
    nameElement.classList.add("listItem");

    lastNameElement.textContent = `Familyasi: ${element.lastName}`;
    lastNameElement.classList.add("listItem");

    userNameElement.textContent = `Username: ${element.username}`;
    userNameElement.classList.add("listItem");

    delBtn.addEventListener("click", () => {
      names.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(names));
      renderList();
    });

    $elList.appendChild(nameElement);
    $elList.appendChild(lastNameElement);
    $elList.appendChild(userNameElement);
    $elList.appendChild(delBtn);
  });
}

$elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTask = $elFirstName.value.trim();
  const lastName = $elLastName.value.trim();
  const userName = $elUserName.value.trim();
  const password = $elPassword.value.trim();
  const repeatPassword = $elRepeatPassword.value.trim();

  if (newTask !== "" && lastName !== "" && userName !== "") {
    const newName = {
      objName: newTask,
      lastName: lastName,
      username: userName,
      password: password,
    };

    names.push(newName);
    localStorage.setItem("tasks", JSON.stringify(names));

    $elForm.reset();
  }
  renderList();

  if (repeatPassword === password) {
    $elErrorPassword.textContent = "";
  } else {
    $elErrorPassword.textContent = "Parol xato";
    $elList.innerHTML = "";
  }

  $elForm.reset();
  renderList();
});

renderList();

export default renderList;
