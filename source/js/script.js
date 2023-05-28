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

// Яндекс карта
let mapPinSrc = "./img/map-pin/map-pin-mobile@1x.png";
let mapPinSize = [57, 53];
let dpr = window.devicePixelRatio;

if (document.documentElement.clientWidth >= 768) {
  mapPinSrc = "./img/map-pin/map-pin-tablet@1x.png";
  mapPinSize = [113, 106];
  if (dpr >= 2) {
    mapPinSrc = "./img/map-pin/map-pin-tablet@2x.png";
  }
}
else {
  if (dpr >= 2) {
    mapPinSrc = "./img/map-pin/map-pin-mobile@2x.png";
  }
}
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
  // Создание карты.
  var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [59.938631, 30.323037],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 15
  });
  // Метка на карте
  var myPlacemark = new ymaps.Placemark([59.938631, 30.323037], {}, {
    iconLayout: 'default#image',
    iconImageHref: mapPinSrc,
    iconImageSize: mapPinSize,
    iconImageOffset: [-25, -53]
  });

  myMap.geoObjects.add(myPlacemark);
}
