const menuDishContainer = document.querySelector(".menu-dish-container");
const breakfastBtn = document.querySelector(".breakfast-btn");
const menuContainer = document.querySelector(".menu-container");
const basketContainer = document.querySelector(".basket-container");
const basketItemsContainer = document.querySelector(".basket-items-container");
const basketItemTotalPrice = document.querySelector(".basket-item-total-price");
const homeImg = document.querySelector(".home-img-box");
//NavBar
const navBar = document.querySelector(".nav-bar-container");
const navBarRestName = document.querySelector(".nav-bar-restaurant-name");
const navBarBox = document.querySelector(".nav-bar-box-ul");
const basketBtn = document.querySelector(".basket-btn");
const userBtn = document.querySelector(".navbar-user-btn");
const userAccount = document.querySelector(".navbar-user-account-btn");
const navBarBasketItemsCounter = document.querySelector(
  ".nav-bar-basket-items-counter"
);
//account
const userAccountName = document.querySelector(".user-account-name");
const userAccountContainer = document.querySelector(".user-account-container");
const userAccountLogout = document.querySelector(".user-account-logout");
//delivery
const deliveryContainer = document.querySelector(".delivery-container");
const deliveryPaymentValue = document.querySelector(".delivery-basket-value");
const deliveryPaymentTotal = document.querySelector(".delivery-basket-total");
const paymentConfirmBtn = document.querySelector(".payment-confirm-btn");
const deliveryWarning = document.querySelector(".delivery-basket-warning");
const deliveryValue = document.querySelector(".delivery-value");
//timer
const deliveryTimeContainer = document.querySelector(".delivery-timer");
const spanTimer = document.querySelector(".timer");
const timerXMark = document.querySelector(".x-mark-delivery-timer");
//register/login
const logInContainer = document.querySelector(".log-in-container");
const registerContainer = document.querySelector(".register-container");
const hrefToRegister = document.querySelector(".href-to-register");
const loginEmailInput = document.querySelector(".login-email-input");
const loginPasswordInput = document.querySelector(".login-password-input");
const registerEmailInput = document.querySelector(".register-email-input");
const loginWarning = document.querySelector(".login-warning");
const registerFirstPasswordInput = document.querySelector(
  ".register-first-password-input"
);
const registerSecondtPasswordInput = document.querySelector(
  ".register-second-password-input"
);
const registerBtn = document.querySelector(".register-btn");
const signInBtn = document.querySelector(".sign-in-btn");
const registerWarning = document.querySelector(".register-warning");
const dishes = [
  {
    name: "Bowl of oatmeal",
    category: "breakfast",
    description:
      "Vivamus lobortis odio vitae eleifend ultricies. Integer tincidunt arcu eget erat aliquet, vitae volutpat eros bibendum.Nunc pellentesque placerat sem vel faucibus.",
    price: "4",
    img: "./images/food/breakfast/BowlOfOatmeal.jpg",
  },
  {
    name: "Croissants",
    category: "breakfast",
    description:
      "Nulla nec semper lectus. Ut nulla metus, laoreet sed vehicula sit amet, tincidunt id enim. Donec aliquet eget dolor nec efficitur. Curabitur et augue venenatis, volutpat ipsum quis, bibendum dui.",
    price: "6",
    img: "./images/food/breakfast/croissant.jpg",
  },
  {
    name: "French toasts",
    category: "breakfast",
    description:
      "Nullam congue nisl id tellus dignissim, non semper mi vulputate. Sed faucibus aliquet lorem vitae feugiat. Aliquam erat volutpat. Fusce ornare leo felis. Nunc ornare, arcu in laoreet luctus, ex.",
    price: "5",
    img: "./images/food/breakfast/frenchToast.jpg",
  },
  {
    name: "Omelette",
    category: "breakfast",
    description:
      "Phasellus quis lorem nec turpis blandit porttitor. Proin elementum non eros ac feugiat. Etiam pellentesque in sem sed eleifend. Cras faucibus convallis enim, id tempor tellus accumsan sit amet. Phasellus.",
    price: "6",
    img: "./images/food/breakfast/Omelette.jpg",
  },
  {
    name: "Classic toasts",
    category: "breakfast",
    description:
      "Integer quis velit a lectus condimentum maximus id nec ex. Duis consequat, eros in interdum lobortis, tortor mi luctus tellus, non pretium odio turpis et urna. Mauris sollicitudin, massa eu.",
    price: "5",
    img: "./images/food/breakfast/toasts.jpg",
  },
  {
    name: "Cheeseburger",
    category: "dinner",
    description:
      "Nunc efficitur orci quam, ac vehicula nisl sodales et. Suspendisse pellentesque elit massa. Duis purus nulla, pulvinar nec justo et, hendrerit euismod lectus. Morbi at scelerisque magna.",
    price: "12",
    img: "./images/food/dinner/cheeseburger.jpg",
  },
  {
    name: "Hamburger",
    category: "dinner",
    description:
      "Proin vel augue dolor. Sed non elit eget leo auctor sollicitudin. Nulla odio mauris, condimentum a mauris vulputate, ornare bibendum velit. Phasellus vitae sollicitudin felis.",
    price: "10",
    img: "./images/food/dinner/hamburger.jpg",
  },
  {
    name: "Salmon with veggies",
    category: "dinner",
    description:
      "Cras rutrum aliquet velit, ac commodo ante iaculis eu. Vivamus finibus aliquet eros vel auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed quis.",
    price: "13",
    img: "./images/food/dinner/HealthySalmon-veggies-quinoa.jpg",
  },
  {
    name: "MOMO",
    category: "dinner",
    description:
      "Mauris dapibus arcu ac risus sollicitudin, nec porta arcu egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi egestas eros in massa ornare molestie.",
    price: "12",
    img: "./images/food/dinner/NepaliCuisineMOMO.jpg",
  },
  {
    name: "Pork Chop",
    category: "dinner",
    description:
      "Fusce eget lorem blandit, scelerisque elit a, laoreet neque. Etiam pellentesque felis nec faucibus accumsan. Aliquam vitae nunc sed ex feugiat euismod. Nulla eu condimentum leo.",
    price: "14",
    img: "./images/food/dinner/porkChop.jpg",
  },
  {
    name: "Red curry",
    category: "dinner",
    description:
      "Suspendisse ac turpis a ligula eleifend scelerisque et eu tellus. Ut ac mauris nec nisi auctor volutpat eu ac purus. Curabitur sodales fringilla purus id tincidunt. Mauris sed consectetur tellus.",
    price: "10",
    img: "./images/food/dinner/redCurry.jpg",
  },
  {
    name: "Ribs",
    category: "dinner",
    description:
      "Cras convallis dolor non massa congue molestie. Ut fermentum porttitor arcu, dictum ullamcorper urna eleifend nec. Duis a finibus mauris, pellentesque elementum libero.",
    price: "16",
    img: "./images/food/dinner/ribs.jpg",
  },
  {
    name: "Sea food Pasta",
    category: "dinner",
    description:
      "Vestibulum rhoncus purus malesuada, ullamcorper quam sed, tempus est. Donec consectetur eu magna eu mollis. Aliquam vehicula finibus est quis fringilla.",
    price: "14",
    img: "./images/food/dinner/SeafoodPastaWithShrimpsAndTomatoesInApan.jpg",
  },
  {
    name: "Steak",
    category: "dinner",
    description:
      "Vivamus condimentum sem id dui sollicitudin consectetur. Cras ac feugiat nibh, at vestibulum eros. Aliquam fermentum vitae massa vitae mollis.",
    price: "20",
    img: "./images/food/dinner/steak.jpg",
  },
  {
    name: "Bundt Cake",
    category: "sweets",
    description:
      "Pellentesque eget consequat tellus. Sed imperdiet tellus a sollicitudin molestie. Suspendisse posuere tristique consectetur. Proin iaculis elementum maximus.",
    price: "15",
    img: "./images/food/sweets/bundtCake.jpg",
  },
  {
    name: "Cake with wipped cream and berries",
    category: "sweets",
    description:
      "Quisque consequat feugiat imperdiet. Donec non leo magna. In hac habitasse platea dictumst. Fusce tempus eget est a tincidunt. Nam venenatis, diam non euismod bibendum.",
    price: "15",
    img: "./images/food/sweets/CakeWithWippedCreamAndBerries.jpg",
  },
  {
    name: "Chocolate ganache tart",
    category: "sweets",
    description:
      "Nunc blandit, tortor sit amet fringilla accumsan, ante leo tristique nibh, nec egestas est magna eu quam. Cras tempor ut orci in volutpat. Sed sodales.Nam at quam in dolor hendrerit rutrum non.",
    price: "14",
    img: "./images/food/sweets/ChocolateGanacheTart.jpg",
  },
  {
    name: "Fruit pie",
    category: "sweets",
    description:
      "Donec posuere eleifend feugiat. In hac habitasse platea dictumst. Nulla non ipsum pretium, imperdiet leo ut, condimentum massa. Proin erat elit, consectetur pharetra laoreet id.",
    price: "13",
    img: "./images/food/sweets/fruitPie.jpg",
  },
  {
    name: "Muffins",
    category: "sweets",
    description:
      "Vivamus tincidunt enim id risus cursus, at tempus quam tempus. Maecenas ut varius ipsum, a sodales lacus. Nam at quam in dolor hendrerit rutrum non.",
    price: "5",
    img: "./images/food/sweets/muffins.jpg",
  },
];

let dishesMap = dishes.map(function (item) {
  return `<div class="menu-dish-box ${item.category}">
  <img
    src=${item.img}
    class="dish-img" alt = '${item.name}'
  />
  <article>
    <h3>${item.name}</h3>
    <p>
      ${item.description}
    </p>

    <div class="dish-tools">
      Total price:
      <div class="dish-price">${item.price}</div>$
      <button><i class="fa-solid fa-cart-plus fa-xl menu-buy-food-btn" ></i></button>
    </div>
  </article>
</div>`;
});
dishesMap = dishesMap.join("");
menuDishContainer.innerHTML = dishesMap;
function main() {
  prepareDOMEvents();
}

const createBasketItem = (itemName, itemPrice) => {
  const newBasketItem = document.createElement("div");
  newBasketItem.classList.add("basket-item");
  basketItemsContainer.append(newBasketItem);

  const newBasketItemName = document.createElement("div");
  newBasketItemName.classList.add("basket-item-name");
  newBasketItem.append(newBasketItemName);
  newBasketItemName.textContent = itemName;

  const newBasketBtn = document.createElement("button");
  newBasketBtn.classList.add("basket-btn");
  newBasketBtn.innerHTML = '<i class="fa-solid fa-xmark delete-item"></i>';
  newBasketItemName.append(newBasketBtn);

  const newBasketItemPrice = document.createElement("div");
  newBasketItemPrice.classList.add("basket-item-price");
  newBasketItem.append(newBasketItemPrice);
  newBasketItemPrice.textContent = itemPrice;

  const newBasketDollar = document.createElement("div");
  newBasketDollar.classList.add("basket-item-dollar");
  newBasketItem.append(newBasketDollar);
  newBasketDollar.innerHTML = "$";
};

const checkMenuBtns = (e) => {
  let breakfastDishes = document.querySelectorAll(".breakfast");
  let dinnerDishes = document.querySelectorAll(".dinner");
  let sweetDishes = document.querySelectorAll(".sweets");

  if (e.target.matches(".all-btn")) {
    breakfastDishes.forEach((item) => {
      item.style.display = "flex";
    });
    dinnerDishes.forEach((item) => {
      item.style.display = "flex";
    });
    sweetDishes.forEach((item) => {
      item.style.display = "flex";
    });
  } else if (e.target.matches(".breakfast-btn")) {
    breakfastDishes.forEach((item) => {
      item.style.display = "flex";
    });
    dinnerDishes.forEach((item) => {
      item.style.display = "none";
    });
    sweetDishes.forEach((item) => {
      item.style.display = "none";
    });
  } else if (e.target.matches(".dinner-btn")) {
    breakfastDishes.forEach((item) => {
      item.style.display = "none";
    });
    dinnerDishes.forEach((item) => {
      item.style.display = "flex";
    });
    sweetDishes.forEach((item) => {
      item.style.display = "none";
    });
  } else if (e.target.matches(".sweets-btn")) {
    breakfastDishes.forEach((item) => {
      item.style.display = "none";
    });
    dinnerDishes.forEach((item) => {
      item.style.display = "none";
    });
    sweetDishes.forEach((item) => {
      item.style.display = "flex";
    });
  }
};
let totalPrice = 0;

const checkBasketTotalPrice = (e) => {
  if (e.target.matches(".menu-buy-food-btn")) {
    let itemClosestPrice = e.target.closest("button");
    let itemPrice = itemClosestPrice.previousElementSibling.textContent;
    let itemClosestName = e.target.closest("div");
    let itemName =
      itemClosestName.previousElementSibling.previousElementSibling.textContent;
    createBasketItem(itemName, itemPrice);
    let itemPriceToNum = Number(itemPrice);
    totalPrice += itemPriceToNum;
  } else if (e.target.matches(".delete-item")) {
    let basketItemPriceMinus = e.target.closest("div").nextSibling.textContent;
    let basketItemPriceMinusNum = Number(basketItemPriceMinus);
    totalPrice -= basketItemPriceMinusNum;
    e.target.closest(".basket-item").remove();
  } else if (e.target.matches(".basket-checkout-btn")) {
    if (userAccount.style.display == "inline-flex" && totalPrice !== 0) {
      deliveryContainer.style.display = "flex";
      deliveryPaymentValue.textContent = `Basket: ${totalPrice}.00 $`;
      deliveryPaymentTotal.textContent = `Total: ${totalPrice}.00 $`;
      deliveryValue.style.textDecoration = "line-through";
    } else if (totalPrice !== 0) {
      deliveryContainer.style.display = "flex";
      deliveryPaymentValue.textContent = `Basket: ${totalPrice}.00 $`;
      deliveryPaymentTotal.textContent = `Total: ${totalPrice + 4}.00 $`;
      deliveryValue.style.textDecoration = "none";
    }
  }

  let allBasketItems = document.querySelectorAll(".basket-item");
  if (allBasketItems.length !== 0) {
    navBarBasketItemsCounter.classList.add(
      "nav-bar-basket-items-counter-display"
    );
    navBarBasketItemsCounter.innerHTML = allBasketItems.length;
  } else if (allBasketItems.length == 0) {
    navBarBasketItemsCounter.classList.remove(
      "nav-bar-basket-items-counter-display"
    );
  }
  basketItemTotalPrice.textContent = totalPrice;
};
//NavBar scroll
const navBarRestaurantName = document.querySelector(".nav-bar-restaurant-name");
const navBarFnc = () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;
  // const navHeight = 105.4375;
  console.log(navHeight);

  if (scrollHeight > navHeight) {
    navBar.classList.add("nav-bar-container-fixed");
    navBarBox.classList.add("nav-bar-box-ul-fixed");
    navBarRestaurantName.classList.add("nav-bar-restaurant-name-fixed");
  } else {
    navBar.classList.remove("nav-bar-container-fixed");
    navBarBox.classList.remove("nav-bar-box-ul-fixed");
    navBarRestaurantName.classList.remove("nav-bar-restaurant-name-fixed");
  }
};
const basketToggle = () => {
  basketContainer.classList.toggle("basket-container-toogle");
  logInContainer.classList.remove("log-in-container-toggle");
  registerContainer.classList.remove("register-container-toggle");
};
console.log(basketBtn);

const deliveryBtns = (e) => {
  if (e.target.matches(".payment-decline-btn")) {
    deliveryContainer.style.display = "none";
    deliveryName.value = "";
    deliverySecondName.value = "";
    deliveryEmail.value = "";
    deliveryPhone.value = "";
    deliveryPostal.value = "";
    deliveryCity.value = "";
    deliveryStreet.value = "";
    deliveryHouse.value = "";
    deliveryWarning.style.display = "none";
  }
};
const deliveryName = document.querySelector(".delivery-name");
const deliverySecondName = document.querySelector(".delivery-second-name");
const deliveryEmail = document.querySelector(".delivery-email");
const deliveryPhone = document.querySelector(".delivery-phone");
const deliveryPostal = document.querySelector(".delivery-postal");
const deliveryCity = document.querySelector(".delivery-city");
const deliveryStreet = document.querySelector(".delivery-street");
const deliveryHouse = document.querySelector(".delivery-house");
const checkDeliveryInfo = () => {
  if (
    deliveryName.value &&
    deliverySecondName.value &&
    deliveryEmail.value &&
    deliveryPhone.value &&
    deliveryPostal.value &&
    deliveryCity.value &&
    deliveryStreet.value &&
    deliveryHouse.value !== ""
  ) {
    console.log("nice");
    deliveryContainer.style.display = "none";
    basketContainer.classList.remove("basket-container-toogle");
    deliveryTimeContainer.style.display = "flex";
    deliveryName.value = "";
    deliverySecondName.value = "";
    deliveryEmail.value = "";
    deliveryPhone.value = "";
    deliveryPostal.value = "";
    deliveryCity.value = "";
    deliveryStreet.value = "";
    deliveryHouse.value = "";
    deliveryWarning.style.display = "none";
    window.scrollTo(0, 0);
  } else {
    deliveryWarning.style.display = "flex";
  }
};

//Delivery timer
const startminutes = 40;
let time = startminutes * 60;

const timer = () => {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  spanTimer.innerHTML = `${minutes} : ${seconds}`;
  time--;
};
setInterval(timer, 1000);

const closeDelivery = () => {
  deliveryTimeContainer.style.display = "none";
};
//End of Delivery Timer

const users = new Map();

const checkRegisterFields = () => {
  if (
    registerFirstPasswordInput.value === registerSecondtPasswordInput.value &&
    registerEmailInput.value !== "" &&
    registerFirstPasswordInput.value !== "" &&
    registerSecondtPasswordInput !== "" &&
    users.has(`${registerEmailInput.value}`) === false
  ) {
    users.set(
      `${registerEmailInput.value}`,
      `${registerFirstPasswordInput.value}`
    );
    console.log(users);

    registerContainer.classList.toggle("register-container-toggle");
    registerEmailInput.value = "";
    registerFirstPasswordInput.value = "";
    registerSecondtPasswordInput.value = "";
  } else if (
    registerFirstPasswordInput.value !== registerSecondtPasswordInput.value
  ) {
    registerWarning.style.color = "red";
    registerWarning.innerHTML = "Your passwords are different";
    console.log("popraw dane");
  } else if (users.has(`${registerEmailInput.value}`) === true) {
    registerWarning.innerHTML = `There is an account with this e-mail`;
  }
};

const signInFnc = () => {
  if (
    users.has(`${loginEmailInput.value}`) === true &&
    users.get(`${loginEmailInput.value}`) === loginPasswordInput.value
  ) {
    //////////
    userAccount.style.position = "relative";
    userAccount.style.display = "inline-flex";
    ////////
    userAccount.firstChild.innerHTML = loginEmailInput.value;
    userBtn.style.display = "none";
    logInContainer.classList.toggle("log-in-container-toggle");
    userAccountName.innerHTML = loginEmailInput.value;
    loginEmailInput.value = "";
    loginPasswordInput.value = "";
    console.log("super");
  } else {
    loginWarning.style.color = "red";
    loginWarning.innerHTML = "Wrong username or password.";
  }
  // user.email == loginEmailInput.value &&
  // user.password == loginPasswordInput.value
};

const showLoginPopup = () => {
  if (registerContainer.classList.contains("register-container-toggle")) {
    registerContainer.classList.toggle("register-container-toggle");
    registerEmailInput.value = "";
    registerFirstPasswordInput.value = "";
    registerSecondtPasswordInput.value = "";
    registerWarning.innerHTML = "";
  } else {
    loginEmailInput.value = "";
    loginPasswordInput.value = "";
    loginWarning.innerHTML = "";
  }
  logInContainer.classList.toggle("log-in-container-toggle");
  basketContainer.classList.remove("basket-container-toogle");
};
const showRegisterPopup = () => {
  registerContainer.classList.toggle("register-container-toggle");

  loginEmailInput.value = "";
  loginPasswordInput.value = "";
};

const displayUserAccountInfo = () => {
  userAccountContainer.classList.toggle("user-account-container-toggle");
};
const logoutUserAccount = () => {
  userAccount.style.display = "none";
  userAccount.style.position = "absolute";
  userBtn.style.display = "inline-flex";
  userAccountContainer.classList.toggle("user-account-container-toggle");
};
console.log(paymentConfirmBtn);
function prepareDOMEvents() {
  menuContainer.addEventListener("click", checkMenuBtns);
  document.addEventListener("click", checkBasketTotalPrice);
  window.addEventListener("scroll", navBarFnc);
  basketBtn.addEventListener("click", basketToggle);
  deliveryContainer.addEventListener("click", deliveryBtns);
  paymentConfirmBtn.addEventListener("click", checkDeliveryInfo);
  timerXMark.addEventListener("click", closeDelivery);
  userBtn.addEventListener("click", showLoginPopup);
  hrefToRegister.addEventListener("click", showRegisterPopup);
  registerBtn.addEventListener("click", checkRegisterFields);
  signInBtn.addEventListener("click", signInFnc);
  userAccount.addEventListener("click", displayUserAccountInfo);
  userAccountLogout.addEventListener("click", logoutUserAccount);
}
document.addEventListener("DOMContentLoaded", main);
