// Toggle & Responsive Navigation Burger
const navSlide = () => {
  const burger = document.querySelector('.border');
  const navLists = document.querySelector('nav');

  burger.addEventListener('click', () => {
    navLists.classList.toggle('nav-active');
    burger.classList.toggle('toggle-burger');
  });
};

navSlide();

// const burger = document.getElementById('burger');
// const navLists = document.getElementById('nav');

// burger.addEventListener('click', () => {
//   navLists.classList.toggle('nav-active');
//   burger.classList.toggle('toggle-burger');
// });

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset();
  }
};
