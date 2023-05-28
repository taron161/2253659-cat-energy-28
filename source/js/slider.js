// переменные слайдера
let rangeButton = document.querySelector(".slider__range-button");
let curtain = document.querySelector(".slider__curtain");
let sliderBefore = document.querySelector(".slider__before");
let sliderAfter = document.querySelector(".slider__after");

// слайдер
rangeButton.addEventListener( "input", (slider) );

function slider() {
  sliderBefore.style.width = rangeButton.value + "%";
  sliderAfter.style.width = (100 - rangeButton.value) + "%";
  curtain.style.left = `calc(${rangeButton.value}% - ${20}px)`;
}
