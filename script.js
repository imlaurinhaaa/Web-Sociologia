let currentIndexMovimentos = 0;
let currentIndexSociologos = 0;
let currentIndexAssuntos = 0;

function slideLeft(containerSelector, currentIndex) {
  const cardsContainer = document.querySelector(containerSelector);
  const totalCards = cardsContainer.querySelectorAll(".card").length;
  const visibleCards = 3;
  const cardWidth = cardsContainer.querySelector(".card").offsetWidth + 20; 

  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - visibleCards;
  }

  updateSlide(cardsContainer, currentIndex, cardWidth);

  return currentIndex;
}

function slideRight(containerSelector, currentIndex) {
  const cardsContainer = document.querySelector(containerSelector);
  const totalCards = cardsContainer.querySelectorAll(".card").length;
  const visibleCards = 3;
  const cardWidth = cardsContainer.querySelector(".card").offsetWidth + 20; 

  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  updateSlide(cardsContainer, currentIndex, cardWidth);

  return currentIndex;
}

function updateSlide(container, index, cardWidth) {
  container.style.transform = `translateX(-${index * cardWidth}px)`;
}

function slideLeftMovimentos() {
  currentIndexMovimentos = slideLeft(".card-slider", currentIndexMovimentos);
}

function slideRightMovimentos() {
  currentIndexMovimentos = slideRight(".card-slider", currentIndexMovimentos);
}

function slideLeftSociologos() {
  currentIndexSociologos = slideLeft(".card-slider-2", currentIndexSociologos);
}

function slideRightSociologos() {
  currentIndexSociologos = slideRight(".card-slider-2", currentIndexSociologos);
}

function slideLeftAssuntos() {
  currentIndexAssuntos = slideLeft(".card-slider-3", currentIndexAssuntos);
}

function slideRightAssuntos() {
  currentIndexAssuntos = slideRight(".card-slider-3", currentIndexAssuntos);
}
