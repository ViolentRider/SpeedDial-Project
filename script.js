const plusBtn = document.querySelector(".plus-btn");
const xBtn = document.querySelector(".close-window-btn");
const acceptBtn = document.querySelector(".accept-btn");
const inputWindow = document.querySelector(".set-window");
const inputWindowContainer = document.querySelector(".set-window-container");
const inputAdress = document.querySelector(".input-adress");
const inputName = document.querySelector(".input-name");
const inputImg = document.querySelector(".input-img");
const inputAdressWarning = document.querySelector(".input-adress-warning");
const inputNameWarning = document.querySelector(".input-name-warning");
const inputImgWarning = document.querySelector(".input-img-warning");
const windowContainer = document.querySelector(".window-container");
const windowBox = document.querySelector(".widnow-box");
const allIcons = document.querySelectorAll(".icon");
const showDeleteWindowsBtn = document.querySelector(".show-delete-windows-btn");
const windowName = document.querySelector(".window-name");
//todo
const todoContainer = document.querySelector(".todo-container");
const addNewTodoInput = document.querySelector(".add-new-todo-input");
const addNewTodoBtn = document.querySelector(".add-new-todo-btn");
const todoUlList = document.querySelector(".todo-ul-list");
const todoLiItem = document.querySelector(".todo-li-item");
const addNewTodoWarning = document.querySelector(".add-new-todo-warning");
const todoPopup = document.querySelector(".todo-popup");
const todoPopupInput = document.querySelector(".todo-popup-input");
const todoPopupAcceptBtn = document.querySelector(".todo-popup-accept");
const todoPopupWarning = document.querySelector(".todo-popup-warning");
const openTodoBtn = document.querySelector(".open-todo-btn");
const nightModeBtn = document.querySelector(".night-mode-btn");
const mainFlexContainer = document.querySelector(".main-flex-container");

let todoToEdit;
const main = () => {
  prepareDOMEvents();
  geoFindMe();
};

const openInputWindow = () => {
  inputWindow.style.display = "flex";
  inputWindowContainer.style.display = "flex";
  windowContainer.style.opacity = "0.2";
};
const closeInputWindow = () => {
  inputWindow.style.display = "none";
  inputWindowContainer.style.display = "none";
  windowContainer.style.opacity = "1.0";
  inputAdressWarning.style.display = "none";
  inputNameWarning.style.display = "none";
  inputImgWarning.style.display = "none";
};

function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

const checkInputAdress = () => {
  if (inputAdress.value == "") {
    inputAdressWarning.style.display = "flex";
  } else {
    inputAdressWarning.style.display = "none";
  }
};

const checkInputName = () => {
  if (inputName.value == "") {
    inputNameWarning.style.display = "flex";
  } else {
    inputNameWarning.style.display = "none";
  }
};

const checkInputImg = () => {
  if (inputImg.value == "") {
    inputImgWarning.style.display = "flex";
  } else {
    inputImgWarning.style.display = "none";
  }
};

const addNewWindow = () => {
  if (
    inputAdress.value &&
    inputName.value &&
    inputImg.value !== "" &&
    validURL(inputAdress.value) !== false
  ) {
    const newWindowBox = document.createElement("div");
    newWindowBox.classList.add("window-box");
    windowContainer.append(newWindowBox);

    const newWindowName = document.createElement("p");
    newWindowName.classList.add("window-name");
    newWindowName.textContent = inputName.value;
    newWindowBox.append(newWindowName);

    const newWindowDeleteButton = document.createElement("button");
    newWindowDeleteButton.classList.add("btn", "delete-window-btn");
    newWindowName.append(newWindowDeleteButton);

    const newWindowDeleteButtonStyle = document.createElement("i");
    newWindowDeleteButtonStyle.classList.add("fa-solid", "fa-xmark", "fa-2xl");
    newWindowDeleteButtonStyle.setAttribute("id", "delete");
    newWindowDeleteButton.append(newWindowDeleteButtonStyle);

    const newWindowAdress = document.createElement("a");
    newWindowAdress.setAttribute("href", `${inputAdress.value}`);
    newWindowBox.append(newWindowAdress);
    console.log(newWindowAdress);

    const newWindow = document.createElement("div");
    newWindow.classList.add("window");
    newWindow.style.backgroundImage = `url('${inputImg.value}')`;
    newWindowAdress.append(newWindow);
    inputAdress.value = "";
    inputName.value = "";
    inputImg.value = "";
    closeInputWindow();
  } else if (validURL(inputAdress.value) == false) {
    inputAdressWarning.style.display = "flex";
    inputAdressWarning.textContent = "Give the correct webpage adress !";
    inputAdressWarning.style.color = "tomato";
  }
  inputAdress.value = "";
  inputName.value = "";
  inputImg.value = "";
};

const icons = (e) => {
  if (e.target.matches(".google-icon")) {
    inputAdress.value = "https://www.google.pl/";
    inputName.value = "Google";
    inputImg.value = "./images/quick-add-icons/google.png";
  } else if (e.target.matches(".facebook-icon")) {
    inputAdress.value = "https://www.facebook.com/";
    inputName.value = "Facebook";
    inputImg.value = "./images/quick-add-icons/facebook.png";
  } else if (e.target.matches(".instagram-icon")) {
    inputAdress.value = "https://www.instagram.com/";
    inputName.value = "Instagram";
    inputImg.value = "./images/quick-add-icons/instagram.png";
  } else if (e.target.matches(".twitter-icon")) {
    inputAdress.value = "https://www.twitter.com/";
    inputName.value = "Twitter";
    inputImg.value = "./images/quick-add-icons/twitter.png";
  } else if (e.target.matches(".tiktok-icon")) {
    inputAdress.value = "https://www.tiktok.com/";
    inputName.value = "Tiktok";
    inputImg.value = "./images/quick-add-icons/tiktok.png";
  } else if (e.target.matches(".github-icon")) {
    inputAdress.value = "https://www.github.com/";
    inputName.value = "Github";
    inputImg.value = "./images/quick-add-icons/github.png";
  } else if (e.target.matches(".linkedin-icon")) {
    inputAdress.value = "https://www.linkedin.com/";
    inputName.value = "Linkedin";
    inputImg.value = "./images/quick-add-icons/linkedin.png";
  } else if (e.target.matches(".netflix-icon")) {
    inputAdress.value = "https://www.netflix.com/";
    inputName.value = "Netflix";
    inputImg.value = "./images/quick-add-icons/netflix.png";
  } else if (e.target.matches(".pinterest-icon")) {
    inputAdress.value = "https://www.pinterest.com/";
    inputName.value = "Pinterest";
    inputImg.value = "./images/quick-add-icons/pinterest.png";
  } else if (e.target.matches(".twitch-icon")) {
    inputAdress.value = "https://www.twitch.tv/";
    inputName.value = "Twitch";
    inputImg.value = "./images/quick-add-icons/twitch.png";
  } else if (e.target.matches(".youtube-icon")) {
    inputAdress.value = "https://www.youtube.com/";
    inputName.value = "Youtube";
    inputImg.value = "./images/quick-add-icons/youtube.png";
  } else if (e.target.matches(".whatsapp-icon")) {
    inputAdress.value = "https://www.whatsapp.com/";
    inputName.value = "Whatsapp";
    inputImg.value = "./images/quick-add-icons/whatsapp.png";
  }
};
const checkClick = (e) => {
  if (e.target.matches("#delete")) {
    deleteWindowBtnFnc(e);
  } else if (e.target.matches(".show-delete-windows-btn")) {
    showDeleteWindowsBtnFnc();
  }
};

const deleteWindowBtnFnc = (e) => {
  e.target.closest("div").remove();
};

const showDeleteWindowsBtnFnc = () => {
  let deleteWindowBtn = document.querySelectorAll(".delete-window-btn");
  deleteWindowBtn.forEach((element) => {
    element.classList.toggle("delete-window-btn-display");
  });
};

//todo

const addNewTodoBtnFnc = () => {
  if (addNewTodoInput.value !== "") {
    addNewTodoWarning.style.display = "none";
    const newLiItem = document.createElement("li");
    newLiItem.classList.add("todo-li-item");
    newLiItem.textContent = addNewTodoInput.value;
    todoUlList.append(newLiItem);

    const toolsPanel = document.createElement("div");
    toolsPanel.classList.add("tools-panel");
    newLiItem.append(toolsPanel);

    const btnDoneTodo = document.createElement("button");
    btnDoneTodo.classList.add("btn");
    btnDoneTodo.innerHTML = `<i class="fa-regular fa-square-check fa-lg done-todo-btn"></i>`;

    const btnEditTodo = document.createElement("button");
    btnEditTodo.classList.add("btn");
    btnEditTodo.innerHTML = `<i class="fa-solid fa-pen-to-square fa-lg edit-todo-btn"></i>`;

    const btnDeleteTodo = document.createElement("button");
    btnDeleteTodo.classList.add("btn");
    btnDeleteTodo.innerHTML = `<i class="fa-solid fa-square-xmark fa-lg delete-todo-btn"></i>`;
    toolsPanel.append(btnDoneTodo, btnEditTodo, btnDeleteTodo);
  } else {
    addNewTodoWarning.style.display = "block";
  }
  addNewTodoInput.value = "";
};

const checkClickTodo = (e) => {
  if (e.target.matches(".delete-todo-btn")) {
    e.target.closest("li").remove();
  } else if (e.target.matches(".done-todo-btn")) {
    e.target.closest("li").classList.toggle("todo-li-item-toogle");
  } else if (e.target.matches(".edit-todo-btn")) {
    todoPopupEdit(e);
  } else if (e.target.matches(".todo-popup-decline")) {
    todoPopup.style.display = "none";
  }
};

const todoPopupEdit = (e) => {
  todoPopup.style.display = "block";
  todoToEdit = e.target.closest("li");
  console.log(todoToEdit);
  todoPopupInput.value = todoToEdit.firstChild.textContent;

  // todoToEdit = e.target.closest("li");
  // todoToEdit.textContent = "segsebgosneg";
};

const todoPopupInputAccept = () => {
  if (todoPopupInput.value !== "") {
    todoPopupWarning.style.display = "none";
    todoToEdit.firstChild.textContent = todoPopupInput.value;
    todoPopup.style.display = "none";
  } else {
    todoPopupWarning.style.display = "block";
  }
};
const openTodoFnc = () => {
  todoContainer.classList.toggle("todo-container-toggle");
  windowContainer.classList.toggle("window-container-toggle");
};

const nightModeFnc = () => {
  mainFlexContainer.classList.toggle("night-mode-background-toogle");
  document.body.classList.toggle("night-mode-background-toogle");
  inputWindow.classList.toggle("night-mode-box-toogle");
  todoContainer.classList.toggle("night-mode-box-toogle");
};

function geoFindMe() {
  const weatherImg = document.querySelector(".weather-img");
  const temperature = document.querySelector(".temperature");
  const cityName = document.querySelector(".city-name");
  const pressure = document.querySelector(".pressure");
  const windSpeed = document.querySelector(".wind-speed");
  const sunrise = document.querySelector(".sunrise");
  const sunset = document.querySelector(".sunset");
  async function sucess(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    const API_LINK = "https://api.openweathermap.org/data/2.5/weather?lat=";
    const API_KEY = "&appid=7f173bb5dd783a0ad8376520035dc58b";
    const UNITS = "&units=metric";
    const URL = API_LINK + latitude + "&lon=" + longitude + API_KEY + UNITS;
    const response = await axios.get(URL);
    const data = await response.data;
    temperature.textContent = Math.floor(data.main.temp) + " ℃";
    cityName.innerHTML = data.name;
    pressure.textContent = data.main.pressure + " hPa";
    windSpeed.textContent = Math.floor(data.wind.speed) + " km/h";
    const fixedSunrise = new Date(data.sys.sunrise * 1000);
    const sunriseTime = fixedSunrise.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    sunrise.textContent = sunriseTime;
    const fixedSunset = new Date(data.sys.sunset * 1000);
    const sunsetTime = fixedSunset.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    sunset.textContent = sunsetTime;
    if ((data.cod >= 200) & (data.cod <= 232)) {
      weatherImg.setAttribute("src", "./images/weather/storm.png");
    } else if ((data.cod >= 300) & (data.cod <= 321)) {
      weatherImg.setAttribute("src", "./images/weather/rainy.png");
    } else if ((data.cod >= 500) & (data.cod <= 531)) {
      weatherImg.setAttribute("src", "./images/weather/rainy.png");
    } else if ((data.cod >= 600) & (data.cod <= 622)) {
      weatherImg.setAttribute("src", "./images/weather/snowy.png");
    } else if ((data.cod >= 701) & (data.cod <= 771)) {
      weatherImg.setAttribute("src", "./images/weather/foog.png");
    } else if ((data.cod = 781)) {
      weatherImg.setAttribute("src", "./images/weather/tornado.png");
    } else if ((data.cod = 800)) {
      weatherImg.setAttribute("src", "./images/weather/sun.png");
    } else if ((data.cod >= 801) & (data.cod <= 804)) {
      weatherImg.setAttribute("src", "./images/weather/cloud.png");
    }
    console.log(data);
  }

  function failure() {
    console.log("blad");
  }
  navigator.geolocation.getCurrentPosition(sucess, failure);
}

const dataBoxPopupBtn = document.querySelector(".data-box-popup");
const dataBoxPopupFnc = () => {
  const dataBox = document.querySelector(".data-box");
  dataBox.classList.toggle("data-box-toggle");
};
// async function weatherFnc() {
//   const API_LINK = "https://api.openweathermap.org/data/2.5/weather?lat=";
//   const API_KEY = "&appid=7f173bb5dd783a0ad8376520035dc58b";
//   const URL = API_LINK + latitude + "&lon=" + longitude + API_KEY;
//   const response = await axios.get(URL);
//   console.log(response);
// }
// openInputWindow
function prepareDOMEvents() {
  plusBtn.addEventListener("click", openInputWindow);
  xBtn.addEventListener("click", closeInputWindow);
  openTodoBtn.addEventListener("click", openTodoFnc);
  acceptBtn.addEventListener("click", addNewWindow);
  inputAdress.addEventListener("keyup", checkInputAdress);
  inputName.addEventListener("keyup", checkInputName);
  inputImg.addEventListener("keyup", checkInputImg);
  allIcons.forEach((iconListener) => {
    iconListener.addEventListener("click", icons);
  });
  windowContainer.addEventListener("click", checkClick);
  document.addEventListener("click", checkClick);
  //Todo
  addNewTodoBtn.addEventListener("click", addNewTodoBtnFnc);
  todoContainer.addEventListener("click", checkClickTodo);
  todoPopupAcceptBtn.addEventListener("click", todoPopupInputAccept);
  nightModeBtn.addEventListener("click", nightModeFnc);
  dataBoxPopupBtn.addEventListener("click", dataBoxPopupFnc);
}
document.addEventListener("DOMContentLoaded", main);
