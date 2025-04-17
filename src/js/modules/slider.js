const slider = document.querySelector('.slider');
const sliderContainer = slider.querySelector('.slider-container');
const sliders = sliderContainer.querySelectorAll('.slider-item');
const prevButton = slider.querySelector('.prev-button');
const nextButton = slider.querySelector('.next-button');
const indicatorsButtons = slider.querySelectorAll('.indicator');

const INIT_SLIDE_INDEX = 0;
let sliderWidth;

const setActiveSlide = (slideIndex) => {
  sliders.forEach((slide, index) =>
    slide.classList.toggle('slider-item--active', index === slideIndex),
  );
};

const setActiveIndicator = (slideIndex) => {
  indicatorsButtons.forEach((indicator, i) => {
    indicator.classList.toggle('indicator--active', i === slideIndex);
    indicator.disabled = i === slideIndex;
  });
};

const showSlide = (slideIndex) => {
  const offset = slideIndex * sliderWidth;
  sliderContainer.style.transform = `translateX(-${offset}px)`;
  setActiveSlide(slideIndex);
  setActiveIndicator(slideIndex);
};

const getCurrentSlideIndex = () => {
  return [...sliders].findIndex((slide) =>
    slide.classList.contains('slider-item--active'),
  );
};

const isLastSlide = (index) => index === sliders.length - 1;

const changeSlide = (direction) => {
  const currentIndex = getCurrentSlideIndex();
  let nextIndex;

  if (direction === 1) {
    nextIndex = isLastSlide(currentIndex)
      ? INIT_SLIDE_INDEX
      : currentIndex + direction;
  }

  if (direction === -1) {
    nextIndex =
      currentIndex === 0 ? sliders.length - 1 : currentIndex + direction;
  }

  showSlide(nextIndex);
};

const handleIndicatorClick = (index) => {
  showSlide(index);
};

const init = () => {
  sliderWidth = slider.offsetWidth;
  showSlide(INIT_SLIDE_INDEX);
  setInterval(() => changeSlide(1), 5000);
};

nextButton.addEventListener('click', () => changeSlide(1));
prevButton.addEventListener('click', () => changeSlide(-1));

indicatorsButtons.forEach((indicatoBtn, index) => {
  indicatoBtn.addEventListener('click', () => handleIndicatorClick(index));
});

export default init;
