// переменные хедера
let mainToggle = document.querySelector(".main-header__toggle");
let mainNav = document.querySelector(".main-nav");

// меню навигации
mainNav.classList.remove("main-nav--nojs");
mainToggle.classList.remove("main-header__toggle--nojs");
mainToggle.addEventListener( "click", (navToggle) );

function navToggle() {
  if (!mainToggle.classList.contains("main-header__toggle--nojs")) {
    if (mainNav.classList.contains("main-nav--closed")) {
      mainNav.classList.remove("main-nav--closed");
      mainNav.classList.add("main-nav--opened");

      mainToggle.classList.remove("main-header__toggle--closed");
      mainToggle.classList.add("main-header__toggle--opened");
    }
    else {
      mainNav.classList.remove("main-nav--opened");
      mainNav.classList.add("main-nav--closed");

      mainToggle.classList.remove("main-header__toggle--opened");
      mainToggle.classList.add("main-header__toggle--closed");
    }
  }
}
